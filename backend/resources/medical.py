from flask import Response, request
from database.models import MedicalInfo , User
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_restful import Resource
from mongoengine.errors import FieldDoesNotExist, NotUniqueError, DoesNotExist, ValidationError, InvalidQueryError
from resources.errors import SchemaValidationError, MovieAlreadyExistsError, InternalServerError, \
UpdatingMovieError, DeletingMovieError, MovieNotExistsError
import cv2
import os
import pytesseract
from PIL import Image
import base64
import io
from imageio import imread
import json
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

class MedicalInfos(Resource):
    def get(self):
        query = MedicalInfo.objects()
        movies = MedicalInfo.objects().to_json()
        return Response(movies, mimetype="application/json", status=200)

    @jwt_required()
    def post(self):
        try:
            user_id = get_jwt_identity()
            body = request.get_json()
            user = User.objects.get(id=user_id)
            movie =  MedicalInfo(**body, added_by=user)
            movie.save()
            user.update(push__MedicalInfo=movie)
            user.save()
            id = movie.id
            return {'id': str(id)}, 200
        except (FieldDoesNotExist, ValidationError):
            raise SchemaValidationError
        except NotUniqueError:
            raise MovieAlreadyExistsError
        except Exception as e:
            raise e


class MedicalInf(Resource):
    @jwt_required()
    def put(self, id):
        try:
            user_id = get_jwt_identity()
            movie = MedicalInfo.objects.get(id=id, added_by=user_id)
            body = request.get_json()
            MedicalInfo.objects.get(id=id).update(**body)
            return '', 200
        except InvalidQueryError:
            raise SchemaValidationError
        except DoesNotExist:
            raise UpdatingMovieError
        except Exception:
            raise InternalServerError       
    
    @jwt_required()
    def delete(self, id):
        try:
            user_id = get_jwt_identity()
            movie = MedicalInfo.objects.get(id=id, added_by=user_id)
            movie.delete()
            return '', 200
        except DoesNotExist:
            raise DeletingMovieError
        except Exception:
            raise InternalServerError
    @jwt_required()
    def get(self, id):
        try:
            movies = MedicalInfo.objects(added_by=id).to_json()
            return Response(movies, mimetype="application/json", status=200)
        except DoesNotExist:
            raise MovieNotExistsError
        except Exception:
            raise InternalServerError
class extract(Resource):
    @jwt_required()
    def post(self):
        try:
            #user_id = get_jwt_identity()
            #movie = MedicalInfo.objects.get(id=id, added_by=user_id)
            body = request.get_json()
            image = base64.b64decode(str(body['img']))       
            img = Image.open(io.BytesIO(image))
            #convert to grayscale image
            img = imread(io.BytesIO(image))
            # finally convert RGB image to BGR for opencv
            # and save result
            cv2_img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
            gray=cv2.cvtColor(cv2_img, cv2.COLOR_BGR2GRAY)
            filename = "{}.jpg".format(os.getpid())
            cv2.imwrite(filename, gray)
            #gettext
            text = pytesseract.image_to_string(Image.open(filename))
            os.remove(filename)
            lines = text.splitlines()
            mediacments = []
            bloodpressure = []
            for  l in lines:
                if "medicaments" in l:
                    mediacments.append(l.split(':')[1])
                if "blood pressure" in l:
                    bloodpressure.append(l.split(':')[1])    

            userMedical = MedicalInfo.objects(added_by=body['id'])[0].to_json()
            userMedical=json.loads(userMedical)
            userMedical['medications'] = userMedical['medications'] + mediacments
            userMedical['bloodpressure'] = userMedical['bloodpressure'] + bloodpressure
            id =userMedical['_id']['$oid']
            del userMedical['_id']
            del userMedical['added_by']
            Medical = MedicalInfo.objects(added_by=body['id'])[0]
            Medical.update(**userMedical)
            return '', 200
        except InvalidQueryError:
            raise SchemaValidationError
        except DoesNotExist:
            raise UpdatingMovieError
        except Exception:
            raise InternalServerError       
    
    
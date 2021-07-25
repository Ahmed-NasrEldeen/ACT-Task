from flask import Response, request
from database.models import MedicalInfo , User
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_restful import Resource
from mongoengine.errors import FieldDoesNotExist, NotUniqueError, DoesNotExist, ValidationError, InvalidQueryError
from resources.errors import SchemaValidationError,UnauthorizedError ,MedicalAlreadyExistsError, InternalServerError, \
UpdatingMedicalError, DeletingMedicalError, MedicalNotExistsError
from flask import current_app
import json



class UserApi(Resource):
    @jwt_required()
    def get(self):
        query = User.objects()
        users = User.objects(role=current_app.config['USER']).to_json()
        user_id = get_jwt_identity()
        user = User.objects.get(id=user_id)
        if current_app.config['ADMIN'] == user.role :
            return Response(users, mimetype="application/json", status=200)
        else:
            raise UnauthorizedError


    @jwt_required()
    def post(self):
        try:
            user_id = get_jwt_identity()
            body = request.get_json()
            user = User.objects.get(id=user_id)
            medical =  MedicalInfo(**body, added_by=user)
            medical.save()
            user.update(push__MedicalInfo=medical)
            user.save()
            id = medical.id
            return {'id': str(id)}, 200
        except (FieldDoesNotExist, ValidationError):
            raise SchemaValidationError
        except NotUniqueError:
            raise MedicalAlreadyExistsError
        except Exception as e:
            raise e

class upload(Resource):
    @jwt_required()
    def post(self):
        try:
            user_id = get_jwt_identity()
            body = request.get_json()
            Medical = MedicalInfo.objects(added_by=user_id)[0]
            userMedical =json.loads(Medical.to_json())
            del userMedical['_id']
            del userMedical['added_by']
            if(userMedical['img']):
                userMedical['img'].append(body['img'])
            else:
                userMedical['img'] = [body['img']]
            Medical.update(**userMedical)
            return '', 200
        except InvalidQueryError:
            raise SchemaValidationError
        except DoesNotExist:
            raise UpdatingMedicalError
        except Exception:
            raise InternalServerError       
from flask import Response, request
from flask_jwt_extended import create_access_token
from database.models import User,MedicalInfo
from flask_restful import Resource
import datetime
from mongoengine.errors import FieldDoesNotExist, NotUniqueError, DoesNotExist
from resources.errors import SchemaValidationError, EmailAlreadyExistsError, UnauthorizedError, \
InternalServerError

class SignupApi(Resource):
    def post(self):
        try:
            body = request.get_json()
            print("this.body",body)
            user =  User(**body)
            user.hash_password()
            user.save()
            id = user.id
            #add medical to user
            user = User.objects.get(id=id)
            medical =  MedicalInfo( added_by=id ,name=str(id))
            medical.save()
            user.update(push__MedicalInfo=medical)
            user.save()
            return {'id': str(id)}, 200
        except FieldDoesNotExist:
            raise SchemaValidationError
        except NotUniqueError:
            raise EmailAlreadyExistsError
        except Exception as e:
            raise InternalServerError

class LoginApi(Resource):
    def post(self):
        try:
            body = request.get_json()
            user = User.objects.get(email=body.get('email'))
            authorized = user.check_password(body.get('password'))
            if not authorized:
                raise UnauthorizedError

            expires = datetime.timedelta(days=7)
            additional_claims ={"role":user.role}
            access_token = create_access_token(identity=str(user.id),additional_claims=additional_claims, expires_delta=expires)
            return {'token': access_token}, 200
        except (UnauthorizedError, DoesNotExist):
            raise UnauthorizedError
        except Exception as e:
            raise InternalServerError
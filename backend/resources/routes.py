from .auth import SignupApi, LoginApi
from .medical import MedicalInfos ,MedicalInf,extract
from .user import UserApi,upload
from .reset_password import ForgotPassword, ResetPassword

def initialize_routes(api):
    api.add_resource(MedicalInfos, '/api/medicals')
    api.add_resource(MedicalInf, '/api/medical/<id>')
    api.add_resource(extract, '/api/extract')
    
    api.add_resource(SignupApi, '/api/auth/signup')
    api.add_resource(LoginApi, '/api/auth/login')

    api.add_resource(UserApi, '/api/users')
    api.add_resource(upload, '/api/upload')

    api.add_resource(ForgotPassword, '/api/auth/forgot')
    api.add_resource(ResetPassword, '/api/auth/reset')

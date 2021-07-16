from flask import Flask
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_mail import Mail
from flask_cors import CORS
from database.db import initialize_db
from flask_restful import Api
from resources.errors import errors

app = Flask(__name__)
app.config.from_envvar('ENV_FILE_LOCATION')
mail = Mail(app)

# imports requiring app and mail
from resources.routes import initialize_routes

api = Api(app, errors=errors)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
CORS(app) 
app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb+srv://admin:11110000@cluster0.o0u9q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
}

initialize_db(app)
initialize_routes(api)

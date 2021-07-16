## To Run first install
pip install pipenv

The above line of code, is the first thing you have to do, this installs Pipenv and its dependencies.
pipenv install

The above line of code instantiates the Pipenv. This will create two new files, Pipfile and Pipfile.lock in your project directory and a new virtual environment for your project if it doesn’t exist already.

create .env file with credentials 

JWT_SECRET_KEY = ''
MAIL_SERVER = ''
MAIL_USE_SSL = ''
MAIL_PORT = ''
MAIL_USERNAME = ''
MAIL_PASSWORD = ''
ADMIN =''
USER  =''


run pipenv shell then python run.py to run localy

## backend  descriptions
Flask  Basic CRUD API Using MongoDB 
Structured with Blueprint and Flask-restful
Authentication and Authorization using tokens and db
Exception Handling in errors.py
Password Reset using mail service and token
## Apis
signup api:
http://host/api/auth/signup
example:
  {
    "email":"mail@gmail.com",
    "password":"password"
  }
  
  
login:  
http://host/api/auth/login
example:
  {
    "email":"mail@gmail.com",
    "password":"password"
  }
  
  
forgot password   
http://host/api/auth/forgot
example:
  {
    "email":"mail@gmail.com",
  }
  
  
requires jwt send in mail  
http://host/api/auth/reset

get users : requires jwt and admin previliges
http://host/api/users

get medical info of user : requires jwt
http://host/api/medical/id

upload ocr by user : requires jwt 
http://host/api/upload

extract info by doctor : requires jwt and admin previliges
http://host/api/extarct

## To deploy
Adding a Procfile
In order to successfully get your project deployed to Heroku, a procfile is needed.
pipenv install gunicorn

Update the pipfile and pipfile.lock
pipenv lock


Create a file with the name procfile and do not add any extension to it.
web: gunicorn app:app

Create a new git repo and push your code with the Pipfile and Pipfile.lock. Now its time to Create a Heroku account and link your git hub account.
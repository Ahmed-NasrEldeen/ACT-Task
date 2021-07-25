class InternalServerError(Exception):
    pass

class SchemaValidationError(Exception):
    pass

class medicalAlreadyExistsError(Exception):
    pass

class UpdatingmedicalError(Exception):
    pass

class DeletingmedicalError(Exception):
    pass

class medicalNotExistsError(Exception):
    pass

class EmailAlreadyExistsError(Exception):
    pass

class UnauthorizedError(Exception):
    pass

class EmailDoesnotExistsError(Exception):
    pass

class BadTokenError(Exception):
    pass

errors = {
    "InternalServerError": {
        "message": "Something went wrong",
        "status": 500
    },
     "SchemaValidationError": {
         "message": "Request is missing required fields",
         "status": 400
     },
     "medicalAlreadyExistsError": {
         "message": "medical with given name already exists",
         "status": 400
     },
     "UpdatingmedicalError": {
         "message": "Updating medical added by other is forbidden",
         "status": 403
     },
     "DeletingmedicalError": {
         "message": "Deleting medical added by other is forbidden",
         "status": 403
     },
     "medicalNotExistsError": {
         "message": "medical with given id doesn't exists",
         "status": 400
     },
     "EmailAlreadyExistsError": {
         "message": "User with given email address already exists",
         "status": 400
     },
     "UnauthorizedError": {
         "message": "Invalid username or password",
         "status": 401
     },
     "EmailDoesnotExistsError": {
         "message": "Couldn't find the user with given email address",
         "status": 400
     },
     "BadTokenError": {
         "message": "Invalid token",
         "status": 403
     }
}
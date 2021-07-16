from .db import db
from flask_bcrypt import generate_password_hash, check_password_hash

class MedicalInfo(db.Document):
    name = db.StringField(required=True, unique=True)
    bloodpressure = db.ListField(db.StringField(), default=[])
    medications = db.ListField(db.StringField(), default=[])
    img  = db.ListField(db.StringField(), default=[])
    added_by = db.ReferenceField('User')

class User(db.Document):
    email = db.EmailField(required=True, unique=True)
    password = db.StringField(required=True, min_length=6)
    role = db.StringField( min_length=6 ,default = "patient")
    MedicalInfo = db.ListField(db.ReferenceField('MedicalInfo', reverse_delete_rule=db.PULL))

    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')

    def check_password(self, password):
        return check_password_hash(self.password, password)

User.register_delete_rule(MedicalInfo, 'added_by', db.CASCADE)
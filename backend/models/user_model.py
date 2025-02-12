from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt

mongo = PyMongo()
bcrypt = Bcrypt()


class UserModel:
    @staticmethod
    def init_app(app):
        mongo.init_app(app)
        bcrypt.init_app(app)

    @staticmethod
    def create_user(fullname, email, password):
        hashed_pw = bcrypt.generate_password_hash(password).decode("utf-8")
        user = {"fullname": fullname, "email": email, "password": hashed_pw}
        mongo.db.users.insert_one(user)
        return user 

    @staticmethod
    def find_user(email):
        return mongo.db.users.find_one({"email": email})

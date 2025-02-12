from flask_jwt_extended import create_access_token
from flask_bcrypt import Bcrypt
from models.user_model import UserModel

bcrypt = Bcrypt()  # Global bcrypt initialization


class AuthService:
    @staticmethod
    def register(fullname, email, password, confirmPassword):
        if password != confirmPassword:
            return {"error": "password does not match"}, 400
        if UserModel.find_user(email):
            return {"error": "Email already exists"}, 400

        user = UserModel.create_user(fullname, email, password)
        return {"message": "user registered successfully", "email": user["email"]}, 201

    @staticmethod
    def login(email, password):
        user = UserModel.find_user(email)
        if not user or not bcrypt.check_password_hash(user["password"], password):
            return {"error": "invalid email or password"}, 401

        access_token = create_access_token(identity=user["email"])
        return {"access_token": access_token, "message": "login succesfully ", "fullname": user["fullname"]}, 200

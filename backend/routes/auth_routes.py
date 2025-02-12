from flask import Blueprint, request, jsonify
from services.auth_services import AuthService

auth_bp = Blueprint("auth", __name__)


@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.json
    return AuthService.register(data["fullname"], data["email"], data["password"], data["confirmpassword"])


@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    return AuthService.login(data["email"], data["password"])

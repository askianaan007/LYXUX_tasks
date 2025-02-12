from flask import Flask
from flask_cors import CORS
from routes.auth_routes import auth_bp
from flask_jwt_extended import JWTManager
from config import Config
from models.user_model import mongo

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)

jwt = JWTManager(app)

mongo.init_app(app)

try:
    mongo.db.command("ping")
    print("✅ MongoDB connected successfully")
except Exception as e:
    print(f"❌ MongoDB connection failed: {e}")

app.register_blueprint(auth_bp, url_prefix="/auth")

if __name__ == "__main__":
    app.run(debug=True)

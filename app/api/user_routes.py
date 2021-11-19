from flask import Blueprint, jsonify
from flask_login import login_required
from app.forms.review_form import ReviewForm
from app.models import User,db,Review
from flask import Blueprint, jsonify, request

user_routes = Blueprint('users', __name__)



@user_routes.route('/')
# @login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
# @login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()



    

    

    

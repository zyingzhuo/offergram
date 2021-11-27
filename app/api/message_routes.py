from flask import Blueprint, jsonify, request
from app.forms.message_form import MessageForm
from app.forms.product_form import ProductForm
from app.forms.review_form import ReviewForm

# from flask_login import login_required
from app.models import Product,db, Review, User, Product, Message, message
from sqlalchemy import update

message_routes = Blueprint('message_routes', __name__)


@message_routes.route('/sender/<int:senderId>/receiver/<int:receiverId>', methods=['GET'])
def get_messages(senderId,receiverId):
    messages=Message.query.filter(((Message.senderId==senderId)& (Message.receiverId==receiverId))|((Message.senderId==receiverId)& (Message.receiverId==senderId))).all()
    
    return {
        'messages': [message.to_dict() for message in messages]
    }

    # |(Message.senderId==receiverId& Message.receiverId==senderId)

# @message_routes.route('/sender/<int:senderId>/receiver/<int:receiverId>', methods=['POST'])
@message_routes.route('/', methods=['POST'])
def add_message():
    form=MessageForm()
    form['csrf_token'].data=request.cookies['csrf_token']
    if form.validate_on_submit():
        data=Message()
        form.populate_obj(data)
        db.session.add(data)
        db.session.commit()
        return data.to_dict()
    
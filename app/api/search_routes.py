from flask import Blueprint, jsonify, request
from app.forms.product_form import ProductForm
from app.forms.review_form import ReviewForm

# from flask_login import login_required
from app.models import Product,db, Review, User, Product
from sqlalchemy import update

search_routes = Blueprint('search_routes', __name__)

@search_routes.route('')
def searchPage():
    query = request.args.get("query")
    city= request.args.get('city').strip()
    print('!!!!!!!!!', city)
    searchResults=Product.query.filter(Product.name.ilike(f"%{query}%")&(Product.location==city)).all()
    print('results!!!!!!!!!!!!', searchResults)
    return {
        'products':[product.to_dict() for product in searchResults]
    }


    
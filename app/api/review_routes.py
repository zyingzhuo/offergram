from flask import Blueprint, jsonify, request
from app.forms.product_form import ProductForm
from app.forms.review_form import ReviewForm

# from flask_login import login_required
from app.models import Product,db, Review, User, Product
from sqlalchemy import update

review_routes = Blueprint('review_routes', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@review_routes.route('/<int:sellerId>/', methods=['GET'])
def getAllCommentsOfSeller(sellerId):
  allReviews=Review.query.filter(Review.revieweeId==sellerId).all()
  return {
      'reviews':[review.to_dict() for review in allReviews]
  }
  #

@review_routes.route('', methods=['POST'] )
def add_review():
    form=ReviewForm()
    
    form['csrf_token'].data=request.cookies['csrf_token']
    if form.validate_on_submit():
        data=Review()
        form.populate_obj(data)
        db.session.add(data)
        db.session.commit()
        return data.to_dict()
    else:
       return {"errors":validation_errors_to_error_messages(form.errors)}


@review_routes.route('/product/<int:id>', methods=['DELETE'])
def delete_review(id):
    review=Review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return review.to_dict()


@review_routes.route('/product/<int:id>/edit', methods=['POST'])
def edit_review(id):
    form=ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data=form.data
        review=Review.query.get(id)
        review.reviewerId=data['reviewerId']
        review.revieweeId=data['revieweeId']
        review.rating=data['rating']
        review.comment=data['comment']

        db.session.commit()
        return review.to_dict()


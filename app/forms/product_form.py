
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models import User

# def name_length(form, field):
#     name = field.data
#     if len(name) > 25:
#         raise ValidationError('Product name cannot be more than 25 characters.')

# def price_positive(form,field):
#     price=field.data
#     if price <0:
#         raise ValidationError('Product price cannot be less than 0')

# def description_length(form, field):
#     description=field.data
#     if len(description)>2500:
#         raise ValidationError('Product description cannot be more than 2500 characters.')

class ProductForm(FlaskForm):
    sellerId=IntegerField('sellerId', validators=[DataRequired()])
    name=StringField('name', validators=[DataRequired()])
    image=StringField('image', validators=[DataRequired()])
    location=SelectField('location', choices=['Los Angels', 'New York City'], validators=[DataRequired()])
    description=StringField('description', validators=[DataRequired()])
    price=IntegerField('price', validators=[DataRequired()])
    category=SelectField('category', choices=['Electronics & Media', 'Home & Garden', 'Clothing,Shoes,& Accessories'], validators=[DataRequired()])
   
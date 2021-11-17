
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, SubmitField
from wtforms.validators import DataRequired


class ProductForm(FlaskForm):
    sellerId=IntegerField('sellerId', validators=[DataRequired()])
    name=StringField('name', validators=[DataRequired()])
    image=StringField('image', validators=[DataRequired()])
    location=SelectField('location', choices=['Los Angels', 'New York City'], validators=[DataRequired()])
    description=StringField('description', validators=[DataRequired()])
    price=IntegerField('price', validators=[DataRequired()])
    category=SelectField('category', choices=['Electronics & Media', 'Home & Garden', 'Clothing,Shoes,& Accessories'], validators=[DataRequired()])
   
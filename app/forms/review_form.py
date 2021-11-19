
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, SubmitField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    reviewerId=IntegerField('reviewerId', validators=[DataRequired()])
    revieweeId=IntegerField('revieweeId', validators=[DataRequired()])
    rating=IntegerField('rating', validators=[DataRequired()])
    comment=StringField('comment', validators=[DataRequired()])
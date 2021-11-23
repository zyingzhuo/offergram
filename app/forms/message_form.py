
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, SubmitField
from wtforms.validators import DataRequired


class MessageForm(FlaskForm):
    senderId=IntegerField('senderId', validators=[DataRequired()])
    receiverId=IntegerField('receiverId', validators=[DataRequired()])
    message=StringField('message', validators=[DataRequired()])
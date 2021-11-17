from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    # profilePic=db.Column(db.String, default='https://www.alaska.edu/_resources/images/placeholders/profile.png')
    # contactNumber=db.Column(db.String, nullable=False)
    # paymentsVerified=db.Column(db.Boolean)
    # bought=db.Column(db.Integer)
    # sold=db.Column(db.Integer)
    # folowers=db.Column(db.Integer)

    @property
    def password(self):
        return self.hashed_password
   
    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            # 'profilePic': self.profilePic,
            # 'contactNumber': self.contactNumber,
            # 'paymentsVerified': self.paymentsVerified,
            # 'bought': self.bought,
            # 'sold': self.sold,
            # 'followers': self.folowers
        }

    reviews=db.relationship('Review', back_populates='user')
   
    products=db.relationship('Product', back_populates='user')

from .db import db


class Review(db.Model):
    __tablename__= 'reviews'

    id=db.Column(db.Integer, primary_key=True)
    reviewerId=db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    revieweeId=db.Column(db.Integer, nullable=False)
    rating=db.Column(db.Integer, nullable=False)
    comment=db.Column(db.String, nullable=False)

    user=db.relationship('User', back_populates='reviews')

    def to_dict(self):
        return {
            'id': self.id,
            'reviewerId': self.reviewerId,
            'revieweeId': self.revieweeId,
            'rating': self.rating,
            'comment': self.comment
        }

        
    
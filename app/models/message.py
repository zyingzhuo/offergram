from .db import db
from datetime import datetime


class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    senderId= db.Column(db.Integer,db.ForeignKey('users.id'), nullable=False )
    receiverId=db.Column(db.Integer, nullable=False)
    message = db.Column(db.String, nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False,
                          default=datetime.utcnow())
    updatedAt = db.Column(db.DateTime, nullable=False,
                          default=datetime.utcnow())
    
    user=db.relationship('User', back_populates='messages')

    def to_dict(self):
        return {
            'id': self.id,
            "senderId": self.senderId,
            "receiverId": self.receiverId,
            'message': self.message,
            'createdAt': self.createdAt,
            "updatedAt": self.updatedAt,
        }
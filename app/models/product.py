from .db import db


class Product(db.Model):
  __tablename__='products'

  id=db.Column(db.Integer, primary_key=True)
  sellerId=db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  name=db.Column(db.String, nullable=False)
  image=db.Column(db.String, nullable=False)
  location=db.Column(db.String, nullable=False)
  description=db.Column(db.String, nullable=False)
  price=db.Column(db.Integer, nullable=False)
  category=db.Column(db.String, nullable=False)

  user=db.relationship('User', back_populates='products')

  def to_dict(self):
      return {
          'id': self.id,
          'sellerId': self.sellerId,
          'name': self.name,
          'image': self.image,
          'location': self.location,
          'description': self.description,
          'price': self.price,
          'category': self.category
      }
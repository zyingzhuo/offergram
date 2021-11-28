from app.models import db, Review

def seed_reviews():
    review1= Review(
        reviewerId=1,
        revieweeId=2,
        rating=5,
        comment='reliable seller'
    )

    review2= Review(
        reviewerId=3,
        revieweeId=2,
        rating=4,
        comment='on time'
    )

    review3= Review(
        reviewerId=4,
        revieweeId=2,
        rating=4,
        comment='good communication'
    )

    review4= Review(
        reviewerId=2,
        revieweeId=1,
        rating=4,
        comment='items as descriped'
    )

    review5=Review(
        reviewerId=3,
        revieweeId=1,
        rating=3,
        comment='good quality'
    )

    review6=Review(
        reviewerId=4,
        revieweeId=1,
        rating=4,
        comment='friendly seller'
    )

    review7= Review(
        reviewerId=5,
        revieweeId=3,
        rating=4,
        comment='the seller provides delivery, highly recommend'
    )

    review8= Review(
        reviewerId=1,
        revieweeId=3,
        rating=4,
        comment='super reliable'
    )

    review9= Review(
        reviewerId=2,
        revieweeId=3,
        rating=5,
        comment='the seller sells authentic stuff'
    )

    review10= Review(
        reviewerId=3,
        revieweeId=4,
        rating=4,
        comment='great seller, friendly'
    )

    review11= Review(
        reviewerId=5,
        revieweeId=4,
        rating=3,
        comment='doesnt provide delivery'
    )

    review12= Review(
        reviewerId=1,
        revieweeId=4,
        rating=4,
        comment='the seller provides refund if not satisfied'
    )

    review13= Review(
        reviewerId=2,
        revieweeId=4,
        rating=2,
        comment='item defective'
    )

    review14= Review(
        reviewerId=3,
        revieweeId=5,
        rating=5,
        comment='reliable'
    )

    review15=Review(
        reviewerId=4,
        revieweeId=5,
        rating=3,
        comment='good communication'
    )

    review16=Review(
        reviewerId=1,
        revieweeId=5,
        rating=4,
        comment='the seller gives good price, much cheaper than retail'
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)
    db.session.add(review11)
    db.session.add(review12)
    db.session.add(review13)
    db.session.add(review14)
    db.session.add(review15)
    db.session.add(review16)

    db.session.commit()



def undo_reviews():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
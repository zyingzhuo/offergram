from app.models import db, Message

def seed_messages():
    message1= Message(
        senderId=1,
        receiverId=2,
        message='hi, is the sofa still available?'
    )

    message2=Message(
        senderId=1,
        receiverId=3,
        message='hi, i was wondering if delivery is optional?'

    )

    message3= Message(
        senderId=1,
        receiverId=4,
        message='hi, where are you located?'
    )

    message4= Message(
        senderId=2,
        receiverId=1,
        message='yes, it is'
    )

    message5= Message(
        senderId=3,
        receiverId=1,
        message='sorry, pick up only'
    )

    message6= Message(
        senderId=4,
        receiverId=1,
        message='downtown area, which items are you interested?'
    )

    db.session.add(message1)
    db.session.add(message2)
    db.session.add(message3)
    db.session.add(message4)
    db.session.add(message5)
    db.session.add(message6)

    db.session.commit()




def undo_messages():
    db.session.execute('TRUNCATE messages RESTART IDENTITY CASCADE;')
    db.session.commit()
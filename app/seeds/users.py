from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password',
        profilePic="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        bought=2,
        sold=2)

    lala = User(
        username='Lala', email='lala@aa.io', password='password',
        profilePic='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2531&q=80',
        bought=100,
        sold=30)

    jojo= User(
        username='Jojo', email='jojo@aa.io', password='password',
        profilePic='https://scontent.flas1-2.fna.fbcdn.net/v/t1.6435-9/181964622_193748319232088_6294252897318227780_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=Mznw444WJiAAX8nxlmb&_nc_ht=scontent.flas1-2.fna&oh=0e9dbd993ac690a7a2c56f45ba085a70&oe=61C7263A',
        bought=50,
        sold=4
    )

    nick= User(
        username='Nick', email='nick@aa.io', password='password',
        profilePic='https://www.musicconnection.com/wp-content/uploads/2019/05/Song-Biz-6-Profile-Subject-Nick-Furlong-620x420.jpg',
        bought=2,
        sold=0
    )

    jennifer= User(
        username='Jennifer', email='jennifer@aa.io', password='password',
        profilePic='https://asianwiki.com/images/f/f8/JenniferLee.jpg',
        bought=4,
        sold=100
    )
 

    db.session.add(demo)
    db.session.add(lala)
    db.session.add(jojo)
    db.session.add(nick)
    db.session.add(jennifer)
    
    
   

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

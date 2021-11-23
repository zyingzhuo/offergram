# from flask_socketio import SocketIO, emit
# import os
# from app.models import User,Message,db
# from datetime import datetime




# if os.environ.get("FLASK_ENV") == "production":
#     origins = [
#         "https://offergram-aa.herokuapp.com/",
#         "https://offergram-aa.herokuapp.com/"
#     ]
# else:
#     origins = "*"

# # create your SocketIO instance
# socketio = SocketIO(cors_allowed_origins=origins)





# @socketio.on('chat')
# def handle_chat(data):
#     message= Message(
        
#         senderId=data['senderId'],
#         receiverId=data['receiverId'],
#         message=data['message'],
#         createdAt=datetime.utcnow()
#     )
   
#     db.session.add(message)
#     db.session.commit()

#     emit(data['id'], data, broadcast=True)



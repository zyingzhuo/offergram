import { io } from 'socket.io-client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getMessages } from '../../store/message';
import { useParams } from 'react-router-dom';
import {getUsers} from'../../store/user'
import './DirectMessage.css'
import ChatForm from '../ChatForm/ChatForm';
import { useHistory } from "react-router";
import './DirectMessage.css'

let socket;

const DirectMessage= ()=>{
  
  const [setMessages] = useState([])
  const [chatInput, setChatInput] = useState("");
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  const [messageInput, setMessageInput] = useState("");
  const userId=user.id
  const history=useHistory()

//   useEffect(()=>{
//       async()=>{
//           await dispatch(getDM())
//       }
//   }, [dispatch,receiverId])

//   useEffect(() => {
//       socket= io()

//       socket.on('chat', (chat)=>{
//           setMessages(messages=>[...messages,chat])
//       })

//       return () => {
//           socket.disconnect()
//       }
//   }, [])
  const senderId=useSelector(state=>state.session.user.id)
  const {receiverId}=useParams()

//   const updateChatInput = (e) => {
//     setChatInput(e.target.value)
// };

//   const sendChat = (e) => {
//     e.preventDefault()
//     socket.emit("chat", { user: user.username, msg: chatInput });
//     setChatInput("")
// }
useEffect(()=>{
    dispatch(getMessages(senderId,receiverId))
    dispatch(getUsers())
}, [dispatch,senderId,receiverId])

const messages= useSelector(state=>Object.values(state.message))
const users=useSelector(state=>state.user)

useEffect(()=>{
    socket=io()
    socket.on('receiverId,senderId', async()=>{
        await dispatch(getMessages())
    })

    return (()=>{
        socket.disconnect()
    })
},[senderId, receiverId,dispatch])


const onSubmit = (e) => {
    e.preventDefault()
    
    socket.emit("chat", {
        
        message: messageInput, 
        senderId:userId,
        receiverId});
    
    setMessageInput("")
    // dispatch(createMessage())
    // history.push(`/messages/sender/${userId}/receiver/${receiverId}`)
   
}

return (user && (
    <div className='DMContainer'>
        
        <div >
            {messages?.map((message) => (
                <div className='singleMessage'>
                <div className='messageContainer'>
                <div>
                <span style={{ color: 'gray', fontSize: '10px'}}>{new Date(message.createdAt).toLocaleString()}</span>
                <div>{users[message.senderId]?.username}: </div>
                </div>
                <div >{message.message}</div>
                </div>
                </div>
            ))}
        </div>
        <form onSubmit={onSubmit} className='messageform'>
   
        <input
        type='text'
        value={messageInput}
        onChange={(e)=>setMessageInput(e.target.value)}
        />
       <div style={{ display: 'flex', justifyContent: 'end', marginTop: '-40px'}}>
           <button  type="submit" style={{height:'1.5rem', width:'3rem'}}>Send</button>
       </div>
       </form>
      
    </div>
)
)
}

export default DirectMessage
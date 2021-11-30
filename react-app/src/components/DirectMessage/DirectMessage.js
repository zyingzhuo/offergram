// import { io } from 'socket.io-client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getMessages } from '../../store/message';
import { useParams } from 'react-router-dom';
import {getUsers} from'../../store/user'
import './DirectMessage.css'
import ChatForm from '../ChatForm/ChatForm';
import { useHistory } from "react-router";
import './DirectMessage.css'
import { createMessage } from '../../store/message';
// let socket;

const DirectMessage= ()=>{
  
  const [setMessages] = useState([])
  const [chatInput, setChatInput] = useState("");
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  const [messageInput, setMessageInput] = useState("");
  const userId=user.id
  const history=useHistory()


  const senderId=useSelector(state=>state.session.user.id)
  const {receiverId}=useParams()



const messages= useSelector(state=>Object.values(state.message))
const users=useSelector(state=>state.user)
// }


useEffect(()=>{
    dispatch(getUsers())
    dispatch(getMessages(senderId,receiverId))

}, [dispatch,receiverId])

// useEffect(()=>{
//     dispatch(getMessages(senderId, receiverId))
// },[])

// useEffect(()=>{
//     if(messageInput.length) {

//         dispatch(getMessages(senderId,receiverId))
//     }
// },[messages])




// useEffect(()=>{
//     socket=io()
//     socket.on('receiverId,senderId', async()=>{
//         await dispatch(getMessages())
//     })

//     return (()=>{
//         socket.disconnect()
//     })
// },[senderId, receiverId,dispatch])


const onSubmit = async(e) => {
    e.preventDefault(e)
    
    const payload= {
        
        message: messageInput, 
        senderId:userId,
        receiverId};
    
       const message=await dispatch(createMessage(payload))
       if(message) {
           history.push(`/messages/sender/${userId}/receiver/${receiverId}`)
            
       }
       setMessageInput("")
   
}

return (user && (
    <div className='DMContainer'>
        
        <div className='msgPortion' >
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
        <div className='formPortion'>
            <form onSubmit={onSubmit} className='messageform' style={{width:'400px'}}>
    
                <input
                type='text'
                placeholder='Message'
                value={messageInput}
                onChange={(e)=>setMessageInput(e.target.value)}
                style={{width:'400px', height:'70px'}}
                />
                <div style={{display:'flex', justifyContent:'flex-end', alignItems:'flex-end',vh:'5px'}}>
                <button  type="submit" style={{height:'1.5rem', width:'3rem', fontWeight:'400', position:'absolute', zIndex:'999',border:'1px solid',borderColor:'#00a87e', backgroundColor:'#ffffff',borderRadius:'4px',marginTop:'2%',width:'100px'}}>Send</button>
                </div>
            </form>
            {/* <div style={{ display: 'flex', justifyContent: 'end', marginTop: '-40px'}}> */}
            {/* </div> */}
       </div>
      
    </div>
)
)
}

export default DirectMessage
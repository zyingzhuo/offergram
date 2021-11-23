// import { useState, useEffect } from "react";
// import EditReviewFormProvider from "../../context/EditReviewContext";
// import { useSelector,useDispatch } from "react-redux";
// import { io } from 'socket.io-client';
// import { useHistory } from "react-router";
// import React from 'react';
// import { Widget } from 'react-chat-widget';
// import { getMessages } from "../../store/message";


// let socket;

// function ChatForm ({sellerId,sellerName}) {
//     const user=useSelector(state=>state.session?.user.username)
//     const userId=useSelector(state=>state.session?.user.id)
//     const [messageInput, setMessageInput] = useState("");
//     const [messages, setMessages]=useState([])
//     const dispatch=useDispatch()
//     const history=useHistory()
//     // useEffect(()=>{
//     //     async()=>{
//     //         await dispatch(getDM())
//     //     }
//     // }, [dispatch,sellerId])

//     // useEffect(()=>{
//     //     socket=io()
//     //     socket.on(String(sellerId,userId), async()=>{
//     //         //this place might be replaced with thunk
//     //         // setMessages(messages=>[...messages])
//     //         await dispatch(getMessages(sellerId, userId))
//     //     })
        
//     //     return (()=>{
//     //         socket.disconnect()
//     //     })
//     // },[dispatch,sellerId, userId])

//     useEffect(()=>{
//         socket=io()
//         socket.on('chat', (chat)=>{
//             setMessages(messages=>[...messages,chat])
//         })

//         return (()=>{
//             socket.disconnect()
//         })
//     },[])


//   //send chat
//     const onSubmit = (e) => {
//         e.preventDefault()
        
//         socket.emit("chat", {
            
//             message: messageInput, 
//             senderId:userId,
//             receiverId: sellerId});
        
//         setMessageInput("")
//         history.push(`/messages/sender/${userId}/receiver/${sellerId}`)
//     }

 
    
// return (
//     <>
//     <div>{sellerName}</div>
//     <div className="messageDiv">
//         {/* {messageArr.map((message,i)=>(
//              <span style={{
//                 color: 'gray', fontSize: 'small'}}>
//             {new Date(message.createdAt).toLocaleString()}</span>
//         ))} */}
//         {/* <div>
//             {message.message}
//         </div> */}
//     </div>
//     <form onSubmit={onSubmit}>
   
//     <input
//         type='text'
//         value={messageInput}
//         onChange={(e)=>setMessageInput(e.target.value)}
       
//     />
//         <div style={{ display: 'flex', justifyContent: 'end', marginTop: '-40px'}}>
//             <button className='middleBtn2' type="submit" style={{ borderColor: '#183a1d', zIndex: '5'}}>Send</button>
//     </div>
// </form>
    
   
// </>
// )
// }

// export default ChatForm
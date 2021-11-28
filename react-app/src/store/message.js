const LOAD_MESSAGES='message/loadMessages'
const ADD_MESSAGE='message/addMessage'

const loadMessages=(messages)=>({
    type: LOAD_MESSAGES,
    messages
})

const addMessage=(message)=>({
    type: ADD_MESSAGE,
    message
})

export const getMessages=(senderId, receiverId)=>async(dispatch)=>{
    const response=await fetch(`/api/messages/sender/${senderId}/receiver/${receiverId}`)
    if(response.ok) {

        const messages=await response.json()
        dispatch(loadMessages(messages.messages))
        return messages
    }
}

export const createMessage=(payload)=>async(dispatch)=>{
    const response= await fetch(`/api/messages/`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })

    if(response.ok) {
        const message=await response.json()
        dispatch(addMessage(message))
        return message
    }
}

const initialState={}
const messageReducer=(state=initialState,action)=>{
    switch(action.type) {
        case LOAD_MESSAGES: {
            const newState={};
            (action.messages).forEach(message=>{
                newState[message.id]=message
            })
            return newState
        }
        case ADD_MESSAGE: {
            const newState={...state}
            newState[action.message.id]=action.message
            return newState
        }

        default:
            return state;
    }
}

export default messageReducer
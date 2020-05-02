import React from 'react'
import './Chat.sass'

import Messages from './Messages/Messages'
import Form from './ChatForm/ChatForm'

const Chat = (props) => {
    return (
        <div className='chat'>
            <Messages messages={props.messages} currentUser={props.currentUser} />
            <Form addNewMessage={props.addNewMessage} logout={props.logout}/>
        </div>
    )
}

export default Chat
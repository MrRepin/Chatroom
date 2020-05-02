import React from 'react'
import Message from './Message'

import './Messages.sass'

const Messages = (props) => {

    return (
        <div className='messages'>
            <div className='messagesScroll'>
                    {
                        props.messages.length > 0
                        ?
                            <div className='messagesScrollIns'>
                                {props.messages.map((item, index) => {
                                    return (
                                        <Message {...item} currentUser={props.currentUser} key={index} />
                                    )
                                })}
                            </div>
                        :
                            <div className='noMessages'>Сообщений нет</div>
                    }
            </div>
        </div>
    )

}

export default Messages
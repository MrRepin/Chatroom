import React from 'react'

import './Messages.sass'

const Message = (props) => {

    let classList = 'message otherUser'

    if(props.id === props.currentUser.id) {
        classList = 'message currentUser'
    }

    return (
        <div className={classList}>
            <div className='messageIns'>
                <div className='text'>
                    <p>{props.message}</p>
                    <small>2020</small>
                </div>
                <div className='person'>
                    <div className='avatar'>
                        <p>{props.name[0]}</p>
                    </div>
                    <p className='name'>{props.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Message
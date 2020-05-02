import React from 'react'

import './UserList.sass'

const User = (props) => {
    return (
        <div className='user'>
            <div className='avatar'>
                <p>{props.name[0]}</p>
            </div>
            <div className='userInfo'>
                <p className='name'>{props.name}</p>
            </div>
        </div>
    )
}

export default User
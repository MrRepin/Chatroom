import React from 'react'
import User from './User'
import './UserList.sass'

const GuestList = (props) => {
    const userLIst = props.users
    const currentUser = props.currentUser

    return (
        <div className='userlist'>
            <div className='currentUser'>
                <User name={`${currentUser.name} (You)`} />
            </div>
            <div className='otherUsers'>
                <div className='otherUsersIns'>
                    {userLIst.map(user => {
                        return (
                            <User name={user.name} key={user.id} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default GuestList
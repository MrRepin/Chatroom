import React from 'react'
import {connect} from 'react-redux'
import {getMessages, addMessage} from '../../store/actions/chat'
import {authentificationLogout} from '../../store/actions/auth'
import openSocket from 'socket.io-client'

import UserList from '../../components/Chatroom/Userlist/UserList'
import Chat from '../../components/Chatroom/Chat/Chat'
import DefaultAlert from '../../components/UI/Alerts/DefaultAlert'

import './Chatroom.sass'

const socket = openSocket('http://localhost:3001')

class Chatroom extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            alert: {
                name: this.props.currentUser.name,
                text: 'Присоединился к беседе',
                class: 'alert-success'
            },
        }
    }

    addNewMessage = (e) => {
        e.preventDefault()
        const text = e.target.querySelector('textarea').value
        const message = {
            id: this.props.currentUser.id,
            name: this.props.currentUser.name,
            message: text
        }
        const data = [...this.props.messages, message]
        this.props.addMessage(data)
        socket.emit('chatMessage', message)
        e.target.querySelector('textarea').value = ''
    }

    componentDidMount() {
        this.props.getMessages()
        socket.on('message', message => {
            console.log(message)
        })
    }

    render() {
        return (
            <div className='container'>
                <DefaultAlert {...this.state.alert} />
                <div className='chatroom'>
                    <Chat
                        messages={this.props.messages}
                        currentUser={this.props.currentUser}
                        addNewMessage={this.addNewMessage.bind(this)}
                        logout={this.props.logout}
                    />
                    <UserList
                        users={this.props.userList}
                        currentUser={this.props.currentUser}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth.auth,
        currentUser: state.auth.currentUser,
        userList: state.auth.userList,
        messages: state.chat.messages
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMessages: () => dispatch(getMessages()),
        addMessage: data => dispatch(addMessage(data)),
        logout: () => dispatch(authentificationLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom)
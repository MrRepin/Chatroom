import React from 'react'
import {connect} from 'react-redux'
import $ from 'jquery'

import AuthForm from '../../components/Auth/AuthForm'
import DefaultModal from '../../components/UI/Modal/DefaultModal'

import {authentification} from '../../store/actions/auth'

import './Auth.sass'

class Auth extends React.Component {

    personAuth(e) {
        e.preventDefault()
        const value = e.target.querySelector('.name').value
        this.props.authentification(value)
    }

    componentDidUpdate() {
        if(!this.props.error) {
            this.props.history.push('/')
            return
        }
        $('#authModal').modal('show')
    }

    render() {
        return (
            <div className='auth'>
                <AuthForm personAuth={this.personAuth.bind(this)} />
                <DefaultModal {...this.props.error}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth.auth,
        currentUser: state.auth.currentUser,
        error: state.auth.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authentification: value => dispatch(authentification(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
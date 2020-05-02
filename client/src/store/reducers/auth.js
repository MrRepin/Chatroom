import {AUTH_LOGIN, AUTH_ERROR, AUTH_LOGOUT} from '../actions/actionTypes'

const initialState = {
    auth: false,
    currentUser: {},
    error: null,
    userList: []
}

const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case AUTH_LOGIN:
            return {
                ...state,
                auth: true,
                currentUser: action.payload.currentUser,
                userList: action.payload.userList,
                error: null
            }
        case AUTH_ERROR:
            return {
                ...state, error: action.error
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                auth: action.auth
            }
        default:
            return state
    }

}

export default authReducer
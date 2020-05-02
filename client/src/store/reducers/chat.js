import { GET_MESSAGES, ERR_MESSAGES, ADD_MESSAGE } from "../actions/actionTypes"

const initialState = {
    messages: [],
    error: null
}

const chatReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }
        case ERR_MESSAGES:
            return {
                ...state,
                error: action.error
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: action.messages
            }
        default:
            return state
    }

}

export default chatReducer
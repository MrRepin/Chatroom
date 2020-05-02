import { GET_MESSAGES, ADD_MESSAGE } from "./actionTypes"

export function getMessages() {
    return dispatch => {
        const messages = [
            {
                id: 1,
                name: 'Dima',
                message: 'Some text here'
            },
            {
                id: 1,
                name: 'Dima',
                message: 'Some text here more'
            },
            {
                id: 2,
                name: 'Michael',
                message: 'Some text here more than text prev'
            },
        ]
        dispatch(getMessagesSuccess(messages))
    }
}

export function getMessagesSuccess(data) {
    return {
        type: GET_MESSAGES,
        payload: data
    }
}

export function addMessage(data) {
    return {
        type: ADD_MESSAGE,
        messages: data
    }
}
import {AUTH_LOGIN, AUTH_ERROR, AUTH_LOGOUT} from './actionTypes'

export function authentification(value) {
    return dispatch => {
        const id = Math.round(Math.random() * 1000000)
        const userList = [
            {
                id: 21,
                name: 'Michael'
            },
            {
                id: 224,
                name: 'Dima'
            },
        ]
        const data = {
            currentUser: {
                id,
                name: value,
            },
            userList
        }
        for(let item of userList) {
            if(value.toLowerCase() === item.name.toLowerCase()) {
                dispatch(authentificationError())
                return
            }
        }
        dispatch(authentificationSuccess(data))
    }
}

export function authentificationSuccess(data) {
    return {
        type: AUTH_LOGIN,
        payload: data
    }
}

export function authentificationError() {
    return {
        type: AUTH_ERROR,
        error: {
            id: 'authModal',
            title: 'Ошибка авторизации',
            text: 'Пользователь с таким именем уже общается. Напишите другое.'
        }
    }
}

export function authentificationLogout() {
    return {
        type: AUTH_LOGOUT,
        auth: false
    }
}
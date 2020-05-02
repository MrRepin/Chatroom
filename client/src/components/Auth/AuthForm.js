import React from 'react'

import './AuthForm.sass'

const Form = (props) => {
    return (
        <div className="authForm">
            <h3>Введите ваши данные</h3>
            <form onSubmit={props.personAuth}>
                <div className="form-group">
                    <input type="text" required className="form-control name" placeholder="Введите ваше имя" />
                </div>
                <button type="submit" className="btn btn-light">Войти в чат</button>
            </form>
        </div>
    )
}

export default Form
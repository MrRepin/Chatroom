import React from 'react'

import './ChatForm.sass'

const Form = (props) => {
    return (
        <div className='chatForm'>
            <form onSubmit={props.addNewMessage}>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        placeholder="Введите ваше сообщение"
                        required
                    ></textarea>
                </div>
                <div className="form-group buttons">
                    <button type="submit" className="btn btn-primary">Отправить</button>
                    <button className="btn btn-primary logout" onClick={props.logout}>Выйти из чата</button>
                </div>
            </form>
        </div>
    )
}

export default Form
import React from 'react'

import './DefaultAlert.sass'

const DefaultAlert = (props) => {

    const classList = `alert ${props.class} alert-dismissible fade hide defaultAlert`

    return (
    <div className={classList} role="alert">
        <strong>{props.name}</strong> {props.text}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    )
}

export default DefaultAlert
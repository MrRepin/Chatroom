import React from 'react'

const DefaultModal = (props) => {
    return (
        <div className="modal fade" id={props.id} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">{props.text}</div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefaultModal
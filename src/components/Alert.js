import React from 'react'



function Alert(props) {
    return (
        props.data && <div className={`alert alert-${props.data.type} alert-dismissible fade show`} role="alert">
            <strong>Hey Roshan!</strong> {props.data.message}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
export default Alert;
import React from 'react'

import Form from 'react-bootstrap/Form'

const TextInput = ({ onReturnPress, ...props }) => (
    onReturnPress ? <TextInputWithReturnListener onReturnPress={ onReturnPress } { ...props }/> : <Form.Control { ...props } />
)

const TextInputWithReturnListener = ({ onReturnPress, ...props }) => {
    function handleKeyPress(event) {
        if(event.key === "Enter") {
            onReturnPress(event)
        }
    }
    return <Form.Control { ...props } onKeyPress={ handleKeyPress } />
}

export default TextInput
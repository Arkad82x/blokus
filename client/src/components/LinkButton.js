import React from 'react'
import { withRouter } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

const LinkButton = ({ onClick, children, to, history, staticContext, match, location, ...props }) => {
    function handleClick() {
        if(!onClick || onClick()) {
            history.push(to)
        }
    }

    return (
        <Button {...props} onClick={handleClick}> { children }</Button>
    )
}

export default withRouter(LinkButton)
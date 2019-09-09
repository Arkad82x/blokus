import React from 'react'

import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default ({inviteURL, copyToClipboard}) => (
  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>
        <span className="oi oi-share" title="share" aria-hidden="true"></span>
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl defaultValue={inviteURL} readOnly />
    <InputGroup.Append>
      <Button onClick={inviteURL => copyToClipboard(inviteURL)}>copy</Button>
    </InputGroup.Append>
  </InputGroup>
)


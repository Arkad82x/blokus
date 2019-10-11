import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

import routes from '../../routes'

const MenuButton = styled(Button)`
    border: 5px outset lightgray;
    padding: 5px 10px;
    text-align: center;
    font-size: 20px;
    text-transform: uppercase;
    color: black;
    margin: 8px 0px;
    flex: 1;

`

const FlexLink = styled(Link)`
    display: flex;
`

const Menu = styled.div`
    display:flex;
    flex-direction: column;
    border: 1px solid lightgray;
    padding: 20px;
`


const Wrapper = styled.div`
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
`

export default () => (
        <Wrapper>
            <Menu>
                {routes.map(route => (
                    <FlexLink to={route.path} key={route.path}>
                        <MenuButton variant="light">{ route.label }</MenuButton>
                    </FlexLink>
                ))}
            </Menu>
        </Wrapper>
)

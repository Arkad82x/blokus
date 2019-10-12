import React from 'react'
import styled from 'styled-components'
import LinkButton from '../../components/LinkButton'
import { menuRoutes } from '../../routes'

const MenuButton = styled(LinkButton)`
    border: 5px outset #5269ab;
    padding: 20px 100px;
    text-align: center;
    font-size: 20px;
    text-transform: uppercase;
    margin: 8px 20px;
    flex: 1;
    font-weight: bold;
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
            {menuRoutes.map(route => (
                <MenuButton to={route.path} key={route.path}>{ route.label }</MenuButton>
            ))}
        </Menu>
    </Wrapper>
)

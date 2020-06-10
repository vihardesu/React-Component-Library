import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const StyledLink = styled(NavLink)`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: 100%;

    padding: 0;
    margin: .25cm;
    text-decoration: none;
    box-sizing: border-box;

    color: rgb(204,215,245);
    font-size: 1.25rem;
    font-weight: 500;

    &:visited {
        color: rgb(101,255,218);
        border-bottom: 5px solid rgb(101,255,218);
    }
    
    &.active, :hover {
        color: rgb(101,255,218);
        border-bottom: 5px solid rgb(101,255,218);
    }
`;

export default function InternalLink({exact, to, children}) {
    return (
        <StyledLink exact={exact} to={to}>{children}</StyledLink>
    )
}

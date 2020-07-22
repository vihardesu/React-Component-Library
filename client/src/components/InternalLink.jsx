import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const StyledLink = styled(NavLink)`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding: 0;
    color: white;
    box-sizing: border-box;

    &:visited {

    }
    
    &.active, :hover {

    }
`;

export default function InternalLink({exact, to, children}) {
    return (
        <StyledLink exact={exact} to={to}>{children}</StyledLink>
    )
}

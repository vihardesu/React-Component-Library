import React from 'react'
import styled from 'styled-components';
import {background} from '../utilities/mixins'


//Mobile Compatible
//Consider an 85% on height for mobile websites
//Map device information -> 
const StyledTightContainer = styled.main`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
`;

export default function TightContainer({children}) {
    return (
        <StyledTightContainer>
            {children}
        </StyledTightContainer>
    )
}

//Browser Compatible
const StyledFittedContainer = styled.main`  
    width: 100vw;
    height: 100vh;
    ${background};
`;

export function FittedContainer({children}) {
    return (
        <StyledFittedContainer>
                {children}
        </StyledFittedContainer>
    )
}

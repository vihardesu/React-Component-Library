import React from 'react'
import styled from 'styled-components'

//These can be fixed dimensions or responsive
const StyledGrid = styled.main`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    overflow: scroll;
`;

const StyledGridItem = styled.div`
    display: flex;
    flex: 1 0 auto;
    width: 25%;
    height: 25%;
    justify-content: center;
    align-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid black;
`;

export default function ResponsiveGridContainer({children}) {
    return (
        <StyledGrid>
            {children}
        </StyledGrid>
    )
}

export const ResponsiveGridItem = function({children}) {
    return(
        <StyledGridItem>
            {children}
        </StyledGridItem>
    )
}
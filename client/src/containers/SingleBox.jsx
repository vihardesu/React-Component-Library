import React from 'react'
import styled from 'styled-components';
import {Grid, Box} from 'react-raster';

export const StyledGrid = styled(Grid)`
  height: 100%;
`

export const StyledBox = styled(Box)`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

export default function SingleBox({children}) {
    return (
        <StyledGrid colspan={12} control={true} alignY={"center"}>
            <StyledBox left={4} right={4} cols={4}>
                {children}
            </StyledBox>
        </StyledGrid>
    )
}

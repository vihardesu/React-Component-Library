import React from 'react'
import styled from 'styled-components';
import {Grid, Box} from 'react-raster';

//https://andreasfaust.github.io/react-raster/
const breakpoints = [425, 768, 1024] //Breakpoint Globals
const colspan = 12 //0-12
const padding = '1em'
const gutter = '1em'

export const StyledGrid = styled(Grid)`
`

export const StyledBox = styled(Box)`
    border: 1px solid yellow;
    display: flex;
    justify-content: center;
`

export default function NavigationGrid({children}) {
    return (
        <StyledGrid breakpoints={breakpoints} 
                    colspan={colspan} 
                    control={true} 
                    left={padding} 
                    gutterX={gutter}
                    right={padding}>
            <StyledBox cols={[4]}>'Left'</StyledBox>
            <StyledBox cols={[4]}>'Center'</StyledBox>
            <StyledBox cols={[4]}>'Right'</StyledBox>
        </StyledGrid>
    )
}


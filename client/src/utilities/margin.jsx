import React from 'react'
import styled, {css} from 'styled-components';
import {breakpoint} from './breakpoints'

/**
 * 
 * Usage:
 
 import global_margin from '../utilities/margin'

 const StyledMain = styled.main`
    ${global_margin}
`
 * 
 */

export const global_margin = css`
    @media ${breakpoint.mobileL} { 
        margin-left: 0;
        margin-right: 0;
        background: blue;
    }
    @media ${breakpoint.tablet} { 
        margin-left: 4em;
        margin-right: 4em;
        background: red;
    }
    @media ${breakpoint.laptop} { 
        margin-left: 8em;
        margin-right: 8em;
        background: green;
    }
    @media ${breakpoint.laptopL} { 
        margin-left: 0;
        margin-right: 0;
        background: yellow;
    }
`

export default global_margin;
import React from 'react'
import styled, {css} from 'styled-components';
import breakpoints from './breakpoints'

export const background = css`
    background: rgb(225,253,255);
`
export const color = css`
    background: black;
`

export const flex_col_center = css`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

export const flex_col_start = css`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
`


//Rounded Corners & Shadow
export const rounded_shadow = css`
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

//Color Theme
export const fonting_header = css`
    font-family: 'StyreneB', 'sans-serif';
    font-style: normal;
    font-weight: normal;
    font-size: 3rem;
`

//Overflow Text Scroll
export const fonting_scroll = css`
    max-height: 100%;
    white-space: wrap;
    overflow: scroll;
`;

//Overflow Effect
export const ellipsis = css`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

//Indentation Text Effect
export const indent = css`
    text-indent: 2rem;
`

export default ellipsis;
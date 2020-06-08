import React from 'react'
import styled from 'styled-components';
import ellipsis, {indent, fonting_header, fonting_scroll} from '../utilities/mixins.jsx'

export const StyledH1 = styled.h1`
    border: 1px solid black;
    ${fonting_header};
`
export const StyledP = styled.p`
    border: 1px solid black;
    text-align: justify;
`

export const ScrollP = styled.p`
    border: 1px solid black;
    text-align: left;
    ${fonting_scroll};
`

export const OverflowP = styled.p`
    border: 1px solid black;
    text-align: justify;
    ${ellipsis};
`

export default StyledP;

/**
 * CSS Font Properties
 * 
 * font-family: font family, generic family
 *      generic-family: serif, sans-serif, monospace
 *          Serif: chars might have fancy lines on the end
 *          Sans-Serif: fonts have no lines
 *          Monospace: chars are equal width
 *      font-family: the actual font style
 * 
 * font-style: normal, italic, oblique
 * font-weight: ligter, normal, bold, 100 - 900
 * 
 * font-size: absolute units | relative units
 *      Relative: em, rem, % (these are relative to nearest parent so define parent at root and never again)
 *      Absolute: px (gives full control over text size)
 * 
 * line-height: only set this property with lowest spacing in spacing system
 * font-variant: dont set this property
 * 
 * CSS Text Properties
 * text-align: left, right, center, justify
 * vertical-align: (dont use it, not needed with flex-box)
 * text-decoration: overline | line-through | underline
 * text-indent: size
 *      specifies if a first-line gets indented and by how much
 * letter-spacing, word-spacing: size
 *      distance between chars in text
 * white-space: normal, pre, nowrap
 * 
 * 
 * Overflowing Text: used in conjuction to present overflowing text as ... or clipped
 *     text-overflow: clip | ellipsis; white-space: nowrap; overflow: hidden;
 * 
 * 
 * 
 * 
 * 
 * 
 */


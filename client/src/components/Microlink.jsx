import React from 'react'
import styled from 'styled-components'
import Microlink from '@microlink/react'

//https://github.com/microlinkhq/sdk

const MyCustomLink = styled(Microlink)`
    display: flex;
    width: 100%;
    max-width: 70%;
    align-self: center;
    border-radius: 0.42857em;
`

export default function StyledMicrolink({url}) {
    return (
        <MyCustomLink url={url}/>
    )
}

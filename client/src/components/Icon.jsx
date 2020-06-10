import React from 'react'
import styled from 'styled-components'
import { IconContext } from "react-icons";

const icon_styles = { 
    color: 'white',
    height: '2em',
    width: '2em',
    textAlign: 'center'
}

//https://github.com/react-icons/react-icons
export default function StyledIcon({children}) {
    return(
        <IconContext.Provider value={{ style: icon_styles }}>
            {children}
        </IconContext.Provider>
    )
}
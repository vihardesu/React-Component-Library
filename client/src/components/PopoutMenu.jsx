import React, {useState} from 'react'
import styled from 'styled-components';
import { StyledOffCanvas, Menu, Overlay } from 'styled-off-canvas'
import StyledIcon from './Icon'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdExitToApp } from 'react-icons/md';
import InternalLink from './InternalLink'


const StyledButton = styled.button`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    border: none;
    background: white;

    :focus {
        outline: none;
    }
`

const StyledMenu = styled(Menu)`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    border: none;
    background: blue;
`

export default function PopoutMenu() {

    const [isOpen, setIsOpen] = useState(false)

    function handleChange() {
        setIsOpen(false)
    }

    return (
        <StyledOffCanvas
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}>
  
        <StyledButton onClick={() => setIsOpen(!isOpen)}>
            <StyledIcon>
                <GiHamburgerMenu/>
            </StyledIcon>
        </StyledButton>
  
        <StyledMenu>
            <StyledButton onClick={() => setIsOpen(false)}>
                <StyledIcon>
                    <MdExitToApp/>
                </StyledIcon>
            </StyledButton>
            <List handleChange={handleChange}/>

        </StyledMenu>
  
        <Overlay />
      </StyledOffCanvas>
    )
}

function List({handleChange}) {
    return (
        <ul>
            <li><InternalLink exact={true} to={"/1"} ><button onClick={() => handleChange()}>What up</button></InternalLink></li>
        </ul>
    )
}

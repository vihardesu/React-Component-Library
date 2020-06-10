import React, {useContext} from 'react';
import styled from 'styled-components';
import {
  usePopoverState,
  Popover,
  PopoverDisclosure,
  PopoverArrow,
} from "reakit/Popover";


function BasePopover() {

  const popover = usePopoverState();
  
  return (


      <>
      <PopoverDisclosure {...popover}>Open Popover</PopoverDisclosure>
      <Popover {...popover} aria-label="Welcome">
        <PopoverArrow {...popover} />
        Welcome to Reakit!
      </Popover>
    </>

  );
}

export default BasePopover;

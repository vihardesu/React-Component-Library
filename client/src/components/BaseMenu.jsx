import React from 'react'
import styled from 'styled-components';
import {
    useMenuState,
    Menu,
    MenuItem,
    MenuButton,
    MenuSeparator,
  } from "reakit/Menu";

export default function BaseMenu() {

    const menu = useMenuState();

    
    return (
        <>
        <MenuButton {...menu}>Preferences</MenuButton>
        <Menu {...menu} aria-label="Preferences">
          <MenuItem {...menu}>Settings</MenuItem>
          <MenuItem {...menu} disabled>
            Extensions
          </MenuItem>
          <MenuSeparator {...menu} />
          <MenuItem {...menu}>Keyboard shortcuts</MenuItem>
        </Menu>
      </>
    )
}

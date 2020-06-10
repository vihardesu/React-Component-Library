import React from 'react';
import styled from 'styled-components';
import { Button } from "reakit/Button";

const StyledButton = styled(Button)`
  outline: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background: #006dff;
  padding: 0.375em 0.75em;
  line-height: 1;
  border: transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 16px;

  &:focus {
    box-shadow: 0 0 0 0.2em rgba(0, 109, 255, 0.4);
  }

  &[disabled],
  &[aria-disabled="true"] {
    cursor: auto;
    opacity: 0.5;
  }

  &:not([disabled]),
  &:not([aria-disabled="true"]) {
    &:hover {
      color: #ffffff;
      background-color: #0062e6;
    }
    &:active,
    &[data-active="true"] {
      color: #ffffff;
      background-color: #004eb8;
    }
  }
`;

function BaseButton({children}) {

  return (

        <StyledButton>{children}</StyledButton>

  );
}

export default BaseButton;

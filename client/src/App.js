import React, {useContext} from 'react';
import styled from 'styled-components';
import TightContainer, {FittedContainer} from './containers/Viewports'
import SingleBox from './containers/SingleBox'
import BaseButton from './components/BaseButton'
import StyledIcon from './components/Icon'
import { FaBeer } from 'react-icons/fa';

function App() {

 
  return (
    <FittedContainer>
      <SingleBox>

        <BaseButton>

          <StyledIcon><FaBeer /></StyledIcon>  
          <p>CLICK ME</p>
        </BaseButton>
      </SingleBox>
      
    </FittedContainer>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';
import TightContainer, {FittedContainer} from './containers/Viewports'
import GridContainer, {GridItem} from './containers/Grid'
import StyledP, {StyledH1, OverflowP, ScrollP} from './components/Typography'
import SigninCard from './components/SigninCard'


const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: white;
`

const text = 'This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties. The paragraph is indented, aligned, and the space between characters is specified. The underline is removed from this colored "Try it Yourself" link.'

function App() {
  return (
    <FittedContainer>
      <StyledMain>
        <SigninCard/>
      </StyledMain>
    </FittedContainer>
  );
}

export default App;

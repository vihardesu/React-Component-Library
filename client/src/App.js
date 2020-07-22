import React, {useContext} from 'react';
import styled from 'styled-components';
import TightContainer, {FittedContainer} from './containers/Viewports'
import Nivo from './components/Nivo'
import PopoutMenu from './components/PopoutMenu'

import RouterSwitch from './components/RouterSwitch'
import {Route} from 'react-router-dom'

function App() {

  return (

    <FittedContainer>
      <PopoutMenu/>
      <RouterSwitch>
        <Route path="/test">
          <h1>Test</h1>
        </Route>
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </RouterSwitch>
    </FittedContainer>
  );
}

export default App;

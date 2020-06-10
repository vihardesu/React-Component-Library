import React from 'react'
import styled from 'styled-components';
import {rounded_shadow, flex_col_center, flex_col_start} from '../utilities/mixins'

//To do!!


//Fixed Size Container
const StyledSignin = styled.section`
  ${flex_col_start};
  width: 400px;
  height: 500px;
  box-sizing: border-box;
  padding: 1em;
  border: 10px solid black;
`
const Child = styled.div`
    ${flex_col_start};
    width: 100%;
    flex: 1 0 auto;
    background: yellow;
    box-sizing: border-box;
    padding: .5em;
`;

const Child2 = styled.div`
    ${flex_col_start};
    flex: 3 0 auto;
    width: 100%;
    background: green;
    box-sizing: border-box;
    padding: .5em;
    
`;




export default function SigninCard() {
    return (
        <StyledSignin>
          <Child>
              {/* <h1>Header</h1>
              <img src={require('../assets/vihar.png')} alt=""/> */}
          </Child>
          <Child2>

          </Child2>
        </StyledSignin>
    )
}

import React from 'react'
import styled from 'styled-components';
import {rounded_shadow, flex_col_center, flex_col_start} from '../utilities/mixins'

//Fixed Size Container
const StyledSignin = styled.section`
  ${flex_col_start};
  width: 400px;
  height: 500px;
  ${rounded_shadow};
  box-sizing: border-box;
  padding: 1em;
`
//
const Child = styled.div`
    ${flex_col_start};
    width: 100%;
    flex: 2 0 content;
    background: yellow;
    box-sizing: border-box;
    padding: .5em;

    h1 {
        margin: 0;
        margin-bottom: .125em;
        padding: none;
    }

    img {
        border-radius: 50%;
        width: 7em;
        height: 7em;
        object-fit: cover;
        margin: 0;
        margin-bottom: .125em;
    }
`;

const Child2 = styled.div`
    ${flex_col_start};
    flex: 1 0 auto;
    width: 100%;
    background: green;
    box-sizing: border-box;
    padding: .5em;
    
`;




export default function SigninCard() {
    return (
        <StyledSignin>
          <Child>
              <h1>Header</h1>
              <img src={require('../assets/vihar.png')} alt=""/>
          </Child>
          <Child2>
              <button>Sign In with Google</button>
              <input type="text" placeholder={'Email'}/>
              <input type="text" placeholder={'Password'}/>
              <button>Submit</button>
          </Child2>
        </StyledSignin>
    )
}

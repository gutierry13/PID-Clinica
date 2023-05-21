import {createGlobalStyle} from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins';

  }
  #root{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

  }
  a{
    text-decoration: none;
  }
`
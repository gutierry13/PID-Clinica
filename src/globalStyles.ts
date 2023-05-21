import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'
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
export const CustomerContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1rem;
  button{
    align-self: center;
    justify-self: center;

  }
  .text{
    margin-bottom: 1.6rem;
    max-width: 1040px;
    width: 100%;
    h1{
      font-size: 2.4rem;
      font-weight: 500;
      color: #000;
      margin-bottom: .6rem;
      line-height: 1.5;
    }
    p{
      font-size: 1.2rem;
      font-weight: 400;
      color: #000;
      line-height: 1.5;
    }
  }

`
export const ContainerTable = styled.div`
   width: 100%;
   max-width: 1040px;
  table{
    display: block;
    overflow: auto;
    width: 100%;
    border-spacing:  0 0.5rem;
  th{
      font-weight: 400;
      padding: .5rem 1rem;
      text-align: left;
      line-height: 1.5rem;

    }
    td{
      padding: .5rem 1rem;
      border: 0;
      background: #fff;
      font-weight: 400;
    }
    tr{
    }

  }
`

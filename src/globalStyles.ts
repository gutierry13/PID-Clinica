import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins';

  }
  body{
    overflow-x: hidden;
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
  .react-modal-overlay{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .react-modal-content{
    outline: none;
    width: 100%;
    max-width: 576px;
    background-color: #FFFFFF;
    padding: 3rem;
    position: relative;
    border-radius: 6px;
    svg{
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }
  .editar,.excluir{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`
export const CustomerContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1rem;
  button {
    align-self: center;
    justify-self: center;
  }
  .text {
    margin-bottom: 1.6rem;
    max-width: 1040px;
    width: 100%;
    h1 {
      font-size: 2.4rem;
      font-weight: 500;
      color: #000;
      margin-bottom: 0.6rem;
      line-height: 1.5;
    }
    p {
      font-size: 1.2rem;
      font-weight: 400;
      color: #000;
      line-height: 1.5;
    }
  }
`
export const ContainerTable = styled.div`
  width: 100%;
  max-width: 1150px;
  table {
    display: block;
    overflow: auto;
    width: 100%;
    border-spacing: 0 0.5rem;
    th {
      font-weight: 400;
      padding: 0.5rem 1rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td {
      padding: 0.5rem 1rem;
      border: 0;
      background: #fff;
      font-weight: 400;
    }
    tr {
    }
  }
`
export const ContainerModalForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 500px;
    gap: 1.2rem;
  }
  input,
  select {
    display: block;
    font-weight: 400;
    line-height: 1.2;
    height: 2.2rem;
    border-radius: 6px;
    border: 1px solid #000;
    outline: none;
    padding: 0.5rem 1rem;
    width: 100%;
  }
  label {
    font-weight: 400;
    line-height: 1.5;
    font-weight: 500;
    font-size: 1.2rem;
  }
  .buttons {
    margin-top: 1.6rem;
    display: flex;
    gap: 1rem;
    width: 6rem;
    align-items: center;
    justify-content: center;
  }
`

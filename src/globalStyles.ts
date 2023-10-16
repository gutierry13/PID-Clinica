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
  .consultaModal{
    width: 100%;
    max-width: 80rem;
    /* max-width: 1200px; */
  }
  .func{
    margin-bottom: 1rem;
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
  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.2rem;
    input {
      border-radius: 8px;
      border: 1px solid black;
      outline: none;
      height: 1.5rem;
      width: 14rem;
      line-height: 1.2;
      font-size: 1rem;
      padding: 0.5rem;
    }
  }
  width: 100%;
  max-width: 1150px;
  table {
    display: block;
    padding-right: 1.2rem;
    overflow: auto;
    width: 100%;
    border-spacing: 0 0.5rem;
    font-size: 94%;
    th {
      font-weight: 400;
      line-height: 1.5rem;
      /* padding: 0.6rem 2.2rem;
      text-align: left; */
      padding: 0.6rem 4.2rem;
      text-align: center;
    }
    td {
      /* padding: 0.5rem 1.8rem;
      border: 0;
      background: #fff;
      font-weight: 400; */
      padding: 1.2rem 2rem;
      text-align: center;
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
  gap: 2rem;
  form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 550px;
    gap: 1.2rem;
    div {
      width: 16rem;
    }
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
  input[name='especie'],
  input[class='rw-dropdownlist-search'] {
    border: none !important;
  }
`
export const ConsultaModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 550px;
    gap: 1.2rem;
  }
  div[name='funcionarioCPF'] {
    width: 100%;
    border: 0;
    outline: none;
    position: relative;
    input {
      border: 0;
    }
  }
  div input[type='text'],
  div input[type='date'] {
    width: 16rem;
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
    display: block;
  }
  .buttons {
    margin-top: 1.6rem;
    display: flex;
    gap: 1rem;
    width: 6rem;
    align-items: center;
    justify-content: center;
  }
  input[name='especie'],
  input[class='rw-dropdownlist-search'] {
    border: none !important;
  }
`
export const ContainerForCards = styled.ul`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`
export const CardContainer = styled.li`
  width: 100%;
  max-width: 48rem;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  position: relative;
  cursor: pointer;
  &::before {
    content: '';
    display: block;
    width: 6px;
    height: 100%;
    left: 0;
    background-color: #6be28d;
    border: 1px solid transparent;
    position: absolute;
  }
  &::after {
    content: '';
    display: block;
    width: 6px;
    height: 100%;
    right: 0;
    background-color: #6be28d;
    border: 1px solid transparent;
    position: absolute;
  }
`
export const ConsultaElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  div {
    h3 {
      margin-bottom: 0.8rem;
    }
  }
`

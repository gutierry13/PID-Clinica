import styled from 'styled-components';
export const AsideNavContainer = styled.aside`
  background-color: #F9F6F2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 100vh;
  width: 10rem;
  a{
    color: #C4C4C3;
    font-weight: 500;
    text-decoration: none;
    font-size: 1.2rem;
    line-height: 1.5;
    text-transform: capitalize;
    width: 100%;
    height: 2.4rem;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &:focus{
      color: #000;
      background-color: #FBE79A;
    }
    &:focus:after{
      content: '';
      position: absolute;
      width: 10px;
      height: 2.4rem;
      right: 0;
      top: 0;
      background-color: #FDD32A;
    }
  }

`
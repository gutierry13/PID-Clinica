import styled from 'styled-components'
export const AsideNavContainer = styled.aside`
  background-color: #f9f6f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  height: 100vh;
  width: 12rem;
  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      /* &:not(:last-child) {
        border-bottom: 1px solid;
      } */
    }
  }
  a {
    color: #c4c4c3;
    font-weight: 500;
    text-decoration: none;
    font-size: 1rem;
    line-height: 1.5;
    text-transform: capitalize;
    width: 100%;
    height: 2.4rem;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #000;
    }
    &:focus {
      color: #000;
      background-color: #fbe79a;
    }
    &:focus:after {
      content: '';
      position: absolute;
      width: 10px;
      height: 2.4rem;
      right: 0;
      top: 0;
      background-color: #fdd32a;
    }
  }
`

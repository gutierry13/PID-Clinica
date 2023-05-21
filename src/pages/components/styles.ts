import styled from 'styled-components';
export const AddButtonStyles = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  letter-spacing: 1.5;
  cursor: pointer;
  font-family: 'Poppins';
  font-size: 1rem;
  background-color: green;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  transition: background 0.2s;
  &:hover {
    background-color: #8bc68b;
  }
  `
export const EditButtonStyles = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
 font-weight: bold;
  letter-spacing: 1.5;
  cursor: pointer;
  font-family: 'Poppins';
  font-size: 1rem;
  background-color: yellow;
  border: none;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  transition: background 0.2s;
  &:hover {
    background-color: #ffff76;
  }`
export const DeleteButtonStyles = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
   font-weight: bold;
  letter-spacing: 1.5;
  cursor: pointer;
  font-family: 'Poppins';
  font-size: 1rem;
  background-color: red;
  border: none;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  transition: background 0.2s;
  &:hover {
    background-color: #ff8282;
  }`
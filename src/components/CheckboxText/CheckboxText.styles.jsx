import styled from 'styled-components';

export const Container = styled.button`
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  border: none;
  position: relative;
  @media screen and (min-width: 50em){
  top: 60px;
  }
`;
export const CheckText = styled.h6`
  color: #555555;
  margin: 0px;
  margin-left: 5px;
  font-size: 11px;
`;

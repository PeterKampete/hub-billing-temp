import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
from { opacity: 0; }
    to   { opacity: 1; }
`;

export const WrapperContainer = styled.div`
  height: 100vh;
  background: var(--color-bgMain);
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100vw;
  padding: 6px;
  @media screen and (min-width: 50em){
  width: 50%;
  height: 80%;
  grid-template-rows: 0.15fr 1fr;
  position: static;
  width: 100%;
  height: 100vh;
  padding: 0px
  }
  
`;
export const Content = styled.div`
  animation: ${fadeIn} 0.3s linear;
  width: 100%;
  height: 100%;
  margin-top: 10vh;
  display: grid;
  grid-template-rows: 0.13fr 1fr;
 @media screen and (min-width: 50em){
  width: 50%;
  height: 80%;
  grid-template-rows: 0.15fr 1fr;
  }
`;

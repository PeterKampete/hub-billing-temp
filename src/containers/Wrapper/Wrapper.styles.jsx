import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from { opacity: 0; }
    to   { opacity: 1; }
`;

export const WrapperContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: var(--color-bgMain);
  display: flex;
  justify-content: center;
`;
export const Content = styled.div`
  width: 50%;
  height: 80%;
  margin-top: 10vh;
  display: grid;
  grid-template-rows: 0.15fr 1fr;
  animation: ${fadeIn} 0.5s linear;

`;

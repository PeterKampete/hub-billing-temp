import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
  `;

export const Container = styled.div`
  width: ${({ size }) => (size ? `${size}px` : "30px")};
  height: ${({ size }) => (size ? `${size}px` : "30px")};
  border: 5px solid #cccccc;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;

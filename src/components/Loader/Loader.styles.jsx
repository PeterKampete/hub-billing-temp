import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
  `;

export const LoaderContainer = styled.div`
  height: ${({ size }) => (typeof size === 'string' ? size : `${size}%`)};
  width: ${({ size }) => (typeof size === 'string' ? size : `${size}%`)};
  border: 5px solid ${({ fill }) => fill};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
from { opacity: 0; }
    to   { opacity: 1; }
`;

export const Container = styled.div`
  width: 100%;
  background: var(--color-primary1);
  padding: 6px;
  display: grid;
  grid-template-columns: 0.09fr 1fr 0.09fr;
  align-items: center;
  border-radius: 6px;
  margin: 14px 0px;
  position: relative;
  animation: ${fadeIn} 0.7s ease-in;
`;

export const Title = styled.span`
  color: var(--color-secondary);
  font-size: var(--s-13);
`;
export const Caption = styled.h6`
  color: #555555;
  margin: 0px;
`;
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Icon = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  height: ${({ height }) => (typeof height === 'string' ? height : `${height}%`)};
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}%`)};
  border-radius: ${({ borderRadius }) => (typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`)};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 6px;
`;

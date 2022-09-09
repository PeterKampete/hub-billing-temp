import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  height: ${({ height }) => (typeof height === 'string' ? height : `${height}%`)};
  width: ${({ width }) => (width ? `${width}%` : `${100}%`)};
  border-radius: ${({ borderRadius }) => (typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`)};
  margin: ${({ margin }) => (typeof margin === 'string' ? margin : `${margin}%`)};
  padding: ${({ padding }) => (typeof padding === 'string' ? padding : `${padding}%`)};
  border: none;
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (typeof fontSize === 'string' ? fontSize : `${fontSize}%`)};
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  box-shadow: var(--box-shadow);
  &:hover {
    opacity: 0.85;
  }
  &:disabled {
    background-color: var(--btn-disabled);
    color: rgba(0, 0, 0, 0.1);
    cursor: not-allowed;
    border: none;
  }
`;

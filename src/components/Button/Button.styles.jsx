import styled from 'styled-components';

export const Container = styled.button`
  width: 40%;
  background-color: ${({ bgColor }) => bgColor};
  height: ${({ height }) => (typeof height === 'string' ? height : `${height}%`)};
  border-radius: ${({ borderRadius }) => (typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`)};
  margin: ${({ margin }) => (typeof margin === 'string' ? margin : `${margin}%`)};
  border: none;
  padding: 5%;
  font-size: 60%;
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
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
  };
  @media screen and (min-width: 50em) {
  padding: ${({ padding }) => (typeof padding === 'string' ? padding : `${padding}%`)};
  width: ${({ width }) => (width ? `${width}%` : `${100}%`)};
  font-size: ${({ fontSize }) => (typeof fontSize === 'string' ? fontSize : `${fontSize}%`)};
  }
`;

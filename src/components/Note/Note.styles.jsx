import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  width: ${({ width }) => (width ? `${width}%` : `${100}%`)};
  border-radius: ${({ borderRadius }) => (typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`)};
  margin: ${({ margin }) => (typeof margin === 'string' ? margin : `${margin}%`)};
  padding: ${({ padding }) => (typeof padding === 'string' ? padding : `${padding}%`)};
  display: flex;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
`;
export const Title = styled.h6`
  margin: 0px;
  margin-left: 6px;
`;

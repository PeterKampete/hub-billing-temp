import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  width: 88%;
  border-radius: ${({ borderRadius }) => (typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`)};
  margin: ${({ margin }) => (typeof margin === 'string' ? margin : `${margin}%`)};
  padding: ${({ padding }) => (typeof padding === 'string' ? padding : `${padding}%`)};
  display: flex;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  @media screen and (min-width: 50em){
    width: ${({ width }) => (width ? `${width}%` : `${100}%`)};
  }
`;
export const Title = styled.span`
  margin: 0px;
  margin-left: 6px;
  line-height: 1.5;
`;

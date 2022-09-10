import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ borderRadius }) => (typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`)};
  margin: 28px 0px;
  padding: 14px 20px 14px;
  background-color: ${({ bgColor }) => bgColor};
  &p {
    margin: 0px;
  };
  @media screen and (min-width: 50em) {
    width: ${({ width }) => (width ? `${width}%` : `${100}%`)};
    margin: 20px 0px;
  }
`;

export const Span = styled.span`
  font-size: ${({ fontSize }) => (typeof fontSize === 'string' ? fontSize : `${fontSize}%`)};
`;

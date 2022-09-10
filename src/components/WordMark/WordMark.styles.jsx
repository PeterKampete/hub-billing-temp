import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${({ borderRadius }) => (typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`)};
  width: 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
 
  @media screen and (min-width: 50em){
  height: ${({ height }) => (typeof height === 'string' ? height : `${height}%`)};
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}%`)};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
`;

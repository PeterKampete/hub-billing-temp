import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  height: ${({ height }) => (typeof height === 'string' ? height : `${height}%`)};
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}%`)};
  border-radius: ${({ borderRadius }) => (typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`)};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

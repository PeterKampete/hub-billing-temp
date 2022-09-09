import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0px 5px
`;
export const Title = styled.h6`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (typeof fontSize === 'string' ? fontSize : `${fontSize}%`)};
  margin: 0px;
  margin-left: 5px;
`;

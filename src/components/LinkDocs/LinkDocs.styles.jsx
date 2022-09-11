import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  display: flex;
  background-color: transparent;
  font-size: ${({ fontSize }) => (typeof fontSize === 'string' ? fontSize : `${fontSize}%`)};
  border: none;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color};
  cursor: pointer;
`;
export const Title = styled.span`
  margin-right: 6px;
  color: ${({ color }) => color};
  font-weight: 800;
  letter-spacing: 0.02px
`;

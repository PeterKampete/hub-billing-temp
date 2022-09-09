import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.span`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (typeof fontSize === 'string' ? fontSize : `${fontSize}%`)};
`;
export const Steps = styled(Title)``;

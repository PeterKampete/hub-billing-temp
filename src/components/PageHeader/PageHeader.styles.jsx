import styled from 'styled-components';

export const Container = styled.div`
  &p {
    margin: 0px;
  }
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;
export const Line = styled.div`
  background-color: #e6e6e6;
  height: 0.5px;
`;
export const Title = styled.span`
  font-weight: bold;
  color: var(--color-secondary);
  font-size: 15px;
`;
export const Caption = styled.span`
  font-weight: var(--w-400);
  font-size: 12px;
  color: #555555;
`;

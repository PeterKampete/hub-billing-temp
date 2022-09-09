import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  width: ${({ width }) => (width ? `${width}%` : `${100}%`)};
  margin: ${({ margin }) => (typeof margin === 'string' ? margin : `${margin}%`)};
  padding: ${({ padding }) => (typeof padding === 'string' ? padding : `${padding}%`)};
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
`;

export const Labels = styled.div`
  display: flex;
  flex-direction: column;
  & > span:nth-child(2) {
    color: #555555;
    margin-top: 4px;
  }
`;
export const Status = styled.span`
  color: #555555;
  margin-right: 6px;
`;

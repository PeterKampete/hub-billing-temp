import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 6px;
  font-size: 10px;
  @media screen and (min-width: 50em){
  width: ${({ width }) => (width ? `${width}%` : `${100}%`)};
  margin: ${({ margin }) => (typeof margin === 'string' ? margin : `${margin}%`)};
  padding: ${({ padding }) => (typeof padding === 'string' ? padding : `${padding}%`)};
  font-size: 11px;
  padding: 10px;
  }
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

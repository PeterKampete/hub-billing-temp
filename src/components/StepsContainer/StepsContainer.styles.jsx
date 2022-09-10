import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0px 15px;
`;

export const Title = styled.span`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (typeof fontSize === 'string' ? fontSize : `${fontSize}%`)};
`;
export const Steps = styled(Title)`
font-size: 0.8rem;
  @media screen and (min-width: 50em){
    color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (typeof fontSize === 'string' ? fontSize : `${fontSize}%`)
}
`;

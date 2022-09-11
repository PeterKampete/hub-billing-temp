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
export const Steps = styled.div`
font-size: 0.8rem;
width: 100%;
display: flex;
align-items: center;
  @media screen and (min-width: 50em){
    color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (typeof fontSize === 'string' ? fontSize : `${fontSize}%`)}
  display: flex;
}
`;
export const Step = styled.div`
  width: 0.3rem;
  height: 0.3rem;
  background-color: ${({ active }) => (active ? '#333333' : '#AAAAAA')};;
  margin: 0px 2px;
  border-radius: 50%;
`;

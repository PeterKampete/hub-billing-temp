import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 75%;
  margin-bottom: 0px;
  position: relative;
  top: -1.5em;
  padding: 2%;
  font-size: ${({ capFontSize }) => (typeof capFontSize === 'string' ? capFontSize : `${capFontSize}%`)};
  &p {
    margin: 0px;
  };
 @media screen and (min-width: 800px){
  margin-bottom: 20px;
  padding: 0px;
  position: static;
  height: auto;
  }
`;
export const Title = styled.span`
  color: ${({ color }) => color};
  font-weight: bold;
`;
export const Caption = styled.span`
  color: ${({ capColor }) => capColor};
  font-size: ${({ capFontSize }) => (typeof capFontSize === 'string' ? capFontSize : `${capFontSize}%`)};
  @media screen and (min-width: 50em){
  font-size: ${({ capFontSize }) => (typeof capFontSize === 'string' ? capFontSize : `${capFontSize}%`)};
  }
`;
export const Line = styled.div`
  background-color: #e6e6e6;
  height: 0.5px;
  position: relative;
  top: -25px;
  @media screen and (min-width: 50em){
  position: static;
  }
`;

import styled, { keyframes } from 'styled-components';
import Button from '../Button/Button.component';

const fadeIn = keyframes`
from { opacity: 0; }
    to   { opacity: 1; }
`;

export const Container = styled.div`
  background: var(--color-primary1);
  border-radius: 6px;
  width: 98%;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  left: -3px;
  margin: 8px;
  height: 10%;
  top: -6%;
  
  @media screen and (min-width: 50em){
  display: flex;
  align-items: center;
  width: 100%;
  height: 80%;
  justify-content: space-between;
  position: relative;
  left: 0px;
  margin: 8px 0px;
  top: 0px;
  animation: ${fadeIn} 0.7s ease-in;
  }
`;

export const Title = styled.span`
  font-size: 12px;
  color: var(--color-secondary);
  @media screen and (min-width: 50em){
  font-size: var(--s-13);
  }
`;
export const Caption = styled.h6`
  color: #555555;
  margin: 0px;
  font-size: 10px;
  margin-top: 3px;
  @media screen and (min-width: 50em){
  font-size: 10px;
  margin-top: 2px;
  }
`;
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 4px;
  @media screen and (min-width: 50em){
  padding-left: 0px;
  }
`;
export const Icon = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: ${({ borderRadius }) => (typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`)};
  margin: 0px 7px;

 @media screen and (min-width: 50em){
  height: ${({ height }) => (typeof height === 'string' ? height : `${height}%`)};
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}%`)};
  padding: ${({ padding }) => (typeof padding === 'string' ? padding : `${padding}%`)};
  }
`;

export const ModalButton = styled(Button)`
    padding: 12px;
    width: 20%;
    @media screen and (min-width: 50em){
    padding: 10px;
    width: 12%;
  }
`;

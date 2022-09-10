import styled from 'styled-components';
import { Button, LinkDocs } from '../../components';

export const Container = styled.div`
  background: var(--color-white);
  display: grid;
  grid-template-rows: 0.1fr 1fr;
  padding: 0px 5%;
  border-radius: 8px;
  margin-top: -13%;
  
  @media screen and (min-width: 50em){
  width: 100%;
  height: 100%;
  background: var(--color-white);
  padding: 0px 20px;
  display: grid;
  grid-template-rows: 0.16fr 1fr;
  row-gap: 10px;
  position: static;
  margin-top: 0px;
  };
  }
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ bgColor }) => bgColor};
  padding: 22px 0px;
`;

export const Title = styled.p`
  color: var(--color-secondary);
  text-align: center;
  font-size: 100%;
  margin-top: 20px;
  @media screen and (min-width: 50em){
  font-size: 22px;
  margin-top: 25px;
  }
`;
export const StyledTitle = styled(Title)`
  font-weight: var(--w-700);
  color: var(--color-secondary);
  font-size: var(--s-15);
  text-align: center;
`;
export const Caption = styled.h4`
  color: #888888;
  text-align: center;
  margin: 0px;
  font-size: 70%;
  line-height: 1;
  @media screen and (min-width: 50em){
  font-size: 12px;
  }
`;
export const StyledBtn = styled(Button)`
  position: relative;
  top: 85px;
  background-color: #f5f5f5;
  color: #6b6b6b;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
export const StyledBtnChk = styled(Button)`
  position: relative;
  top: 75px;
`;
export const BackBtn = styled(Button)`
  align-self: flex-start;
  background-color: transparent;
  color: #555555;
  margin-left: 8px;
`;
export const ConfigBtn = styled(Button)`
  align-self: flex-start;
  background-color: #e6e6e6;
  color: #000000;
  font-weight: bold;
`;
export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  position: relative;
  bottom: 14px;
  margin: 4px 0px 10px 0px;
  justify-content: space-between;
`;
export const StartCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4px
`;
export const StyledLinkDocs = styled(LinkDocs)`
  padding: 10px;
  font-size: 60%;
  @media screen and (min-width: 50em){
  font-size: 80%;
  font-weight: 800;
  }
`;

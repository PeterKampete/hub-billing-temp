import styled from 'styled-components';
import { Button, LinkDocs } from '../../components';
import HomeWrapper from './HomeWrapper';

export const Container = styled.div`
  background: var(--color-white);
  display: grid;
  grid-template-rows: 0.18fr 1fr;
  padding: 0px 5%;
  border-radius: 8px;
  margin-top: 0%;
  position: absolute;
  top: 28%;
  width: 100%;
  
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
  @media screen and (min-width: 50em){
  font-weight: var(--w-700);
  color: var(--color-secondary);
  font-size: var(--s-15);
  text-align: center;
  }
`;
export const Caption = styled.span`
  color: #888888;
  text-align: center;
  margin: 0px;
  font-size: '10px';
  line-height: 1;
  @media screen and (min-width: 50em){
  font-size: 12px;
  }
`;
export const StyledCaption = styled(Caption)`
  color: #888888;
  text-align: center;
  margin: 0px;
  font-size: 76%;
  line-height: 1;
  @media screen and (min-width: 50em){
  font-size: 12px;
  }
`;
export const StyledBtn = styled(Button)`
  background-color: #f5f5f5;
  position: relative;
  color: #6b6b6b;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  top: 70px;
  width: 25%;
  margin-bottom: 60px;
  :hover {
  opacity: 1;
  };
  @media screen and (min-width: 50em){
  top: 76px;
  width: 16%;
  }
`;
export const StyledBtnChk = styled(Button)`
  position: relative;
  top: 72px;
  margin-bottom: 62px;
  padding: 10px;
  width: 25%;
  @media screen and (min-width: 50em){
  top: 75px;
  margin-bottom: 0px;
  width: 16%;
  }
`;
export const BackBtn = styled(Button)`
  align-self: flex-start;
  background-color: transparent;
  color: #555555;
  margin-left: 8px;
  border: none;
  box-shadow: none;
  padding: 0px;
  margin: 0px;
  position: relative;
  bottom: 4px;
  left: -30px;
  @media screen and (min-width: 50em){
  background-color: transparent;
  margin: 0px 8px;
  padding: 10px;
  position: relative;
  bottom: 4px;
  left: 0px
  }
`;
export const ConfigBtn = styled(Button)`
  background-color: #e6e6e6;
  color: #000000;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 5px;
  position: absolute;
  right: 0px;
  top: -220%;
  width: 20%;
  @media screen and (min-width: 50em){
    position: static;
    padding: 3px;
    top: 0px;
    width: 12%;
  }
`;
export const LinksContainer = styled.div`
  display: flex;
  background-color: transparent;
  position: relative;
  top: -3%;
  margin: 14% 0px;
  z-index: 0;
  @media screen and (min-width: 50em){
  display: flex;
  align-items: center;
  bottom: 14px;
  top: -15px;
  margin: 4px 0px 10px 0px;
  justify-content: space-between;
  }
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

export const StyledHomeWrapper = styled(HomeWrapper)`
  height: 60%;
  margin-top: 10%;
@media screen and (min-width: 50em){
  padding: 70px;
  height: 80%;
  margin-top: 0px
}
`;

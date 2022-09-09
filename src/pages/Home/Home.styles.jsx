import styled from 'styled-components';
import { Button } from '../../components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--color-white);
  height: 100%;
  border-radius: 6px;
  padding: 8px 20px 0px;
  display: grid;
  grid-template-rows: 0.16fr 1fr;
  row-gap: 10px;
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
  font-weight: var(--w-700);
  color: var(--color-secondary);
  font-size: var(--s-15);
  text-align: center;
  margin-top: 25px;
`;
export const StyledTitle = styled(Title)`
  font-weight: var(--w-700);
  color: var(--color-secondary);
  font-size: var(--s-15);
  text-align: center;
`;
export const Caption = styled.h6`
  color: #555555;
  text-align: center;
  line-height: 1.1em;
  margin: 0px;
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

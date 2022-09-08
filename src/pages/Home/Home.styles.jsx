import styled from "styled-components";
import { PrimaryBtn } from "../../components/Button/Button.component";

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
  background: var(--color-bgMain1);
  padding: 22px 0px;
`;

export const Title = styled.p`
  font-weight: var(--w-700);
  color: var(--color-secondary);
  font-size: var(--s-15);
  text-align: center;
  margin-top: 25px;
`;
export const Caption = styled.h6`
  color: #555555;
  text-align: center;
  line-height: 1.1em;
  margin: 0px;
`;
export const StyledBtn = styled(PrimaryBtn)`
  position: relative;
  top: 85px;
  background-color: #f5f5f5;
  color: #6b6b6b;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
export const StyledBtnChk = styled(PrimaryBtn)`
  position: relative;
  top: 85px;
`;

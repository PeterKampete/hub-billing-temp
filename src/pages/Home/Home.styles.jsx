import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: var(--color-white);
  height: 100%;
  border-radius: 5px;
  padding: 20px;
  display: grid;
  grid-template-rows: 0.16fr 1fr;
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-bgMain1);
`;
export const Header = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  font-weight: var(--w-700);
  color: var(--color-secondary);
  font-size: var(--s-18);
  text-align: center;
`;
export const Caption = styled.span`
  font-size: 12px;
  color: #555555;
  text-align: center;
`;

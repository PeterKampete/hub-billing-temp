import styled from "styled-components";

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
  padding: 22px 0px
`;

export const Title = styled.p`
  font-weight: var(--w-700);
  color: var(--color-secondary);
  font-size: var(--s-15);
  text-align: center;
  margin-top: 25px
`;
export const Caption = styled.h6`
  color: #555555;
  text-align: center;
  line-height: 1.1em;
  margin: 0px
`;

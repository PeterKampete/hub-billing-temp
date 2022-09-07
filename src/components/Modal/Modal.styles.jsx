import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: var(--color-primary1);
  padding: 6px;
  display: grid;
  grid-template-columns: 0.09fr 1fr 0.1fr;
  align-items: center;
  border-radius: 6px;
  margin: 16px 0px;
`;

export const Title = styled.span`
  color: var(--color-secondary);
  font-size: var(--s-13);
`;
export const Caption = styled.h6`
  color: #555555;
  margin: 0px;
`;
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Icon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 6px;
`;

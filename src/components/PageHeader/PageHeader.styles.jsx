import styled from "styled-components";

export const Container = styled.div`
  &p {
    margin: 0px;
  }
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
export const Title = styled.span`
  font-weight: var(--w-700);
  color: var(--color-secondary);
  font-size: var(--s-18);
`;
export const Caption = styled.span`
  font-weight: var(--w-400);
  font-size: var(--s-15);
  color: #555555;
`;

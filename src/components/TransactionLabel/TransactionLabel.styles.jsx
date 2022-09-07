import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-white);
  width: 40%;
  margin: 20px 0px;
  padding: 14px 20px 14px;
  border-radius: 5px;
  background: ${({ bgColor }) => (bgColor ? `${bgColor}` : "white")}};
  &p {
    margin: 0px;
  }
`;

export const Span = styled.span`
  font-size: 12px
`

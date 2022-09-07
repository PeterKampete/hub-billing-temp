import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-white);
  width: 34%;
  margin-top: 25px;
  padding: 14px 20px 14px;
  border-radius: 5px;
  background: ${({ bgColor }) => (bgColor ? `${bgColor}` : "white")}};
  &p {
    margin: 0px;
  }
`;

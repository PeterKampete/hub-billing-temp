import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  display: flex;
  background-color: transparent;
  border: none;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color};
  cursor: pointer;
`;
export const Text = styled.span`
  font-size: 10px;
  margin-right: 4px;
  font-weight: ${({ fWeight }) => (fWeight ? `${fWeight}` : '800')};
`;

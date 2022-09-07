import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ bgColor }) =>
    bgColor ? `${bgColor}` : "var(--color-primary)"};
  border-radius: 5px;
  width: ${({ width }) => (width ? `${width}%` : `${100}%`)};
  margin: ${({ margin }) => (margin ? `${margin}px` : `${10}px`)};
  padding: ${({ padding }) => (padding ? `${padding}px` : `${8}px`)};
  border: none;
  color: #ffffff;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ bgColor }) =>
    bgColor ? `${bgColor}` : "var(--color-primary)"};
  border-radius: 3px;
  width: ${({ width }) => (width ? `${width}%` : `${100}%`)};
  margin: ${({ margin }) => (margin ? `${margin}px` : `${10}px`)};
  padding: ${({ padding }) => (padding ? `${padding}px` : `${10}px`)};
  border: none;
  color: #ffffff;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

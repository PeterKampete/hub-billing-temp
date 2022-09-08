import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ bgColor }) =>
    bgColor ? `${bgColor}` : "var(--color-warning)"};
  border-radius: 3px;
  width: ${({ width }) => (width ? `${width}%` : `${100}%`)};
  margin: ${({ margin }) => (margin ? `${margin}px` : `${26}px`)};
  padding: ${({ padding }) => (padding ? `${padding}px` : `${12}px`)};
  display: flex;
`;
export const Title = styled.h6`
  color: #555555;
  margin: 0px;
  margin-left: 6px;
  font-weight: 100
`;

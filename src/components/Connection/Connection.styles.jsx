import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ bgColor }) =>
    bgColor ? `${bgColor}` : "var(--color-white)"};
  border-radius: 3px;
  width: ${({ width }) => (width ? `${width}%` : `${100}%`)};
  margin: ${({ margin }) => (margin ? `${margin}px` : `${10}px`)};
  padding: ${({ padding }) => (padding ? `${padding}px` : `${10}px`)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
`;

export const Labels = styled.div`
  display: flex;
  flex-direction: column;
  & > span:nth-child(2) {
    color: #555555;
    margin-top: 4px;
  }
`;
export const Status = styled.span`
  color: #555555;
  margin-right: 6px;
`;

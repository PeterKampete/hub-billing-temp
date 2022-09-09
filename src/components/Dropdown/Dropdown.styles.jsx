import styled from 'styled-components';

export const Container = styled.div`
  width: 17%;
  position: absolute;
  top: 440px;
  z-index: 1000;
`;

export const DropDownHeader = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  width: ${({ width }) => (width ? `${width}%` : `${100}%`)};
  border-radius: ${({ borderRadius }) => (typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`)};
  border: 1px solid #e6e6e6;
  margin-bottom: 1px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Heading = styled.h6`
  color: #555555;
  margin: 0px;
`;

export const DropDownList = styled.div`
  padding: 0;
  margin: 0;
  border-radius: 5px;
  background: white;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled.div`
  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : 'var(--color-white)')};
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  width: ${({ width }) => (width ? `${width}%` : `${100}%`)};
  padding: 15px 10px;
  display: flex;
  align-items: center;
  font-size: 10px;
  :hover {
    background-color: var(--color-bgMain1);
    transition: 0.2s ease-in;
  }
`;

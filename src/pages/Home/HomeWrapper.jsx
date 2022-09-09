import React from "react";
import { Container, Content } from "./Home.styles";

const HomeWrapper = ({ children, heading, bgColor, ...props }) => {
  return (
    <Container {...props}>
      <div>{heading && heading()}</div>
      <Content bgColor={bgColor}>{children}</Content>
    </Container>
  );
};

export default HomeWrapper;

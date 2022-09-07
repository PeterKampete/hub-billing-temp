import React from "react";
import { Container } from "./Button.styles";

export const PrimaryBtn = ({ title, bgColor, margin, padding, width, ...props }) => {
  return (
    <Container {...props} width={width} margin={margin} padding={padding}>
      {title}
    </Container>
  );
};

export const SecondaryBtn = ({ title, bgColor, margin, padding, width, ...props }) => {
  return (
    <Container {...props} width={width} margin={margin} padding={padding}>
      {title}
    </Container>
  );
};

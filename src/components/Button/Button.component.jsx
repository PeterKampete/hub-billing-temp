import React from "react";
import { Container } from "./Button.styles";

export const PrimaryBtn = ({
  title,
  bgColor,
  margin,
  padding,
  width,
  onClick,
  ...props
}) => {
  return (
    <Container
      onClick={onClick}
      {...props}
      width={width}
      margin={margin}
      padding={padding}
    >
      {title}
    </Container>
  );
};

export const SecondaryBtn = ({
  title,
  bgColor,
  margin,
  padding,
  width,
  onClick,
  ...props
}) => {
  return (
    <Container
      onClick={onClick}
      {...props}
      width={width}
      margin={margin}
      padding={padding}
    >
      {title}
    </Container>
  );
};

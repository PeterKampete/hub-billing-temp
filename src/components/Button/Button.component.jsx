import React from "react";
import { Container } from "./Button.styles";

export const PrimaryBtn = ({
  title,
  bgColor,
  margin,
  padding,
  width,
  renderIcon,
  onClick,
  ...props
}) => {
  return (
    <Container
      onClick={onClick}
      width={width}
      margin={margin}
      padding={padding}
      bgColor={bgColor}
      {...props}
    >
      {renderIcon && renderIcon()}
      {title}
    </Container>
  );
};

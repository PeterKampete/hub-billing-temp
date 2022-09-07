import React from "react";
import { Container } from "./PrimaryBtn.styles";

const PrimaryBtn = ({ title, bgColor, margin, padding, width, ...props }) => {
  return (
    <Container {...props} width={width} margin={margin} padding={padding}>
      {title}
    </Container>
  );
};

export default PrimaryBtn;

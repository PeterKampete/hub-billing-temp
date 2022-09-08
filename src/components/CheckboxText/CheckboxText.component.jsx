import React, { useState } from "react";
import { FaCheckSquare } from "react-icons/fa";
import { GrCheckbox } from "react-icons/gr";

import { Container, CheckText } from "./CheckboxText.styles";

const CheckboxText = ({ text, onClick, renderIcon, checked, ...props }) => {
  return (
    <Container onClick={onClick} {...props}>
      {checked ? (
        <FaCheckSquare
          size="10px"
          color="var(--color-primary)"
          style={{ borderRadius: "2px" }}
        />
      ) : (
        <GrCheckbox
          size="10px"
          color="#555555"
          style={{ borderRadius: "2px" }}
        />
      )}
      <CheckText>{text}</CheckText>
    </Container>
  );
};

export default CheckboxText;

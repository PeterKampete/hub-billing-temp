import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { Container, Title } from "./Note.styles";

const Note = ({ title, renderIcon, width, ...props }) => {
  return (
    <Container width={width} {...props}>
      {<RiErrorWarningFill color="#FFAC14" /> || renderIcon()}
      <Title>{title}</Title>
    </Container>
  );
};

export default Note;

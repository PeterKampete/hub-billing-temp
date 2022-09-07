import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { Container, Span } from "./Note.styles";

const Note = ({ title, renderIcon, ...props }) => {
  return (
    <Container {...props}>
      {<RiErrorWarningFill color="#FFAC14" /> || renderIcon()}
      <Span>{title}</Span>
    </Container>
  );
};

export default Note;

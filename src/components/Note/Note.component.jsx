import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { Container, Title } from "./Note.styles";

const Note = ({ title, renderIcon, padding, width, margin, ...props }) => {
  return (
    <Container padding={padding} margin={margin} width={width} {...props}>
      {<RiErrorWarningFill color="#FFAC14" /> || renderIcon()}
      <Title>{title}</Title>
    </Container>
  );
};

export default Note;

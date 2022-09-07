import React from "react";
import { Container, Text } from "./LinkDocs.styles";
import { FaExternalLinkAlt } from "react-icons/fa";

const LinkDocs = ({ title, renderIcon, color, ...props }) => {
  return (
    <Container color={color} {...props}>
      <Text>{title}</Text>
      {<FaExternalLinkAlt /> || renderIcon()}
    </Container>
  );
};

export default LinkDocs;

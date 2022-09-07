import React from "react";
import { Container, Text } from "./LinkDocs.styles";
import { FaExternalLinkAlt } from "react-icons/fa";

const LinkDocs = ({ title, renderIcon, color, fWeight, ...props }) => {
  return (
    <Container color={color} {...props}>
      <Text fWeight={fWeight}>{title}</Text>
      {<FaExternalLinkAlt /> || renderIcon()}
    </Container>
  );
};

export default LinkDocs;

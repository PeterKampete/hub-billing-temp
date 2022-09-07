import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import LinkDocs from "../LinkDocs/LinkDocs.component";
import { Container, Title, Caption } from "./PageHeader.styles";

const PageHeader = ({ title, caption }) => {
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <Caption>{caption}</Caption>
      </div>
      <div>
        <LinkDocs title="Docs" renderIcon={() => <FaExternalLinkAlt />} />
      </div>
    </Container>
  );
};

export default PageHeader;

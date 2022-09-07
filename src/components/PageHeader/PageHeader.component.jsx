import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import LinkDocs from "../LinkDocs/LinkDocs.component";
import { Container, Title, Caption } from "./PageHeader.styles";

const PageHeader = ({ title, caption }) => {
  return (
    <>
      <Container>
        <div>
          <Title>{title}</Title>
          <Caption>{caption}</Caption>
        </div>
        <div>
          <LinkDocs title="Docs" renderIcon={() => <FaExternalLinkAlt />} />
        </div>
      </Container>
      <div style={{ backgroundColor: "#E6E6E6", height: "0.5px" }} />
    </>
  );
};

export default PageHeader;

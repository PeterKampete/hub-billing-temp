import React from "react";
import { Container, Span } from "./TransactionLabel.styles";

const TransactionLabel = ({ label, value, bgColor, ...props }) => {
  return (
    <Container {...props} bgColor={bgColor}>
      <Span>{label}</Span>
      <Span style={{ color: "#555555" }}>{value}</Span>
    </Container>
  );
};

export default TransactionLabel;

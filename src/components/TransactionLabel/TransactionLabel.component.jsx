import React from "react";
import { Container } from "./TransactionLabel.styles";

const TransactionLabel = ({ label, value, bgColor, ...props }) => {
  return (
    <Container {...props} bgColor={bgColor}>
      <span>{label}</span>
      <span style={{ color: "var(--color-secondary1)", fontSize: '14px' }}>{value}</span>
    </Container>
  );
};

export default TransactionLabel;

import React from "react";
import { Container, Steps, Title } from "./StepsContainer.styles";

const StepsContainer = ({ steps, ...props }) => {
  return (
    <Container {...props}>
      <div>
        <Title>Getting Started</Title>
      </div>
      <div>
        <Steps>{steps}</Steps>
      </div>
    </Container>
  );
};

export default StepsContainer;

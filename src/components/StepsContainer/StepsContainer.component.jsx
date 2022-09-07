import React from "react";
import { Container, Steps, Title } from "./StepsContainer.styles";

const StepsContainer = ({ steps, title, ...props }) => {
  return (
    <Container {...props}>
      <div>
        <Title>{title}</Title>
      </div>
      <div>
        <Steps>{steps}</Steps>
      </div>
    </Container>
  );
};

export default StepsContainer;

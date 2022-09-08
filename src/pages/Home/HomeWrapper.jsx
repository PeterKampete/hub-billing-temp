import React, { useState } from "react";
import { StepsContainer } from "../../components";
import { Container, Content } from "./Home.styles";

const HomeWrapper = ({ children, ...props }) => {
  const [steps, setSteps] = useState(0);
  return (
    <Container {...props}>
      <div>
        <StepsContainer title="Getting Started" steps={steps} />
      </div>
      <Content>{children}</Content>
    </Container>
  );
};

export default HomeWrapper;

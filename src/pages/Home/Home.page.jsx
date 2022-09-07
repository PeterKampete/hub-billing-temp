import React from "react";
import { Container, Content, Title, Caption } from "./Home.styles";
import { Wrapper } from "../../containers";
import {
  LinkDocs,
  StepsContainer,
  TransactionLabel,
  WordMark,
} from "../../components";
import PrimaryBtn from "../../components/Button/PrimaryBtn/PrimaryBtn.component";

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <StepsContainer steps="Step 1 of 2 .." />
        </div>
        <Content>
          <WordMark />
          <Title>Connect Stripe Account</Title>
          <Caption>
            Client Billing requires a free Stripe account. Connect your existing{" "}
            <br />
            account or create a new one.
          </Caption>
          <TransactionLabel label="Transaction Fee" value="5%" />
          <PrimaryBtn title="Get Started" width="20" />
          <LinkDocs
            title="Find out more about Client Billing"
            color="var(--color-primary)"
          />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Home;

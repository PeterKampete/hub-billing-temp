import React, { useEffect, useState } from "react";
import { Container, Content, Title, Caption } from "./Home.styles";
import { Wrapper } from "../../containers";
import {
  LinkDocs,
  Modal,
  StepsContainer,
  TransactionLabel,
  WordMark,
} from "../../components";
import { PrimaryBtn } from "../../components/Button/Button.component";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  }, []);

  return (
    <Wrapper>
      {showModal && (
        <Modal
          className="container"
          title="Upgrade to pay 0% transaction fee"
          caption="Pay 0% transaction fee and get added benefits by upgrading your account."
        />
      )}
      <Container>
        <div>
          <StepsContainer title="Getting Started" steps="Step 1 of 2 .." />
        </div>
        <Content>
          <WordMark />
          <Title>Connect Stripe Account</Title>
          <Caption>
            Client Billing requires a free Stripe account. Connect your existing
            account <br /> <br />
            or create a new one.
          </Caption>
          <TransactionLabel label="Transaction Fee" value="5%" />
          <PrimaryBtn title="Get Started" width="21" margin="12" />
          <LinkDocs
            title="Find out more about Client Billing"
            color="var(--color-primary)"
            fWeight="400"
          />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Home;

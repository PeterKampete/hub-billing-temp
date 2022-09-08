import React, { useEffect, useState } from "react";
import { Title, Caption } from "./Home.styles";
import { Wrapper } from "../../containers";
import { LinkDocs, Modal, TransactionLabel, WordMark } from "../../components";
import { PrimaryBtn } from "../../components/Button/Button.component";
import HomeWrapper from "./HomeWrapper";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 2000);
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
      <div style={{ marginTop: showModal ? '-2px' : '25px' }}>
        <HomeWrapper>
          <WordMark />
          <Title>Connect Stripe Account</Title>
          <Caption>
            Client Billing requires a free Stripe account. Connect your existing
            account <br /> <br />
            or create a new one.
          </Caption>
          <TransactionLabel label="Transaction Fee" value="5%" />
          <PrimaryBtn title="Get Started" width="20" margin="12" />
          <LinkDocs
            title="Find out more about Client Billing"
            color="var(--color-primary)"
            fWeight="400"
          />
        </HomeWrapper>
      </div>
    </Wrapper>
  );
};

export default Home;

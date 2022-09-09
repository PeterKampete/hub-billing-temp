import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import {
  Title,
  Caption,
  BackBtn,
  StyledTitle,
  StyledBtnChk,
  StyledBtn,
} from "./Home.styles";
import { Wrapper } from "../../containers";
import {
  CheckboxText,
  Connection,
  Dropdown,
  LinkDocs,
  Modal,
  Note,
  StepsContainer,
  TransactionLabel,
  WordMark,
} from "../../components";
import { Button } from "../../components";
import HomeWrapper from "./HomeWrapper";
import { BackIcon } from "../../assets/svg/SvgIcons";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSetup, setIsSetup] = useState(true);
  const [steps, setSteps] = useState(0);
  const [next, setNext] = useState(false);

  const options = [
    "USD - United States Dollars",
    "EUR - European Euro",
    "JPY - Japanese Yen",
    "GBP - British Pound",
    "XAF - Francs",
  ];

  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (isSetup) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
    }
    setTimeout(() => {
      setShowModal(true);
    }, 2000);
  }, [isSetup]);

  return (
    <Wrapper>
      {showModal && (
        <Modal
          className="container"
          title="Upgrade to pay 0% transaction fee"
          caption="Pay 0% transaction fee and get added benefits by upgrading your account."
        />
      )}
      <div style={{ marginTop: showModal ? "-2px" : "25px" }}>
        <HomeWrapper
          heading={() => (
            <StepsContainer title="Getting Started" steps={steps} />
          )}
          style={{ paddingBottom: "20px" }}
        >
          {next ? (
            <>
              <BackBtn
                title="Back"
                padding="5"
                margin="0"
                width="10"
                renderIcon={() => <BackIcon />}
              />
              <StyledTitle>Choose Billing Currency</StyledTitle>
              <Caption>
                Select the currency you want to use to bill your clients.
              </Caption>
              <Note
                title="Note: Billing currency cannot be changed in the future.
         Please make sure you select the correct currency."
                width="60"
              />
              <Dropdown options={options} />
              <CheckboxText
                onClick={() => setCheck(!check)}
                text="I am aware that I cannot change currency later"
                checked={check}
              />
              {check ? (
                <StyledBtnChk title="Finish Setup" width="16" />
              ) : (
                <StyledBtn title="Finish Setup" width="16" />
              )}
            </>
          ) : (
            <>
              <WordMark />
              <Title>Connect Stripe Account</Title>
              {isSetup ? (
                <Connection
                  name="{name} Stripe Account"
                  email="{email}"
                  status="Connected"
                  width="46"
                  padding="16"
                  renderIcon={() => <FaCheckCircle color="#18BB4B" />}
                />
              ) : (
                <div>
                  <Caption>
                    Client Billing requires a free Stripe account. Connect your
                    existing account <br /> <br />
                    or create a new one.
                  </Caption>
                  <TransactionLabel label="Transaction Fee" value="5%" />
                </div>
              )}
              <div>
                {isSetup ? (
                  <Button title="Continue" width="100" margin="12" />
                ) : (
                  <div>
                    <Button
                      title="Get Started"
                      width="16"
                      margin="12"
                      onClick={() => setNext(true)}
                    />
                    <LinkDocs
                      title="Find out more about Client Billing"
                      color="var(--color-primary)"
                      fWeight="400"
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </HomeWrapper>
      </div>
    </Wrapper>
  );
};

export default Home;

/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useContext, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import {
  Title, Caption, StartCon, StyledLinkDocs, StyledBtnCon,
} from './Home.styles';
import { Wrapper } from '../../containers';
import {
  Connection,
  Modal,
  StepsContainer,
  TransactionLabel,
  WordMark,
  Button,
} from '../../components';

import HomeWrapper from './HomeWrapper';
import { StepContext } from '../../App';

const Home0 = () => {
  const stepContext = useContext(StepContext);
  const { stepDispatch } = stepContext;
  const [isConnected, setIsConnected] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 1500);
  }, []);
  const handleNext = () => {
    stepDispatch('increment');
  };
  const handleStart = () => {
    setShowModal(false);
    setIsConnected(true);
  };

  return (
    <Wrapper>
      {showModal && (
      <Modal
        className="container"
        title="Upgrade to pay 0% transaction fee"
        caption="Pay 0% transaction fee and get added benefits by upgrading your account."
      />
      )}
      <div style={{ marginTop: showModal || isConnected ? '0px' : '28px' }}>
        <HomeWrapper
          heading={() => <StepsContainer title="Getting Started" />}
          style={{ paddingBottom: showModal ? '0.4rem' : '1.7%' }}
        >
          <WordMark />
          <Title>Connect Stripe Account</Title>
          {isConnected ? (
            <Connection
              name="{name} Stripe Account"
              email="{email}"
              status="Connected"
              width="46"
              padding={2}
              renderIcon={() => <FaCheckCircle color="#18BB4B" />}
            />
          ) : (
            <>
              <Caption>
                Client Billing requires a free Stripe account. Connect your existing account
                {' '}
                <br />
                {' '}
                <br />
                or create a new one.
              </Caption>
              <TransactionLabel label="Transaction Fee" value="5%" width={44} />
            </>
          )}
          <div>
            {isConnected ? (
              <div>
                <StyledBtnCon title="Continue" width={100} onClick={handleNext} />
              </div>
            ) : (
              <StartCon>
                <Button
                  title="Get Started"
                  width={55}
                  margin="12"
                  onClickFunc={handleStart}
                />
                <StyledLinkDocs
                  title="Find out more about Client Billing"
                  color="var(--color-primary)"
                />
              </StartCon>
            )}
          </div>
        </HomeWrapper>
      </div>
    </Wrapper>
  );
};

export default Home0;

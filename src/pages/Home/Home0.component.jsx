/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useContext } from 'react';
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
import { CountContext } from '../../App';

const Home0 = () => {
  const countContext = useContext(CountContext);
  // eslint-disable-next-line no-unused-vars
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isSetup, setIsSetup] = useState(false);

  // useEffect(() => {
  //   if (!isSetup) {
  //     setTimeout(() => {
  //       setShowModal(true);
  //     }, 2000);
  //   }
  // }, [isSetup]);
  const handleNext = () => {
    countContext.countDispatch('increment');
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
      <div style={{ marginTop: showModal || isSetup ? '0px' : '28px' }}>
        <HomeWrapper
          heading={() => <StepsContainer title="Getting Started" />}
          style={{ paddingBottom: showModal || isSetup ? '1%' : '1.7%' }}
        >
          <WordMark />
          <Title>Connect Stripe Account</Title>
          {isSetup ? (
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
            {isSetup ? (
              <div>
                <StyledBtnCon title="Continue" width={100} />
              </div>
            ) : (
              <StartCon>
                <Button
                  title="Get Started"
                  width={55}
                  margin="12"
                  onClickFunc={handleNext}
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

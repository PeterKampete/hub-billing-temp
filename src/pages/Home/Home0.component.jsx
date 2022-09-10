/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import {
  Title, Caption, StartCon, StyledLinkDocs,
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
import Home2 from './Home1.component';
import Home3 from './Home2.component';

const Home0 = () => {
  // eslint-disable-next-line no-unused-vars
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isSetup, setIsSetup] = useState(false);

  const [steps, setSteps] = useState(1);

  const stepsArr = [1, 2, 3];

  // useEffect(() => {
  //   if (!isSetup) {
  //     setTimeout(() => {
  //       setShowModal(true);
  //     }, 2000);
  //   }
  // }, [isSetup]);

  if (steps === stepsArr[1]) {
    return <Home2 steps={steps} />;
  } if (steps === stepsArr[2]) {
    return <Home3 />;
  }
  return (
    <Wrapper>
      {showModal && (
      <Modal
        className="container"
        title="Upgrade to pay 0% transaction fee"
        caption="Pay 0% transaction fee and get added benefits by upgrading your account."
      />
      )}
      <div style={{ marginTop: showModal ? '-2px' : '28px' }}>
        <HomeWrapper
          heading={() => <StepsContainer title="Getting Started" steps={steps} />}
          style={{ paddingBottom: '10px' }}
        >
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
              <Button title="Continue" width="100" margin="12" />
            ) : (
              <StartCon>
                <Button
                  title="Get Started"
                  width={70}
                  margin="12"
                  onClickFunc={() => setSteps(steps + 1)}
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

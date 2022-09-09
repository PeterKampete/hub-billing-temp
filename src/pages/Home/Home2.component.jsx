import React from 'react';
import {
  Clients, Config, Invoices, Services,
} from '../../assets/svg/SvgIcons';
import { Navlink, Loader } from '../../components';
import { Wrapper } from '../../containers';
import {
  Caption, LinksContainer, Title, ConfigBtn,
} from './Home.styles';
import HomeWrapper from './HomeWrapper';

const Home2 = () => (
  <Wrapper>
    <div>
      <LinksContainer>
        <div style={{ display: 'flex' }}>
          <Navlink title="Overview" />
          <Navlink title="Clients" renderIcon={() => <Clients />} />
          <Navlink title="Products & Services" renderIcon={() => <Services />} />
          <Navlink title="Invoices" renderIcon={() => <Invoices />} />
        </div>
        <ConfigBtn title="Configure" width="12" padding="5" renderIcon={() => <Config />} />
      </LinksContainer>
      <HomeWrapper bgColor="white" style={{ padding: '70px', height: '80%' }}>
        <Loader />
        <Title>Importing Stripe Configurations</Title>
        <Caption>
          Please wait while we are importing your Stripe configurations. It will only
          {' '}
          <br />
          <br />
          {' '}
          take a few seconds…
        </Caption>
      </HomeWrapper>
    </div>
  </Wrapper>
);

export default Home2;

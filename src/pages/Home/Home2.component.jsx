import React from 'react';
import {
  Clients, Config, Invoices, Services,
} from '../../assets/svg/SvgIcons';
import { Navlink, Loader } from '../../components';
import { Wrapper } from '../../containers';
import {
  Caption, LinksContainer, Title, ConfigBtn, StyledHomeWrapper,
} from './Home.styles';

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
        <ConfigBtn title="Configure" width="12" padding="3px" renderIcon={() => <div style={{ marginRight: '5px' }}><Config /></div>} />
      </LinksContainer>
      <StyledHomeWrapper bgColor="white">
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
      </StyledHomeWrapper>
    </div>
  </Wrapper>
);

export default Home2;

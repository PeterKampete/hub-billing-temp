import React from 'react';
import PropTypes from 'prop-types';

import { Navbar, PageHeader } from '../../components';
import { WrapperContainer, Content } from './Wrapper.styles';

const Wrapper = ({ children }) => (
  <WrapperContainer>
    <Navbar />
    <Content>
      <>
        <PageHeader
          title="Client Billing "
          caption="– A full payment solution for your business, free with {company}"
        />
        {children}
      </>
    </Content>
  </WrapperContainer>
);

Wrapper.defaultProps = {
  children: null,
};

Wrapper.propTypes = {
  children: PropTypes.node,
};
export default Wrapper;

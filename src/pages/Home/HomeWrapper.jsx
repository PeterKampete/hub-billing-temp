import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './Home.styles';

const HomeWrapper = ({
  children, heading, bgColor, ...props
}) => (
  <Container {...props}>
    <div>{heading && heading()}</div>
    <Content bgColor={bgColor}>{children}</Content>
  </Container>
);

HomeWrapper.defaultProps = {
  children: null,
  heading: null,
  bgColor: 'var(--color-bgMain1)',
};

HomeWrapper.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.func,
  bgColor: PropTypes.string,
};
export default HomeWrapper;

import React from 'react';
import PropTypes from 'prop-types';

import { FaHeading } from 'react-icons/fa';
import { Container, Content } from './Home.styles';

const HomeWrapper = ({
  children, heading, bgColor, ...props
}) => (
  <Container {...props}>
    <div>{FaHeading}</div>
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
  heading: PropTypes.node,
  bgColor: PropTypes.string,
};
export default HomeWrapper;

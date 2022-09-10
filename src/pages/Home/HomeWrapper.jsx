import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './Home.styles';

const HomeWrapper = ({
  children, heading, bgColor, padding, margin, ...props
}) => (
  <Container {...props}>
    <div>{heading && heading()}</div>
    <Content bgColor={bgColor} margin={margin} padding={padding}>{children}</Content>
  </Container>
);

HomeWrapper.defaultProps = {
  children: null,
  heading: null,
  padding: '',
  margin: '',
  bgColor: 'var(--color-bgMain1)',
};

HomeWrapper.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.func,
  bgColor: PropTypes.string,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HomeWrapper;

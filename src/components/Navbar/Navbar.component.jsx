import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './Navbar.styles';

const Navbar = ({ children }) => <Container>{children}</Container>;

Navbar.defaultProps = {
  children: null,
};

Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;

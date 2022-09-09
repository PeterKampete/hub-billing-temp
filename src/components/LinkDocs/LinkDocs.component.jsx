import React from 'react';
import PropTypes from 'prop-types';

import { FaExternalLinkAlt } from 'react-icons/fa';

import { Container, Text } from './LinkDocs.styles';

const LinkDocs = ({
  title, color, renderIcon, ...props
}) => (
  <Container color={color} {...props}>
    <Text>{title}</Text>
    {renderIcon && renderIcon()}
  </Container>
);

LinkDocs.defaultProps = {
  title: '',
  color: '',
  renderIcon: () => <FaExternalLinkAlt />,
};

LinkDocs.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  renderIcon: PropTypes.func,
};

export default LinkDocs;

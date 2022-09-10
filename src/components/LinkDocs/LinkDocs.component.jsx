import React from 'react';
import PropTypes from 'prop-types';

import { FaExternalLinkAlt } from 'react-icons/fa';

import { Container, Title } from './LinkDocs.styles';

const LinkDocs = ({
  title, color, renderIcon, fontSize, ...props
}) => (
  <Container color={color} {...props}>
    <Title fontSize={fontSize}>{title}</Title>
    {renderIcon && renderIcon()}
  </Container>
);

LinkDocs.defaultProps = {
  title: '',
  color: '',
  renderIcon: () => <FaExternalLinkAlt />,
  fontSize: 80,
};

LinkDocs.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  renderIcon: PropTypes.func,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default LinkDocs;

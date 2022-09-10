import React from 'react';
import PropTypes from 'prop-types';

import { Container, Span } from './TransactionLabel.styles';

const TransactionLabel = ({
  label,
  value,
  bgColor,
  width,
  color,
  borderRadius,
  fontSize,
  ...props
}) => (
  <Container {...props} bgColor={bgColor} width={width} color={color} borderRadius={borderRadius}>
    <Span fontSize={fontSize}>{label}</Span>
    <Span fontSize={fontSize}>{value}</Span>
  </Container>
);

TransactionLabel.defaultProps = {
  label: '',
  value: '',
  bgColor: 'var(--color-white)',
  color: '#555555',
  width: '',
  fontSize: 80,
  borderRadius: 3,
};
TransactionLabel.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TransactionLabel;

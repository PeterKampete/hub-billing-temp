import React from 'react';
import PropTypes from 'prop-types';

import { Container, Labels, Status } from './Connection.styles';

const Connection = ({
  name,
  email,
  status,
  renderIcon,
  bgColor,
  width,
  margin,
  padding,
  ...props
}) => (
  <Container width={width} padding={padding} bgColor={bgColor} margin={margin} {...props}>
    <Labels>
      <span>{name}</span>
      <span>{email}</span>
    </Labels>
    <div>
      <Status>{status}</Status>
      {renderIcon && renderIcon()}
    </div>
  </Container>
);

Connection.defaultProps = {
  name: '',
  email: '',
  status: '',
  renderIcon: null,
  bgColor: 'var(--color-white)',
  width: '100%',
  margin: '10px',
  padding: '10px',
};

Connection.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  status: PropTypes.string,
  renderIcon: PropTypes.func,
  bgColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Connection;

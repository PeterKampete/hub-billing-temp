import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './Navlink.styles';

const Navlink = ({
  title, onClickFunc, renderIcon, fontSize, color, ...props
}) => (
  <Container onClick={onClickFunc} {...props}>
    {renderIcon && renderIcon()}
    <Title fontSize={fontSize} color={color}>
      {title}
    </Title>
  </Container>
);

Navlink.defaultProps = {
  fontSize: '11px',
  color: '#555555',
  title: '',
  onClickFunc: null,
  renderIcon: null,
};

Navlink.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClickFunc: PropTypes.func,
  renderIcon: PropTypes.func,
};

export default Navlink;

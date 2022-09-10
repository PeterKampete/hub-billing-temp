import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Snack.styles';

const Snack = ({
  iconAfter, renderIcon, title, children, ...props
}) => (
  <Container {...props}>
    {renderIcon && !iconAfter ? renderIcon() : null}
    {title}
    {renderIcon && iconAfter ? renderIcon() : null}
    {children}
  </Container>
);

Snack.defaultProps = {
  title: '',
  color: 'var(--color-white)',
  bgColor: 'var(--color-primary)',
  borderRadius: 3,
  width: '',
  padding: '10px',
  margin: '10px',
  border: '',
  height: '',
  renderIcon: null,
  onClickFunc: null,
  fontSize: '11px',
  iconAfter: false,
  children: null,
};

Snack.propTypes = {
  onClickFunc: PropTypes.func,
  title: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bgColor: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  border: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  renderIcon: PropTypes.func,
  iconAfter: PropTypes.bool,
  children: PropTypes.node,
};

export default Snack;

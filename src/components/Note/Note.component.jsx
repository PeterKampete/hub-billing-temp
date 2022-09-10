import React from 'react';
import PropTypes from 'prop-types';

import { RiErrorWarningFill } from 'react-icons/ri';

import { Container, Title } from './Note.styles';

const Note = ({
  title,
  renderIcon,
  padding,
  width,
  bgColor,
  margin,
  borderRadius,
  iconAfter,
  children,
  ...props
}) => (
  <Container
    padding={padding}
    margin={margin}
    width={width}
    borderRadius={borderRadius}
    bgColor={bgColor}
    {...props}
  >
    {renderIcon && !iconAfter ? renderIcon() : null}
    <Title>{title}</Title>
    {renderIcon && iconAfter ? renderIcon() : null}
    {children}
  </Container>
);

Note.defaultProps = {
  title: '',
  fontSize: '10px',
  color: '#555555',
  bgColor: 'var(--color-warning)',
  renderIcon: () => <RiErrorWarningFill fontSize="15px" color="#FFAC14" />,
  iconAfter: false,
  children: null,
  width: '',
  padding: '10px 14px',
  margin: '26px',
  borderRadius: 3,
};

Note.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconAfter: PropTypes.bool,
  renderIcon: PropTypes.func,
  children: PropTypes.node,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Note;

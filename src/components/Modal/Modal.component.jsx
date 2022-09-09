import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '..';
import { PopupIcon } from '../../assets/svg/SvgIcons';
import {
  Caption, Container, Title, Icon, Texts,
} from './Modal.styles';

const Modal = ({
  title, caption, width, height, borderRadius, bgColor, ...props
}) => (
  <Container {...props}>
    <Icon width={width} height={height} borderRadius={borderRadius} bgColor={bgColor}>
      <PopupIcon />
    </Icon>
    <Texts>
      <Title>{title}</Title>
      <Caption>{caption}</Caption>
    </Texts>
    <Button title="Upgrade" width="80" />
  </Container>
);

Modal.defaultProps = {
  title: '',
  caption: '',
  bgColor: 'var(--color-primary)',
  width: '35px',
  height: '35px',
  borderRadius: '50%',
  padding: '',
};

Modal.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
  bgColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Modal;

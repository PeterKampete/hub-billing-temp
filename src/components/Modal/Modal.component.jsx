import React from 'react';
import PropTypes from 'prop-types';

import { PopupIcon } from '../../assets/svg/SvgIcons';
import {
  Caption, Container, Title, Icon, Texts, ModalButton,
} from './Modal.styles';

const Modal = ({
  title, caption, width, height, borderRadius, padding, bgColor, ...props
}) => (
  <Container {...props}>
    <div style={{ display: 'flex' }}>
      <Icon
        width={width}
        height={height}
        borderRadius={borderRadius}
        padding={padding}
        bgColor={bgColor}
      >
        <PopupIcon />
      </Icon>
      <Texts>
        <Title>{title}</Title>
        <Caption>{caption}</Caption>
      </Texts>
    </div>
    <ModalButton title="Upgrade" width="50" />
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

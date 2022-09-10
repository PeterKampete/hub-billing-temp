import React from 'react';
import PropTypes from 'prop-types';

import { WordMarkText } from '../../assets/svg/SvgIcons';
import { Container } from './WordMark.styles';

const WordMark = ({
  bgColor, width, height, borderRadius, ...props
}) => (
  <Container
    bgColor={bgColor}
    width={width}
    height={height}
    borderRadius={borderRadius}
    {...props}
  >
    <WordMarkText />
  </Container>
);

WordMark.defaultProps = {
  bgColor: 'var(--color-bgWordmark)',
  width: '110px',
  height: '110px',
  borderRadius: '50%',
};

WordMark.propTypes = {
  bgColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default WordMark;

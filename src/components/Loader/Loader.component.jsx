import React from 'react';
import PropTypes from 'prop-types';

import { LoaderContainer } from './Loader.styles';

const Loader = ({ size, fill, ...props }) => <LoaderContainer size={size} fill={fill} {...props} />;

Loader.defaultProps = {
  size: '32px',
  fill: '#cccccc',
};

Loader.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fill: PropTypes.string,
};

export default Loader;

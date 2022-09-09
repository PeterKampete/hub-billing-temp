import React from 'react';
import PropTypes from 'prop-types';

import { FaCheckSquare } from 'react-icons/fa';
import { GrCheckbox } from 'react-icons/gr';

import { Container, CheckText } from './CheckboxText.styles';

const CheckboxText = ({
  text, onClickFunc, checked, ...props
}) => (
  <Container onClick={onClickFunc} {...props}>
    {checked ? (
      <FaCheckSquare size="10px" color="var(--color-primary)" style={{ borderRadius: '2px' }} />
    ) : (
      <GrCheckbox size="10px" color="#555555" style={{ borderRadius: '2px' }} />
    )}
    <CheckText>{text}</CheckText>
  </Container>
);

CheckboxText.defaultProps = {
  text: '',
  onClickFunc: null,
  checked: false,
};

CheckboxText.propTypes = {
  text: PropTypes.string,
  onClickFunc: PropTypes.func,
  checked: PropTypes.bool,
};

export default CheckboxText;

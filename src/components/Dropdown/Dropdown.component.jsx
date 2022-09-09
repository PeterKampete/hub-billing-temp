import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FaChevronDown } from 'react-icons/fa';

import {
  Container, DropDownHeader, DropDownList, ListItem, Heading,
} from './Dropdown.styles';

const Dropdown = ({
  options, bgColor, width, borderRadius, ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  return (
    <Container {...props}>
      <DropDownHeader
        bgColor={bgColor}
        borderRadius={borderRadius}
        width={width}
        onClick={toggling}
      >
        <Heading>{selectedOption || options[0]}</Heading>
        <FaChevronDown size="8px" />
      </DropDownHeader>
      {isOpen && (
        <DropDownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
        </DropDownList>
      )}
    </Container>
  );
};

Dropdown.defaultProps = {
  options: [],
  bgColor: 'var(--color-white)',
  width: '100',
  borderRadius: 3,
};

Dropdown.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array,
  bgColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Dropdown;

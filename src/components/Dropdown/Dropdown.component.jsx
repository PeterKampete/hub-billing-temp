import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  Container,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
  Heading,
} from "./Dropdown.styles";

const Dropdown = ({ options, bgColor, width, ...props }) => {
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
      <DropDownHeader bgColor={bgColor} width={width} onClick={toggling}>
        <Heading>{selectedOption || options[0]}</Heading>
        <FaChevronDown size="8px" />
      </DropDownHeader>
      {isOpen && (
        <>
          <DropDownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </>
      )}
    </Container>
  );
};

export default Dropdown;

import React from "react";
import { PopupIcon } from "../../assets/svg/SvgIcons";
import { Button } from "../../components";
import { Caption, Container, Title, Icon, Texts } from "./Modal.styles";

const Modal = ({ title, caption, ...props }) => {
  return (
    <Container {...props}>
      <Icon>
        <PopupIcon />
      </Icon>
      <Texts>
        <Title>{title}</Title>
        <Caption>{caption}</Caption>
      </Texts>
      <Button title="Upgrade" width="80" />
    </Container>
  );
};

export default Modal;

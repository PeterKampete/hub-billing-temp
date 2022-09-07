import React from "react";
import { PopupIcon } from "../../assets/svg/PopupIcon";
import { PrimaryBtn } from "../Button/Button.component";
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
      <PrimaryBtn title="Upgrade" width="80" />
    </Container>
  );
};

export default Modal;

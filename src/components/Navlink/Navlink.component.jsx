import React from "react";

import { Container, Title } from "./Navlink.styles";

const Navlink = ({ title, onClick, renderIcon, ...props }) => {
  return (
    <Container onClick={onClick} {...props}>
      {renderIcon && renderIcon()}
      <Title>{title}</Title>
    </Container>
  );
};

export default Navlink;

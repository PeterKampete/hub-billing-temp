import React from "react";
import { Container } from "./Navbar.styles";

const Navbar = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Navbar;

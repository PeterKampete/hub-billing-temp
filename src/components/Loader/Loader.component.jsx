import React from "react";
import "./Loader.styles.css";
import { Container } from "./Loader.styles";

const Loader = ({ size, ...props }) => {
  return <Container size={size} {...props} />;
};

export default Loader;

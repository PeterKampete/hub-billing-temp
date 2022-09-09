import React from "react";
import { Container, Labels, Status } from "./Connection.styles";

const Connection = ({
  name,
  email,
  status,
  bgColor,
  width,
  margin,
  padding,
  renderIcon,
  ...props
}) => {
  return (
    <Container
      width={width}
      padding={padding}
      bgColor={bgColor}
      margin={margin}
      {...props}
    >
      <Labels>
        <span>{name}</span>
        <span>{email}</span>
      </Labels>
      <div>
        <Status>{status}</Status>
        {renderIcon && renderIcon()}
      </div>
    </Container>
  );
};

export default Connection;

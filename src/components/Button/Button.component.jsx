import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Container } from "./Button.styles";

const Button = forwardRef(
  (
    {
      onClickFunc,
      title,
      color,
      bgColor,
      width,
      height,
      borderRadius,
      padding,
      margin,
      fontSize,
      border,
      renderIcon,
      iconAfter,
      children,
      ...props
    },
    ref
  ) => (
    <>
      <Container
        color={color}
        fontSize={fontSize}
        padding={padding}
        margin={margin}
        border={border}
        bgColor={bgColor}
        width={width}
        height={height}
        onClick={onClickFunc}
        borderRadius={borderRadius}
        ref={ref}
        {...props}
      >
        {renderIcon && !iconAfter ? renderIcon() : null}
        {title}
        {renderIcon && iconAfter ? renderIcon() : null}
        {children}
      </Container>
    </>
  )
);

Button.defaultProps = {
  title: "",
  color: "var(--color-white)",
  bgColor: "var(--color-primary)",
  width: "",
  borderRadius: 3,
  padding: "10px",
  margin: "10px",
  border: "",
  height: "",
  renderIcon: null,
  onClickFunc: null,
  fontSize: "11px",
  iconAfter: false,
  children: null,
};

Button.propTypes = {
  onClickFunc: PropTypes.func,
  text: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  border: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  renderIcon: PropTypes.func,
  iconAfter: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;

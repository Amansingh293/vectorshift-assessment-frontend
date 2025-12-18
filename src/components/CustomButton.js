import React from "react";
import { Button } from "antd";

const CustomButton = ({
  children,
  onClick,
  bgColor,
  hoverBgColor,
  textColor = "#ffffff",
  borderColor,
  disabled = false,
  size = "middle",
  style = {},
  ...rest
}) => {
  const baseColor = bgColor || "#a855f7";
  const hoverColor = hoverBgColor || bgColor;

  return (
    <Button
      type="primary"
      size={size}
      disabled={disabled}
      onClick={onClick}
      style={{
        backgroundColor: baseColor,
        borderColor: borderColor || baseColor,
        color: textColor,
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = hoverColor;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = baseColor;
        }
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

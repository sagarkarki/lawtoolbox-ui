import React from "react";
import "./Button.scss";
import Loader from "../Loader/Loader";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  type?: "button" | "submit";
  onClick?: () => void;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  isDisabled?: boolean;
  children?: React.ReactNode;
}

const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  iconPosition = "left",
  type = "button",
  isLoading = false,
  isDisabled = false,
  ...props
}: ButtonProps) => {
  const ButtonIcon = () => {
    return (
      <span
        className={[
          "ltb-button__icon",
          `ltb-button__icon__${iconPosition}`,
        ].join(" ")}
      >
        {props.children}
      </span>
    );
  };

  const ButtonLoader = () => {
    return isLoading ? (
      <div className="ltb-button__loader">
        <Loader size="1.2rem" color="#fff"></Loader>
      </div>
    ) : (
      <></>
    );
  };

  return (
    <button
      className={[
        "ltb-button",
        `ltb-button__${size}`,
        isLoading ? `ltb-button__with-loader` : ``,
      ].join(" ")}
      style={{ backgroundColor }}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {iconPosition === "left" ?  <ButtonIcon></ButtonIcon> : <></>}
      {label}
      {iconPosition === "right" ? <ButtonIcon></ButtonIcon> : <></>}

      <ButtonLoader></ButtonLoader>
    </button>
  );
};

export default Button;

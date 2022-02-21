import React from "react";
import "./Button.scss";
import Loader from "../Loader/Loader";

const buttonClass = "ltb-button";
export interface ButtonProps {
  backgroundType?: "primary" | "success" | "danger" | "warning" | "muted";
  buttonStyle?: "default" | "outlined";
  children?: React.ReactNode;
  iconPosition?: "left" | "right";
  isDisabled?: boolean;
  isLoading?: boolean;
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "small" | "medium" | "large";
  type?: "button" | "submit";
  [keys:string]: any
}

const Button = ({
  backgroundType = "primary",
  buttonStyle = "default",
  children,
  iconPosition = "left",
  isDisabled = false,
  isLoading = false,
  label,
  size = "medium",
  type = "button",
  ...props
}: ButtonProps) => {
  const classes = [
    buttonClass,
    `${buttonClass}__${size}`,
    isLoading ? `${buttonClass}__with-loader` : ``,
    `${buttonClass}__${backgroundType}`,
    `${buttonClass}__${buttonStyle}`,
    label === undefined || !label.length ? `${buttonClass}__only-icon` : ``,
  ].join(" ");

  //Button icon component
  const ButtonIcon = () => {
    return children ? (
      <span
        className={[
          `${buttonClass}__icon`,
          `${buttonClass}__icon__${iconPosition}`,
        ].join(" ")}
      >
        {children}
      </span>
    ) : (
      <> </>
    );
  };

  //Button Loader component
  const ButtonLoader = () => {
    return isLoading ? (
      <div className={`${buttonClass}__loader`}>
        <Loader size="1.5em" color="#fff"></Loader>
      </div>
    ) : (
      <></>
    );
  };

  const ButtonLabelBuild = () => {
    return <span className={`${buttonClass}__label`}>{label}</span>;
  };

  return (
    <button
      className={classes}
      disabled={isDisabled || isLoading}
      {...props}
      onClick={(event) => {
        if (props.onClick) props.onClick(event);
      }}
    >
      {iconPosition === "left" ? <ButtonIcon></ButtonIcon> : <></>}
      <ButtonLabelBuild></ButtonLabelBuild>
      {iconPosition === "right" ? <ButtonIcon></ButtonIcon> : <></>}

      <ButtonLoader></ButtonLoader>
    </button>
  );
};

export default Button;

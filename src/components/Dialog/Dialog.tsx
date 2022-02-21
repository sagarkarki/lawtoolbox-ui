import React from "react";
import Button from "../Button/Button";
import "./Dialog.scss";

const dialogClass = "ltb-dialog";

export type DialogProps = {
  [keys: string]: any;
};

export interface DialogTitleProps {
  children: React.ReactNode;
}

export interface DialogContentProps {
  children: React.ReactNode;
}

export const DialogTitle = ({ children }: DialogTitleProps) => {
  return <div className={`${dialogClass}__title`}>{children}</div>;
};

export const DialogContent = ({ children }: DialogContentProps) => {
  return <div className={`${dialogClass}__content`}>{children}</div>;
};

export const DialogActions = () => {
  return (
    <div className={`${dialogClass}__action`}>
      <Button
        name="cancel"
        label="Cancel"
        type="button"
        backgroundType="muted"
      ></Button>
      <Button
        name="ok"
        id="ok"
        label="Ok"
        type="button"
        backgroundType="success"
      ></Button>
    </div>
  );
};

const Dialog = ({ title, content }: DialogProps) => {
  return (
    <div className={[dialogClass].join(" ")}>
      <div className={`${dialogClass}__body`}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions></DialogActions>
      </div>

      <div className={`${dialogClass}__backdrop`}></div>
    </div>
  );
};

export default Dialog;

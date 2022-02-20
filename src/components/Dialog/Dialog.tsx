import React from "react";
import { DialogWidthType } from "./DialogTypes";
import "./Dialog.scss";

const dialogClass = "ltb-dialog";

export interface DialogProps {
  maxWidth?: DialogWidthType;
  children: React.ReactNode;
}

export interface DialogTitleProps {
  children: React.ReactNode;
}

export interface DialogContentProps {
  children: React.ReactNode;
}

export interface DialogActionsProps {
  children: React.ReactNode;
}

export const DialogTitle = ({ children }: DialogTitleProps) => {
  return <div className={`${dialogClass}__title`}>{children}</div>;
};

export const DialogContent = ({ children }: DialogContentProps) => {
  return <div className={`${dialogClass}__content`}>{children}</div>;
};

export const DialogActions = ({ children }: DialogActionsProps) => {
  return <div className={`${dialogClass}__action`}>{children}</div>;
};

const Dialog = ({ maxWidth = "md", children }: DialogProps) => {
  return (
    <div className={[dialogClass, maxWidth].join(" ")}>
      <div className={`${dialogClass}__body`}>{children}</div>

      <div className={`${dialogClass}__backdrop`}></div>
    </div>
  );
};

export default Dialog;

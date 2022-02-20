import React, { createContext, useState, FC, useEffect } from "react";
import "./Toast.scss";
import { ToastElement, ToastTypes } from "./Toast.types";
import LtbIcon, { IconType } from "../Icons/Icons";

const className = "ltb-toaster";
const toastDuration = 4000;
type toastDefaultIconsTypes = { [keys in ToastTypes]: IconType };
const toastDefaultIcons: toastDefaultIconsTypes = {
  primary: "info",
  success: "check-circle",
  danger: "error",
  warning: "warning",
  loader: "loader",
};

export type ToastContextState = {
  toasts: ToastElement[];
  pushToast: (toast: ToastElement) => void;
  removeToast: (id: number) => void;
};

export interface ToasterProps {
  children: React.ReactNode;
}

const contextDefaultValues: ToastContextState = {
  toasts: [],
  pushToast: () => {},
  removeToast: () => {},
};

export const ToasterContext =
  createContext<ToastContextState>(contextDefaultValues);

const ToasterProvider: FC = ({ children }) => {
  const [toasts, setToast] = useState<ToastElement[]>(
    contextDefaultValues.toasts
  );

  useEffect(() => {
    var interval: NodeJS.Timer;
    interval = setInterval(() => {
      toasts.forEach((el) => {
        if (el.type !== "loader" && Date.now() - (el.id || 0) > toastDuration)
          removeToast(el.id);
      });
      if (toasts.length === toasts.filter((el) => el.type === "loader").length)
        clearInterval(interval);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [toasts]);

  const removeToast = (id?: number) => {
    const currentToasts = [...toasts];
    const listItemIndex = currentToasts.findIndex((e) => e.id === id);
    currentToasts.splice(listItemIndex, 1);
    setToast([...currentToasts]);
  };

  const pushToast = (toast: ToastElement) => {
    toast.id = Date.now();
    setToast((toasts) => [...toasts, { ...toast }]);
    return toast.id;
  };

  const toastIconBuild = (toast: ToastElement) => {
    return (
      <div className={`${className}__toast__icon`}>
        {toast.children ?? (
          <LtbIcon icon={toastDefaultIcons[toast.type || "primary"]}></LtbIcon>
        )}
      </div>
    );
  };

  const toastTextContentBuild = (description: string, title?: string) => {
    return (
      <div className={`${className}__toast__text`}>
        {!!title?.length ? (
          <div className={`${className}__toast__text__title`}>{title}</div>
        ) : (
          <></>
        )}

        <div className={`${className}__toast__text__description`}>
          {description}
        </div>
      </div>
    );
  };

  const toastCLoseIconBuild = (id: number) => {
    return (
      <div
        className={`${className}__toast__close`}
        onClick={() => removeToast(id)}
      >
        <LtbIcon icon="close"></LtbIcon>
      </div>
    );
  };

  const toastBuild = () => {
    return (
      <div className={className}>
        {toasts.map((toast) => (
          <div
            className={[
              `${className}__toast`,
              `${className}__toast__${toast.type}`,
            ].join(" ")}
            key={toast.id}
          >
            {toastIconBuild(toast)}
            {toastTextContentBuild(toast.description, toast.title)}
            {toast.type === "loader" ? (
              <></>
            ) : (
              toastCLoseIconBuild(toast.id || 0)
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <ToasterContext.Provider
      value={{
        toasts,
        pushToast,
        removeToast,
      }}
    >
      {children}
      {toasts.length ? toastBuild() : <></>}
    </ToasterContext.Provider>
  );
};

export default ToasterProvider;

import React, { createContext, useState, FC, useEffect } from "react";
import { Loader } from "..";
import "./Toast.scss";
import { ToastElement } from "./Toast.types";
import LtbIcon from "../Icons/Icons";

const className = "ltb-toaster";
const toastDuration = 2000;

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
    const interval = setInterval(() => {
      if (toasts.filter((el) => el.type !== "loader").length) {
        removeToast(toasts.filter((el) => el.type !== "loader")[0].id);
      }
    }, toastDuration);

    return () => {
      clearInterval(interval);
    };
  }, [toasts]);

  const removeToast = (id?: number) => {
    const listItemIndex = toasts.findIndex((e) => e.id === id);
    toasts.splice(listItemIndex, 1);
    setToast([...toasts]);
  };

  const pushToast = (toast: ToastElement) => {
    toast.id = Date.now();
    setToast((toasts) => [...toasts, { ...toast }]);
    return toast.id;
  };

  const toastIconBuild = (icon?: React.ReactNode) => {
    return icon ? (
      <div className={`${className}__toast__icon`}>{icon}</div>
    ) : (
      <></>
    );
  };

  const toastLoaderBuild = () => {
    return <Loader size="2rem" color="#fff"></Loader>;
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
            {toast.type === "loader"
              ? toastLoaderBuild()
              : toastIconBuild(toast.children)}
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

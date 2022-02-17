import React, { useContext, useState, FC } from "react";
import "./Toaster.scss";
import { ToastElement } from "./Toaster.types";

interface IToasterContext {
  toasts: ToastElement[];
  pushToast: (toast: ToastElement) => void;
  popToast: () => void;
  dark: boolean;
  toggleDark: () => void;
}

const defaultState = {
  toasts: [] as ToastElement[],
  dark: false,
};

export const ToasterContext = React.createContext<IToasterContext>(
  defaultState as IToasterContext
);

export const ToasterProvider = ({ ...props }) => {
  const [dark, setDark] = useState(defaultState.dark);

  const toggleDark = () => {
    setDark(!dark);
    console.log("upper");
  };

  const [toasts, setToastElement] = useState(defaultState.toasts);

  const pushToast = (toast: ToastElement) => {
    setToastElement((toasts) => [...toasts, toast]);
    console.log(toasts);
  };

  const popToast = () => {
    console.log("hello");
    const tempToasts = [...toasts];
    tempToasts.pop();

    setToastElement(tempToasts);
  };

  return (
    <ToasterContext.Provider
      value={{
        toasts,
        pushToast,
        popToast,
        dark,
        toggleDark,
      }}
    >
      {props.children}
    </ToasterContext.Provider>
  );
};

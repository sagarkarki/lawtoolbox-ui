import React, { createContext, useState, FC } from "react";
import "./Toast.scss";
import { ToastElement } from "./Toast.types";

const className = "ltb-toaster";

export type ToastContextState = {
  toasts: ToastElement[];
  pushToast: (toast: ToastElement) => void;
  popToast: () => void;
};

export interface ToasterProps {
  children: React.ReactNode;
}

const contextDefaultValues: ToastContextState = {
  toasts: [],
  pushToast: () => {},
  popToast: () => {},
};

export const ToasterContext =
  createContext<ToastContextState>(contextDefaultValues);

const ToasterProvider: FC = ({ children }) => {
  const [toasts, setToast] = useState<ToastElement[]>(
    contextDefaultValues.toasts
  );

  const pushToast = (toast: ToastElement) =>
    setToast((toasts) => [...toasts, toast]);

  const popToast = () => {
    const tempToasts = [...toasts];
    tempToasts.pop();

    setToast(tempToasts);
  };

  return (
    <ToasterContext.Provider
      value={{
        toasts,
        pushToast,
        popToast,
      }}
    >
      {children}

      <div className={className}>
        {toasts.map((todo, i) => (
          <div className={`${className}__toast`} key={todo.id}>
            <div>{todo.description}</div>
          </div>
        ))}
      </div>
    </ToasterContext.Provider>
  );
};

export default ToasterProvider;

import { Context, createContext } from "react";
import {OpenDialogType} from "./DialogTypes";

const defaultDialogContextValue: OpenDialogType = {
  okCallback: () => {},
  cancelCallback: () => {},
  onOpen: () => {},
  onClose: () => {},
};

export const DialogContext: Context<OpenDialogType> = createContext(
  defaultDialogContextValue
);


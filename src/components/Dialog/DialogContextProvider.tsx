import React, { useState } from "react";
import Button from "../Button";
import Dialog, { DialogTitle, DialogContent, DialogActions } from "./Dialog";
import { DialogContext } from "./DialogContext";
import { DialogProps } from "./DialogTypes";

const DialogProvider = ({ ...props }) => {
  const [dialogs, setDialogs] = useState<DialogProps[]>([]);

  const onOpen = (dialogData: DialogProps) => {
    setDialogs([...dialogs, dialogData]);
  };

  const onClose = () => {};

  const okCallback = () => {};

  const cancelCallback = (index: number) => {
    console.log(index);
    const currentDialogs = [...dialogs];
    currentDialogs.splice(index, 1);
    setDialogs([...currentDialogs]);
  };

  return (
    <DialogContext.Provider value={{ okCallback, onOpen, onClose }}>
      {props.children}

      {dialogs.map((dialog, index) => (
        <Dialog maxWidth={dialog.size} key={index}>
          {<DialogTitle>{dialog.title}</DialogTitle>}
          <DialogContent>{dialog.component}</DialogContent>
          <DialogActions>
            <Button
              onClick={() => cancelCallback(index)}
              backgroundType="muted"
              buttonStyle="outlined"
              label="Cancel"
            ></Button>
            <Button
              onClick={okCallback}
              backgroundType="success"
              label="Ok"
            ></Button>
          </DialogActions>
        </Dialog>
      ))}
    </DialogContext.Provider>
  );
};

export default DialogProvider;

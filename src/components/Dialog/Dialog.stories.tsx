import React, { useContext } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DialogProvider from "./DialogContextProvider";
import {DialogContext} from "./DialogContext";
import { DialogProps } from "./DialogTypes";

export default {
  title: "LawToolBox/Dialog",
  component: DialogProvider,
  argTypes: {},
} as ComponentMeta<typeof DialogProvider>;

const Buttons = () => {
  const { onOpen } = useContext(DialogContext);
    const dialog: DialogProps  = {
        title: "Delete",
        component: <div>Hello i am dialog body</div>
    }
  return (
    <div>
      <button onClick={() => onOpen(dialog)}>Primary toast</button>
    </div>
  );
};

const Template: ComponentStory<typeof DialogProvider> = () => {
  return (
    <DialogProvider>
      <Buttons></Buttons>
    </DialogProvider>
  );
};

export const Primary = Template.bind({});
// Primary.args = {
// };

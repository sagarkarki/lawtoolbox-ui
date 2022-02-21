import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DialogProvider, useDialog } from "./index";
import Dialog from "./Dialog";

export default {
  title: "LawToolBox/Dialog",
  component: DialogProvider,
  argTypes: {},
} as ComponentMeta<typeof DialogProvider>;

const Buttons = () => {
  const dialog = useDialog({
    ok: "ok",
    cancel: "cancel",
  });

  const Body = () => {
    return <div>hello i am athe body</div>;
  };

  function handleClick() {
    dialog({ title: "Warning!", content: <Body></Body> })
      .then(console.log)
      .catch(console.error);
  }

  return <button onClick={handleClick}>click here</button>;
};

const Template: ComponentStory<typeof DialogProvider> = () => {
  return (
    <DialogProvider Component={({ ...props }) => <Dialog {...props} />}>
      <Buttons></Buttons>
    </DialogProvider>
  );
};

export const Primary = Template.bind({});

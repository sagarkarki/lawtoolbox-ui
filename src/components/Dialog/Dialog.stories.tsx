import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DialogProvider, useDialog } from "./index";
import Dialog from "./Dialog";
import LtbImage from "../Images/Images";

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
    return <div>Are you sure you want to delete this content?<br/> Once deleted it can't be recovered.</div>;
  };
  const Image = () => {
    return <LtbImage image="delete"></LtbImage>;
  };

  function handleClickWithIcon() {
    dialog({ title: "Delete!", content: <Body></Body>, image: <Image></Image> })
      .then(console.log)
      .catch(console.error);
  }

  function handleClickWithoutIcon() {
    dialog({ title: "Delete!", content: <Body></Body> })
      .then(console.log)
      .catch(console.error);
  }

  return <div>
    <button onClick={handleClickWithIcon}>Dialog with image</button>
    <button onClick={handleClickWithoutIcon}>Dialog without image</button>

  </div>;
};

const Template: ComponentStory<typeof DialogProvider> = () => {
  return (
    <DialogProvider Component={({ ...props }) => <Dialog {...props} />}>
      <Buttons></Buttons>
    </DialogProvider>
  );
};

export const Primary = Template.bind({});

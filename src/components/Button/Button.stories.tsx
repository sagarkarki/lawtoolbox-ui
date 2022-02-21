import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import LtbIcon from "../Icons/Icons";


export default {
  title: "LawToolBox/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
      description: "Controls size of the button component",
      defaultValue: "medium",
    },
    iconPosition: {
      options: ["left", "right"],
      control: { type: "select" },
      description: "Sets button icon on either let or right of the label text",
      defaultValue: "left",
    },
    isLoading: {
      options: [false, true],
      control: { type: "radio" },
      defaultValue: false,
      description:
        "Enables loader and also disables the button when loader is e",
    },
    isDisabled: {
      options: [false, true],
      control: { type: "radio" },
      defaultValue: false,
      description: "Disables the button",
    },
    backgroundType: {
      options: ["primary", "success", "danger", "warning", "muted"],
      control: { type: "select" },
      description: "Sets button background type from predefined types",
      defaultValue: "primary",
    },
    buttonStyle: {
      options: ["default", "outlined"],
      control: { type: "select" },
      description: "Sets button style type",
      defaultValue: "default",
    },
    onClick: { action: "clicked", description: "Button on click event" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{<LtbIcon icon="error"></LtbIcon>}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  label: "",
};

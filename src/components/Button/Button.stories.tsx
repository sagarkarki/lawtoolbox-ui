import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faCoffee} />

export default {
  title: "LawToolBox/Button",
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      description: "Controls size of the button component",
      defaultValue: "medium",
    },
    iconPosition: {
      options: ["left", "right"],
      control: {type: "select"},
      description: "Sets button icon on either let or right of the label text",
      defaultValue: "left"
    },
    isLoading: {
      options: [false, true],
      control: { type: 'radio' },
      defaultValue: false,
      description: "Enables loader and also disables the button when loader is e",
    },
    isDisabled : {
      options: [false, true],
      control: { type: 'radio' },
      defaultValue: false,
      description: "Disables the button",
    },
    backgroundType: {
      options: ["primary", "success", "danger", "warning", "muted"],
      control: {type: "select"},
      description: "Sets button background type from predefined types",
      defaultValue: "primary"
    },
    buttonStyle: {
      options: ["default", "outlined"],
      control: {type: "select"},
      description: "Sets button style type",
      defaultValue: "default"
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} >{element}</Button>;

export const Primary = Template.bind({});
Primary.args = {
 label: "",
};
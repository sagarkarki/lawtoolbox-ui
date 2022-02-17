import React, { useContext } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ToasterProvider, ToasterContext } from "./Toaster";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { ToastElement } from "./Toaster.types";

const element = <FontAwesomeIcon icon={faCoffee} />;

export default {
  title: "LawToolBox/Toaster",
  component: ToasterProvider,
  argTypes: {},
} as ComponentMeta<typeof ToasterProvider>;

function getToast(): ToastElement {
  return {
    id: Date.now(),
    title: "Success",
    description: "You have created a new case.",
    type: "primary",
    children: element,
  };
}

const Template: ComponentStory<typeof ToasterProvider> = () => {
  const { toasts, pushToast, popToast, dark, toggleDark } = useContext(ToasterContext);

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(toasts);
    toggleDark;
    popToast
  };
  return (
    <ToasterProvider>
      <Button
        onClick={handleOnClick}
        label="add toast"
      ></Button>
    </ToasterProvider>
  );
};

export const Primary = Template.bind({});
// Primary.args = {
// };

import React, { useContext } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ToasterProvider, { ToasterContext } from "./Toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { ToastElement } from "./Toast.types";

const element = <FontAwesomeIcon icon={faCoffee} />;

export default {
  title: "LawToolBox/Toaster",
  component: ToasterProvider,
  argTypes: {},
} as ComponentMeta<typeof ToasterProvider>;

const Todos = () => {
  const { toasts, pushToast, popToast } = useContext(ToasterContext);
  const toast: ToastElement = {
    id: Date.now(),
    title: "Success",
    description: "You have created a new case.",
    type: "primary",
    children: element,
  };
  return (
    <button onClick={() => pushToast(toast)}>add todo</button>
  );
};

const Template: ComponentStory<typeof ToasterProvider> = () => {
  return (
    <ToasterProvider>
      <Todos></Todos>
    </ToasterProvider>
  );
};

export const Primary = Template.bind({});
// Primary.args = {
// };

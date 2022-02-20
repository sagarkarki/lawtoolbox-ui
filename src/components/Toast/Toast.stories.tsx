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
  const { pushToast } = useContext(ToasterContext);

  function getToast(
    title?: string,
    type?: "primary" | "success" | "danger" | "warning" | "loader"
  ): ToastElement {
    const toast: ToastElement = {
      title: title ?? "Primary",
      description: "You have created a new toast.",
      type: type ?? "primary",
      // children: element,
    };
    return toast;
  }
  return (
    <div>
      <button onClick={() => pushToast(getToast())}>Primary toast</button>
      <button onClick={() => pushToast(getToast("Success", "success"))}>
        Success toast
      </button>
      <button onClick={() => pushToast(getToast("Danger", "danger"))}>
        Danger toast
      </button>
      <button onClick={() => pushToast(getToast("Warning", "warning"))}>
        Warning toast
      </button>
      <button onClick={() => pushToast(getToast("Loadergj", "loader"))}>
        Loader toast
      </button>
    </div>
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

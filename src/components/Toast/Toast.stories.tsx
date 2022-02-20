import React, { useContext } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ToasterProvider, { ToasterContext } from "./Toast";
import { ToastElement } from "./Toast.types";

export default {
  title: "LawToolBox/Toaster",
  component: ToasterProvider,
  argTypes: {},
} as ComponentMeta<typeof ToasterProvider>;

const Buttons = () => {
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
      <Buttons></Buttons>
    </ToasterProvider>
  );
};

export const Primary = Template.bind({});
// Primary.args = {
// };

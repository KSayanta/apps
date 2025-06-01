import Toast from "./";

export default {
  title: "Components/Toast",
  tags: ["autodocs"],
  component: Toast,
  subcomponents: { ToastTitle: Toast.Title, ToastBody: Toast.Body },
  parameters: { layout: "padded" },
  argTypes: {
    status: {
      control: "select",
      options: ["success", "warning", "update", "error"],
    },
  },

  render: args => {
    const { status, title, body } = args;
    return (
      <Toast status={status} style={{ position: "relative" }}>
        <Toast.Title>{title}</Toast.Title>
        <Toast.Body>{body}</Toast.Body>
      </Toast>
    );
  },
};

export const Success = {
  args: {
    status: "success",
    title: "Success",
    body: "Payment has been processed!",
  },
};

export const Warning = {
  args: {
    status: "warning",
    title: "Warning",
    body: "Unsaved work!",
  },
};

export const Update = {
  args: {
    status: "update",
    title: "New Message",
    body: "Payment has been processed!",
  },
};

export const Error = {
  args: {
    status: "error",
    title: "Error",
    body: "Payment has been cancelled.",
  },
};

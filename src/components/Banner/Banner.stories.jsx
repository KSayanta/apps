import Banner from "./";

export default {
  title: "Components/Banner",
  tags: ["autodocs"],
  component: Banner,
  subcomponents: { BannerTitle: Banner.Title, BannerBody: Banner.Body },
  argTypes: {
    status: {
      control: "select",
      options: ["success", "warning", "update", "error"],
    },
  },
  render: args => {
    const { status, title, body } = args;
    return (
      <Banner status={status}>
        <Banner.Title>{title}</Banner.Title>
        <Banner.Body>{body}</Banner.Body>
      </Banner>
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

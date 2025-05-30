import Badge from "./Badge";

export default {
  title: "Components/Badge",
  tags: ["autodocs"],
  component: Badge,
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: {
        type: "number",
        min: 0,
        max: 7,
      },
      table: {
        type: { summary: "number" },
      },
    },
    rounded: {
      type: "boolean",
      table: {
        type: { summary: "boolean" },
      },
    },
  },
};

const render = args => (
  <Badge rounded={args.rounded} variant={args.variant}>
    {args.body}
  </Badge>
);

export const Default = {
  args: {
    body: "Badge",
    variant: 0,
    rounded: false,
  },
  render: render,
};

export const Red = {
  args: {
    body: "Red Badge",
    variant: 1,
    rounded: false,
  },
  render: render,
};

export const Yellow = {
  args: {
    body: "Yellow Badge",
    variant: 2,
    rounded: false
  },
  render: render,
};

export const Green = {
  args: {
    body: "Green Badge",
    variant: 3,
    rounded: false
  },
  render: render,
};

export const Blue = {
  args: {
    body: "Blue Badge",
    variant: 4,
    rounded: false
  },
  render: render,
};

export const Indigo = {
  args: {
    body: "Indigo Badge",
    variant: 5,
    rounded: false
  },
  render: render,
};

export const Purple = {
  args: {
    body: "Purple Badge",
    variant: 6,
    rounded: false
  },
  render: render,
};

export const Pink = {
  args: {
    body: "Pink Badge",
    variant: 7,
    rounded: false
  },
  render: render,
};

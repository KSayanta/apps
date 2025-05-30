import React from "react";
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
      table: {
        type: { summary: "boolean" },
      },
    },
  },
};

export const Default = {
  args: {
    body: "Badge",
    variant: 0,
    rounded: false,
  },
  render: args => (
    <Badge rounded={args.rounded} variant={args.variant}>
      {args.body}
    </Badge>
  ),
};

export const Red = {
  args: {
    body: "Red Badge",
    variant: 1,
  },
  render: args => <Badge variant={args.variant}>{args.body}</Badge>,
};

export const Yellow = {
  args: {
    body: "Yellow Badge",
    variant: 2,
  },
  render: args => <Badge variant={args.variant}>{args.body}</Badge>,
};

export const Green = {
  args: {
    body: "Green Badge",
    variant: 3,
  },
  render: args => <Badge variant={args.variant}>{args.body}</Badge>,
};

export const Blue = {
  args: {
    body: "Blue Badge",
    variant: 4,
  },
  render: args => <Badge variant={args.variant}>{args.body}</Badge>,
};

export const Indigo = {
  args: {
    body: "Indigo Badge",
    variant: 5,
  },
  render: args => <Badge variant={args.variant}>{args.body}</Badge>,
};

export const Purple = {
  args: {
    body: "Purple Badge",
    variant: 6,
  },
  render: args => <Badge variant={args.variant}>{args.body}</Badge>,
};

export const Pink = {
  args: {
    body: "Pink Badge",
    variant: 7,
  },
  render: args => <Badge variant={args.variant}>{args.body}</Badge>,
};

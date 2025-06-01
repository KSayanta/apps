import Tooltip from "./";

export default {
  title: "Components/Tooltip",
  tags: ["autodocs"],
  component: Tooltip,
  subcomponents: {
    TooltipIcon: Tooltip.Icon,
    TooltipTitle: Tooltip.Title,
    TooltipBody: Tooltip.Body,
  },
  parameters: { layout: "padded" },

  argTypes: {
    color: {
      control: "select",
      options: ["dark", "blue", "purple", "green"],
      table: { type: { summary: "string" } },
    },
    mode: {
      control: "select",
      options: [null, "inverted"],
      table: { type: { summary: "string" } },
    },
    basePosition: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 10,
      },
      table: { type: { summary: "number" } },
    },
    onClose: {
      control: false,
      table: { type: { summary: "function" } },
    },
  },

  render: args => {
    const { title, body } = args;
    return (
      <Tooltip {...args}>
        <Tooltip.Icon />
        <Tooltip.Title>{title}</Tooltip.Title>
        <Tooltip.Body>{body}</Tooltip.Body>
      </Tooltip>
    );
  },
};

export const Default = {
  args: {
    mode: null,
    basePosition: 30,
    color: "blue",
    title: "Update available!",
    body: "You have pending updates.",
  },
};

import Card from "./";

const meta = {
  title: "Components/Card",
  tags: ["autodocs"],
  component: Card,
  argTypes: {
    icon: {
      control: false,
      table: {
        type: { summary: "jsx | svg" },
      },
    },
    hasLink: { control: "boolean" },
    href: { control: false, if: { arg: "hasLink" } },
    label: { control: false, if: { arg: "hasLink" } },
  },

  render: args => {
    const { title, body, hasLink } = args;
    return (
      <Card>
        <Card.Icon />
        <Card.Title>{title}</Card.Title>
        <Card.Body>{body}</Card.Body>
        {hasLink ? <Card.Link href="#">Link description.</Card.Link> : null}
      </Card>
    );
  },
};

export default meta;

export const Default = {
  args: {
    title: "Fast Upload",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    hasLink: false,
    href: "",
    label: "",
  },
};


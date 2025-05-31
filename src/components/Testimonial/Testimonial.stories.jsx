import Testimonial from "./";

const meta = {
  title: "Components/Testimonial",
  tags: ["autodocs"],
  component: Testimonial,

  subcomponents: {
    TestimonialLogo: Testimonial.Logo,
    TestimonialImage: Testimonial.Image,
    TestimonialBody: Testimonial.Body,
    TestimonialAuthor: Testimonial.Author,
    TestimonialDesignation: Testimonial.Designation,
    TestimonialFooter: Testimonial.Footer,
    TestimonialSource: Testimonial.Source,
  },

  argTypes: {
    hasImg: { control: "boolean" },
    imgPosition: {
      if: { arg: "hasImg", truthy: true },
      control: "select",
      options: ["left", "right"],
      table: { type: { summary: "string" } },
    },

    logo: {
      if: { arg: "hasImg", truthy: false },
      control: false,
      table: { type: { summary: "jsx | svg" } },
    },
  },

  args: {
    logo: "🗓️ LOGO",
  },
};

export default meta;

export const Default = {
  args: {
    hasImg: false,
    imgPosition: "left",
  },

  render: args => {
    const { imgPosition, hasImg, logo } = args;
    return (
      <Testimonial imgPosition={imgPosition}>
        {hasImg ? (
          <Testimonial.Image />
        ) : (
          <Testimonial.Logo>{logo}</Testimonial.Logo>
        )}

        <Testimonial.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
          molestiae?
        </Testimonial.Body>

        <Testimonial.Footer>
          <Testimonial.Author>Jane Doe</Testimonial.Author>
          <Testimonial.Designation>Writer</Testimonial.Designation>
        </Testimonial.Footer>
      </Testimonial>
    );
  },
};

export const WithoutImage = {
  render: args => {
    const { logo } = args;

    return (
      <Testimonial>
        <Testimonial.Logo>{logo}</Testimonial.Logo>
        <Testimonial.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
          molestiae?
        </Testimonial.Body>

        <Testimonial.Footer>
          <Testimonial.Author>Jane Doe</Testimonial.Author>
          <Testimonial.Designation>Writer</Testimonial.Designation>
        </Testimonial.Footer>
      </Testimonial>
    );
  },
};

export const WithImage = {
  render: () => {
    return (
      <Testimonial>
        <Testimonial.Image />

        <Testimonial.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
          molestiae?
        </Testimonial.Body>

        <Testimonial.Footer>
          <Testimonial.Author>Jane Doe</Testimonial.Author>
          <Testimonial.Designation>Writer</Testimonial.Designation>
        </Testimonial.Footer>
      </Testimonial>
    );
  },
};


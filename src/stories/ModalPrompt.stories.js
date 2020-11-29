import React from "react";
import "../build.css";

import ModalPrompt from "../components/ModalPrompt";

export default {
  title: "Components/ModalPrompt",
  component: ModalPrompt,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ModalPrompt {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  isOpen: true,
  label: "ModalPrompt",
  title: "Example Title Text",
};
// SectionDua.stories.ts|tsx

import React from "react";

import { ComponentMeta } from "@storybook/react";

import SectionDua from "../../../components/moleculs/Section-2";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/SectionDua/Example",
  component: SectionDua,
} as ComponentMeta<typeof SectionDua>;

export const Default = (args: any) => <SectionDua {...args} />;
Default.args = {
  content: {
    preheading: "BETTER CAREER",
    heading: "Prepare The Journey",
    paragraph:
      "We do really care to our students’ future career\
so it would be good if you are taking a quick interview",
  },
  image: "/images/image-2.jpg",
  title: "image",
};

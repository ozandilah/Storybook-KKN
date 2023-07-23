// FeaturedMenuItem.stories.ts|tsx

import React from "react";

import { ComponentMeta } from "@storybook/react";
import Desa from "../../../assets/images/desa.jpg";
import FeaturedMenuItem from "../../../components/moleculs/FeaturedMenuItem";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/FeaturedMenuItem/Example",
  component: FeaturedMenuItem,
} as ComponentMeta<typeof FeaturedMenuItem>;

export const Default = (args: any) => <FeaturedMenuItem {...args} />;
Default.args = {
  title: "Potensi Desa",
  image: Desa,
  preimage: "image",
};

// FeaturedMenuDua.stories.ts|tsx

import React from "react";

import { ComponentMeta } from "@storybook/react";
import Desa from "../../../assets/images/desa.jpg";
import FeaturedMenuDua from "../../../components/moleculs/FeaturedMenudua";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/FeaturedMenuDua/Example",
  component: FeaturedMenuDua,
} as ComponentMeta<typeof FeaturedMenuDua>;

export const Default = (args: any) => <FeaturedMenuDua {...args} />;
Default.args = {
  title: "Potensi Desa",
  image: Desa,
  preimage: "image",
};

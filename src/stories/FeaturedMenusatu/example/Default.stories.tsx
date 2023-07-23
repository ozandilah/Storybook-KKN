// FeaturedMenuSatu.stories.ts|tsx

import React from "react";

import { ComponentMeta } from "@storybook/react";
import Desa from "../../../assets/images/desa.jpg";
import FeaturedMenuSatu from "../../../components/moleculs/FeaturedMenusatu";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/FeaturedMenuSatu/Example",
  component: FeaturedMenuSatu,
} as ComponentMeta<typeof FeaturedMenuSatu>;

export const Default = (args: any) => <FeaturedMenuSatu {...args} />;
Default.args = {
  title: "Potensi Desa",
  image: Desa,
  preimage: "image",
};

// YoutubeThumb.stories.ts|tsx

import React from "react";

import { ComponentMeta } from "@storybook/react";

import YoutubeThumb from "../../../../components/atom/YoutubeThumb";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/YoutubeThumb/Example",
  component: YoutubeThumb,
} as ComponentMeta<typeof YoutubeThumb>;

export const URL = (args: any) => <YoutubeThumb {...args} />;
URL.args = {
  url: "https://www.youtube.com/watch?v=FNTEr_tGMes",
};

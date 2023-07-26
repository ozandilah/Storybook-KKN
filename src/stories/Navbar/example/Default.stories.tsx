// Navbar.stories.ts|tsx

import React from "react";

import { ComponentMeta } from "@storybook/react";

import Navbar from "../../../components/organism/Navbar";
import Button from "../../../components/atom/Button";
import Link from "../../../components/Link";
import mainBanner from "../../../assets/images/mainHeader.png";
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Navbar/Example",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const Default = (args: any) => (
  <Navbar {...args}>
    <Link href="/home">
      <a>Home</a>
    </Link>

    <Link href="/desa">
      <a>Desa</a>
    </Link>

    <Link href="/potensidesa">
      <a>Potensi Desa</a>
    </Link>

    <Link href="/pemerintahan">
      <a>Pemerintahan</a>
    </Link>
    <Link href="/kegiatan">
      <a>Kegiatan</a>
    </Link>
  </Navbar>
);

Default.args = {
  cta: (
    <>
      <Button state="secondary" className="relative px-8">
        <a>Sign In</a>
      </Button>
    </>
  ),
  pathname: "/desa",

  className: { active: "text-yellow", idle: "text-black" },
  image: mainBanner,
  title: "main banner",
};

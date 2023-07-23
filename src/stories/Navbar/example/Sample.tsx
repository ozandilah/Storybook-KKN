import React from "react";
import Navbar from "../../../components/organism/Navbar";
import Button from "../../../components/atom/Button";
import Link from "../../../components/Link";
function Sample() {
  return (
    <Navbar
      cta={
        <>
          <Button state="secondary" className="relative px-8">
            <a>Sign In</a>
          </Button>
        </>
      }
      pathname="/home"
      className={{ active: "text-yellow", idle: "text-black" }}
    >
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
}

export default Sample;

"use client";

import React from "react";
import { FacebookIcon, FacebookShareButton } from "react-share";

const Cutton = () => {
  return (
    <div>
      button
      <FacebookShareButton
        url={"https://social-sharing-nextjs-check.vercel.app/newpage"}
      >
        <FacebookIcon size={32} round={true} style={{ color: "black" }} />
      </FacebookShareButton>
    </div>
  );
};

export default Cutton;

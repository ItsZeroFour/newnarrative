import Image from "next/image";
import React from "react";
import Link from "next/link";
import style from "./link.module.scss";

const CTALink = ({ href, text }) => {
  return (
    <Link className={style.link} href={href}>
      {text} <Image src="/icons/arrow.svg" width={24} height={24} alt="arrow" />
    </Link>
  );
};

export default CTALink;

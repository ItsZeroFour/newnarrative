import dynamic from "next/dynamic";

import React from "react";
import style from "./home.module.scss";
const Head = dynamic(() => import("@/components/home/head/Head"));
import Offer from "@/components/home/offer/Offer";
const Capabilities = dynamic(() =>
  import("@/components/home/capabilities/Capabilities")
);
import Clients from "@/components/home/clients/Clients";
const Cases = dynamic(() => import("@/components/home/cases/Cases"));
const Blog = dynamic(() => import("@/components/home/blog/Blog"));

const Home = () => {
  return (
    <div className={style.home}>
      <Head />
      <Offer />
      <Capabilities />
      <Clients />
      <Cases />
      <Blog />
    </div>
  );
};

export default Home;

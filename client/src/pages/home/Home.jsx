import React from "react";
import style from "./home.module.scss";
import Head from "@/components/home/head/Head";
import Offer from "@/components/home/offer/Offer";
import Capabilities from "@/components/home/capabilities/Capabilities";
import Clients from "@/components/home/clients/Clients";

const Home = () => {
  return (
    <div className={style.home}>
      <Head />
      <Offer />
      <Capabilities />
      <Clients />
    </div>
  );
};

export default Home;

import React from "react";
import style from "./offer.module.scss";
import Link from "next/link";
import Image from "next/image";
import ParticleEffect from "@/utils/ParticleEffect";

const Offer = () => {
  return (
    <section className={style.offer}>
      <div className="container">
        <div className={style.offer__wrapper}>
          <div className={style.offer__title}>
            <div className={style.offer__title__corners_left}></div>
            <h2>
              Превращаем игровые механики <br /> в{" "}
              <span>рабочий инструмент</span> бизнеса
            </h2>
            <div className={style.offer__title__corners_right}></div>
          </div>

          <Link href="/">
            Связаться с нами{" "}
            <Image src="/icons/arrow.svg" width={24} height={24} alt="arrow" />
          </Link>
        </div>
      </div>

      <ParticleEffect />
    </section>
  );
};

export default Offer;

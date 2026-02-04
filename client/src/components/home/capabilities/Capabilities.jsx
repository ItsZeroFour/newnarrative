"use client";

import React from "react";
import { motion } from "framer-motion";
import style from "./capabilities.module.scss";
import Image from "next/image";
import Link from "next/link";

const Capabilities = () => {
  return (
    <section className={style.capabilities}>
      <motion.div
        className={style.capabilities__title}
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        whileHover={{
          scale: 1,
          transition: { duration: 0 },
        }}
      >
        <h2>
          Что мы <span>умеем</span>
        </h2>
        <h2>
          Что мы <span>умеем</span>
        </h2>
        <h2>
          Что мы <span>умеем</span>
        </h2>
        <h2>
          Что мы <span>умеем</span>
        </h2>
      </motion.div>

      <div className="container">
        <div className={style.capabilities__wrapper}>
          <div className={style.capabilities__skills}>
            <div className={style.capabilities__skills__header}>
              <p>New Narrative: скиллы</p>

              <div className={style.capabilities__skills__header__nav}>
                <div className={style.capabilities__skills__header__nav__item}>
                  <Image
                    src="/icons/capabilities/dash.svg"
                    width={14}
                    height={2}
                    alt="dash"
                  />
                </div>

                <div className={style.capabilities__skills__header__nav__item}>
                  <Image
                    src="/icons/capabilities/window.svg"
                    width={14}
                    height={14}
                    alt="dash"
                  />
                </div>

                <div className={style.capabilities__skills__header__nav__item}>
                  <Image
                    src="/icons/capabilities/close.svg"
                    width={14}
                    height={14}
                    alt="dash"
                  />
                </div>
              </div>
            </div>

            <div className={style.capabilities__skills__main}>
              <ul>
                <li>
                  <Image
                    src="/images/capabilities/specproject.svg"
                    alt="Спецпроекты для рекламных кампаний"
                    width={212}
                    height={166}
                  />
                  <p>
                    Спецпроекты для <br /> рекламных кампаний
                  </p>
                </li>

                <li>
                  <Image
                    src="/images/capabilities/mini-games.svg"
                    alt="Мини-игры с интеграцией в CRM "
                    width={212}
                    height={166}
                  />
                  <p>
                    Мини-игры <br /> с интеграцией в CRM{" "}
                  </p>
                </li>

                <li>
                  <Image
                    src="/images/capabilities/gamefications.svg"
                    alt="Геймификация образовательных курсов"
                    width={212}
                    height={166}
                  />
                  <p>
                    Геймификация <br /> образовательных курсов
                  </p>
                </li>

                <li>
                  <Image
                    src="/images/capabilities/interactive.svg"
                    alt="Спецпроекты для рекламных кампаний"
                    width={212}
                    height={166}
                  />
                  <p>
                    Интерактивные решения <br /> для мероприятий
                  </p>
                </li>

                <li>
                  <Image
                    src="/images/capabilities/neyro.svg"
                    alt="Мини-игры с интеграцией в CRM "
                    width={212}
                    height={166}
                  />
                  <p>Проекты с нейросетями</p>
                </li>

                <li>
                  <Image
                    src="/images/capabilities/miniapp.svg"
                    alt="Геймификация образовательных курсов"
                    width={212}
                    height={166}
                  />
                  <p>
                    TG Mini App и VK <br /> Приложения
                  </p>
                </li>
              </ul>

              <div className={style.capabilities__skills__link}>
                <Link href="/">
                  Наши кейсы{" "}
                  <Image
                    src="/icons/arrow.svg"
                    width={24}
                    height={24}
                    alt="arrow"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;

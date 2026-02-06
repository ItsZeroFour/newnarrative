"use client";

import React, { useRef } from "react";
import style from "./cases.module.scss";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { casesItemsVariants, casesItemVariants } from "@/animations/cases";
import Link from "next/link";

function Cases() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className={style.cases}>
      <motion.div
        className={style.cases__title}
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
          Наши <span>кейсы</span>
        </h2>
        <h2>
          Наши <span>кейсы</span>
        </h2>
        <h2>
          Наши <span>кейсы</span>
        </h2>
        <h2>
          Наши <span>кейсы</span>
        </h2>
      </motion.div>

      <div className="container">
        <div className={style.cases__wrapper}>
          <motion.div
            ref={ref}
            className={style.cases__items}
            variants={casesItemsVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className={style.cases__item}
              variants={casesItemVariants}
            >
              <div className={style.cases__item__wrapper}>
                <div className={style.cases__item__header}>
                  <p>Fonbet</p>
                  <div className={style.cases__item__head__close}>
                    <Image
                      src="/icons/cases/close.svg"
                      width={16}
                      height={16}
                      alt="close"
                    />
                  </div>
                </div>

                <Image
                  src="/images/cases/case-1.png"
                  width={795}
                  height={445}
                  alt="case fonbet"
                />
              </div>

              <p>Властелин игры: братство Fonbet · 2025</p>
            </motion.div>

            <motion.div
              className={style.cases__item}
              variants={casesItemVariants}
            >
              <div className={style.cases__item__wrapper}>
                <div className={style.cases__item__header}>
                  <p>Fonbet</p>
                  <div className={style.cases__item__head__close}>
                    <Image
                      src="/icons/cases/close.svg"
                      width={16}
                      height={16}
                      alt="close"
                    />
                  </div>
                </div>

                <Image
                  src="/images/cases/case-1.png"
                  width={435}
                  height={225}
                  alt="case fonbet"
                />
              </div>

              <p>Властелин игры: братство Fonbet · 2025</p>
            </motion.div>

            <motion.div
              className={style.cases__item}
              variants={casesItemVariants}
            >
              <div className={style.cases__item__wrapper}>
                <div className={style.cases__item__header}>
                  <p>Fonbet</p>
                  <div className={style.cases__item__head__close}>
                    <Image
                      src="/icons/cases/close.svg"
                      width={16}
                      height={16}
                      alt="close"
                    />
                  </div>
                </div>

                <Image
                  src="/images/cases/case-1.png"
                  width={435}
                  height={225}
                  alt="case fonbet"
                />
              </div>

              <p>Властелин игры: братство Fonbet · 2025</p>
            </motion.div>

            <motion.div
              className={style.cases__item}
              variants={casesItemVariants}
            >
              <div className={style.cases__item__wrapper}>
                <div className={style.cases__item__header}>
                  <p>Fonbet</p>
                  <div className={style.cases__item__head__close}>
                    <Image
                      src="/icons/cases/close.svg"
                      width={16}
                      height={16}
                      alt="close"
                    />
                  </div>
                </div>

                <Image
                  src="/images/cases/case-1.png"
                  width={795}
                  height={445}
                  alt="case fonbet"
                />
              </div>

              <p>Властелин игры: братство Fonbet · 2025</p>
            </motion.div>
          </motion.div>

          <div className={style.cases__link}>
            <Link href="/">
              Смотреть все кейсы{" "}
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
    </section>
  );
}

export default Cases;

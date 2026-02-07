"use client";

import React, { useRef } from "react";
import style from "./offer.module.scss";
import Link from "next/link";
import Image from "next/image";
import ParticleEffect from "@/utils/ParticleEffect";
import {
  typingAnimation,
  typingSpeed,
  lineDelays,
  observerOptions,
} from "@/animations/offer";
import { motion, useInView } from "framer-motion";
import { useScreenWidth } from "@/hooks/useScreenWidth";

const Offer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, observerOptions);
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth <= 650;

  const line1 = "Превращаем игровые механики";
  const line2 = "в ";
  const highlightWrapped = "рабочий инструмент";
  const highlightRest = " бизнеса";

  const renderStaticText = () => (
    <>
      {line1}
      <br />
      {line2}
      <em>{highlightWrapped}</em>
      {highlightRest}
    </>
  );

  const renderAnimatedText = () => (
    <>
      {[...line1].map((char, index) => (
        <motion.span
          key={`line1-${index}`}
          custom={index}
          variants={typingAnimation}
          initial="hidden"
          animate="visible"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <br />
      {[...line2].map((char, index) => (
        <motion.span
          key={`line2-${index}`}
          custom={line1.length + index}
          variants={typingAnimation}
          initial="hidden"
          animate="visible"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay:
            (line1.length + line2.length) * typingSpeed.default +
            lineDelays.beforeHighlight,
        }}
      >
        <span>
          {[...highlightWrapped].map((char, index) => (
            <motion.em
              key={`wrapped-${index}`}
              custom={line1.length + line2.length + 5 + index}
              variants={typingAnimation}
              initial="hidden"
              animate="visible"
            >
              {char === " " ? "\u00A0" : char}
            </motion.em>
          ))}
        </span>
        {[...highlightRest].map((char, index) => (
          <motion.span
            key={`rest-${index}`}
            custom={
              line1.length + line2.length + 5 + highlightWrapped.length + index
            }
            variants={typingAnimation}
            initial="hidden"
            animate="visible"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </>
  );

  return (
    <section className={style.offer}>
      <div className="container">
        <div className={style.offer__wrapper}>
          <div className={style.offer__title}>
            <div className={style.offer__title__corners_left}></div>
            {!isMobile ? (
              <motion.h2
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
              >
                {isInView &&
                  (isMobile ? renderStaticText() : renderAnimatedText())}
              </motion.h2>
            ) : (
              <h2>
                Превращаем игровые механики в <em>рабочий инструмент</em>{" "}
                бизнеса
              </h2>
            )}
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

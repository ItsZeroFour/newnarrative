"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import style from "./capabilities.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import SlideIcon from "@/components/slide_icon/SlideIcon";

const SkillItem = ({ image, alt, textLines }) => (
  <>
    <Image
      src={image}
      alt={alt}
      width={212}
      height={166}
      quality={75}
      style={{ objectFit: "contain" }}
    />
    <p>
      {textLines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < textLines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  </>
);

const Capabilities = () => {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth <= 820;
  const swiperRef = useRef(null);

  const skills = [
    {
      image: "/images/capabilities/specproject.svg",
      alt: "Спецпроекты для рекламных кампаний",
      textLines: ["Спецпроекты для", "рекламных кампаний"],
    },
    {
      image: "/images/capabilities/mini-games.svg",
      alt: "Мини-игры с интеграцией в CRM",
      textLines: ["Мини-игры", "с интеграцией в CRM"],
    },
    {
      image: "/images/capabilities/gamefications.svg",
      alt: "Геймификация образовательных курсов",
      textLines: ["Геймификация", "образовательных курсов"],
    },
    {
      image: "/images/capabilities/interactive.svg",
      alt: "Интерактивные решения для мероприятий",
      textLines: ["Интерактивные решения", "для мероприятий"],
    },
    {
      image: "/images/capabilities/neyro.svg",
      alt: "Проекты с нейросетями",
      textLines: ["Проекты с нейросетями"],
    },
    {
      image: "/images/capabilities/miniapp.svg",
      alt: "TG Mini App и VK Приложения",
      textLines: ["TG Mini App и VK", "Приложения"],
    },
  ];

  const swiperParams = {
    modules: [Pagination],
    spaceBetween: 20,
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    autoHeight: true,
    watchOverflow: true,
    touchRatio: 1,
    resistanceRatio: 0.85,
    centeredSlides: false,
    onSwiper: (swiper) => {
      swiperRef.current = swiper;
    },
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

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
                    alt="window"
                  />
                </div>

                <div className={style.capabilities__skills__header__nav__item}>
                  <Image
                    src="/icons/capabilities/close.svg"
                    width={14}
                    height={14}
                    alt="close"
                  />
                </div>
              </div>
            </div>

            <div className={style.capabilities__skills__main}>
              {isMobile ? (
                <React.Fragment>
                  <Swiper {...swiperParams} className={style.skillsSlider}>
                    {skills.map((skill, index) => (
                      <SwiperSlide key={index} className={style.skillsSlide}>
                        <SkillItem {...skill} />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className={style.capabilities__navigation}>
                    <button
                      className={style.capabilities__navigation__prev}
                      onClick={handlePrev}
                      aria-label="Предыдущий слайд"
                    >
                      <SlideIcon />
                    </button>
                    <button
                      className={style.capabilities__navigation__next}
                      onClick={handleNext}
                      aria-label="Следующий слайд"
                    >
                      <SlideIcon />
                    </button>
                  </div>
                </React.Fragment>
              ) : (
                <ul>
                  {skills.map((skill, index) => (
                    <li key={index}>
                      <SkillItem {...skill} />
                    </li>
                  ))}
                </ul>
              )}

              <div className={style.capabilities__skills__link}>
                <Link href="/cases">
                  Наши кейсы{" "}
                  <Image
                    src="/icons/arrow.svg"
                    width={24}
                    height={24}
                    alt="arrow"
                    aria-hidden="true"
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

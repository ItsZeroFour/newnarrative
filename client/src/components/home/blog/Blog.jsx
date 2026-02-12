"use client";

import React, { useRef, useMemo } from "react";
import style from "./blog.module.scss";
import SlideIcon from "@/components/slide_icon/SlideIcon";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ParticleEffect from "@/utils/ParticleEffect";

const BlogCard = ({ post }) => {
  return (
    <article className={style.blog__item}>
      <div className={style.blog__item__header}>
        <time>{post.date}</time>

        <div className={style.blog__item__close}>
          <Image
            src="/icons/blog/close.svg"
            width={16}
            height={16}
            alt="close"
            priority
          />
        </div>
      </div>

      <div className={style.blog__image__wrapper}>
        <Image
          src={post.image}
          width={385}
          height={215}
          alt={post.imageAlt || "Изображение статьи блога"}
          className={style.blog__image}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzg1IiBoZWlnaHQ9IjIxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PC9zdmc+"
        />
      </div>

      <p className={style.blog__text}>{post.text}</p>

      <Link href={post.link} className={style.blog__link}>
        Читать
      </Link>
    </article>
  );
};

const Blog = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const blogPosts = useMemo(
    () => [
      {
        id: 1,
        date: "14.05.26",
        isoDate: "2026-05-14",
        image: "/images/blog/blog-1.png",
        imageAlt: "Статья блога от 14 мая",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
        link: "/blog/1",
      },
      {
        id: 2,
        date: "29.05.26",
        isoDate: "2026-05-29",
        image: "/images/blog/blog-1.png",
        imageAlt: "Статья блога от 29 мая",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
        link: "/blog/2",
      },
      {
        id: 3,
        date: "17.05.26",
        isoDate: "2026-05-17",
        image: "/images/blog/blog-1.png",
        imageAlt: "Статья блога от 17 мая",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
        link: "/blog/3",
      },
      {
        id: 4,
        date: "24.05.26",
        isoDate: "2026-05-24",
        image: "/images/blog/blog-1.png",
        imageAlt: "Статья блога от 24 мая",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
        link: "/blog/4",
      },
      {
        id: 5,
        date: "30.05.26",
        isoDate: "2026-05-30",
        image: "/images/blog/blog-1.png",
        imageAlt: "Статья блога от 30 мая",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
        link: "/blog/5",
      },
      {
        id: 6,
        date: "11.05.26",
        isoDate: "2026-05-11",
        image: "/images/blog/blog-1.png",
        imageAlt: "Статья блога от 11 мая",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
        link: "/blog/6",
      },
    ],
    []
  );

  const swiperBreakpoints = useMemo(
    () => ({
      480: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2.2,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 2.6,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      1440: {
        slidesPerView: 3.2,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
    }),
    []
  );

  return (
    <section className={style.blog} aria-label="Блог">
      <div className="container">
        <div className={style.blog__wrapper}>
          <div className={style.blog__top}>
            <h2>Блог</h2>

            <div
              className={style.blog__navigation}
              role="group"
              aria-label="Навигация по слайдам"
            >
              <button
                ref={prevRef}
                className={style.blog__navigation__prev}
                aria-label="Предыдущий слайд"
                type="button"
                onTouchStart={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
              >
                <SlideIcon />
              </button>
              <button
                ref={nextRef}
                className={style.blog__navigation__next}
                aria-label="Следующий слайд"
                type="button"
                onTouchStart={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
              >
                <SlideIcon />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            breakpoints={swiperBreakpoints}
            onInit={(swiper) => {
              if (prevRef.current && nextRef.current) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            onResize={(swiper) => {
              if (swiper.navigation) swiper.navigation.update();
            }}
            className={style.blog__slider}
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id} className={style.blog__slide}>
                <BlogCard post={post} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <ParticleEffect />
    </section>
  );
};

export default Blog;

"use client";

import React, { useRef } from "react";
import style from "./blog.module.scss";
import SlideIcon from "@/components/slide_icon/SlideIcon";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ParticleEffect from "@/utils/ParticleEffect";

const Blog = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const blogPosts = [
    {
      id: 1,
      date: "14.05.26",
      image: "/images/blog/blog-1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      link: "/",
    },
    {
      id: 2,
      date: "29.05.26",
      image: "/images/blog/blog-1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      link: "/",
    },
    {
      id: 3,
      date: "17.05.26",
      image: "/images/blog/blog-1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      link: "/",
    },
    {
      id: 4,
      date: "24.05.26",
      image: "/images/blog/blog-1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      link: "/",
    },
    {
      id: 5,
      date: "30.05.26",
      image: "/images/blog/blog-1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      link: "/",
    },
    {
      id: 6,
      date: "11.05.26",
      image: "/images/blog/blog-1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      link: "/",
    },
  ];
  return (
    <section className={style.blog}>
      <div className="container">
        <div className={style.blog__wrapper}>
          <div className={style.blog__top}>
            <h2>Блог</h2>

            <div className={style.blog__navigation}>
              <button
                ref={prevRef}
                className={style.blog__navigation__prev}
                aria-label="Previous slide"
              >
                <SlideIcon />
              </button>
              <button
                ref={nextRef}
                className={style.blog__navigation__next}
                aria-label="Next slide"
              >
                <SlideIcon />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={15}
            slidesPerView="auto"
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              480: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 3.2,
                spaceBetween: 15,
              },
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className={style.blog__slider}
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id} className={style.blog__slide}>
                <div className={style.blog__item}>
                  <div className={style.blog__item__header}>
                    <p>{post.date}</p>

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
                      alt="blog img"
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
                </div>
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

"use client";

import React from "react";
import style from "./head.module.scss";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CTALink from "@/components/link/CTALink";

const Head = () => {
  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            NEW NARRATIVE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Реализовали 50+ проектов с геймификацией для команд маркетинга,
            продукта, HR, ивентов
          </motion.p>

          <CTALink href="/" text="Наши кейсы" />
        </div>
      </div>
    </section>
  );
};

export default Head;

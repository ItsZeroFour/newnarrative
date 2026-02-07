"use client";

import React, { useState } from "react";
import style from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header__wrapper}>
          <nav>
            <ul>
              <li>
                <Link href="/">Проекты</Link>
              </li>

              <li>
                <Link href="/">Услуги</Link>
              </li>

              <li>
                <Link href="/">Блог</Link>
              </li>

              <li>
                <Link href="/">Контакты</Link>
              </li>
            </ul>
          </nav>

          <button
            className={
              openMenu
                ? `${style.header__menu} ${style.active}`
                : style.header__menu
            }
            onClick={() => setOpenMenu(!openMenu)}
          ></button>

          {openMenu && (
            <div className={style.header__menu__list}>
              <nav>
                <ul>
                  <li>
                    <Link href="/" onClick={() => setOpenMenu(false)}>
                      <Image
                        src="/icons/header/home.svg"
                        width={24}
                        height={24}
                        alt="home"
                      />
                      Главная
                    </Link>
                  </li>

                  <li>
                    <Link href="/" onClick={() => setOpenMenu(false)}>
                      <Image
                        src="/icons/header/trophy.svg"
                        width={24}
                        height={24}
                        alt="trophy"
                      />
                      Проекты
                    </Link>
                  </li>

                  <li>
                    <Link href="/" onClick={() => setOpenMenu(false)}>
                      <Image
                        src="/icons/header/instruments.svg"
                        width={24}
                        height={24}
                        alt="instruments"
                      />
                      Услуги
                    </Link>
                  </li>

                  <li>
                    <Link href="/" onClick={() => setOpenMenu(false)}>
                      <Image
                        src="/icons/header/files.svg"
                        width={24}
                        height={24}
                        alt="files"
                      />
                      Блог
                    </Link>
                  </li>

                  <li>
                    <Link href="/" onClick={() => setOpenMenu(false)}>
                      <Image
                        src="/icons/header/phone.svg"
                        width={24}
                        height={24}
                        alt="phone"
                      />
                      Контакты
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

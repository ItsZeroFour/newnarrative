import React from "react";
import style from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__wrapper}>
          <div className={style.footer__top}>
            <div className={style.footer__top__left}>
              <p>[Контакты]</p>
              <h2>ГОТОВЫ ОБСУДИТЬ проект?</h2>
            </div>

            <Link href="/">
              <svg
                width="164"
                height="166"
                viewBox="0 0 164 166"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M131 1H163V33"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M131 165H163V133"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path d="M33 1H1V33" stroke="currentColor" stroke-width="2" />
                <path
                  d="M33 165H1V133"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M104.926 62.728L104.881 105.981L61.6276 106.026M101.88 102.981L58.0719 59.1723"
                  stroke="currentColor"
                  stroke-width="6.15"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                />
              </svg>
            </Link>
          </div>

          <div className={style.footer__copyright}>
            <Link className={style.footer__copyright__link} href="/">
              Работать с нами
              <Image
                src="/icons/arrow.svg"
                width={24}
                height={24}
                alt="arrow"
              />
            </Link>

            <div className={style.footer__lists}>
              <ul>
                <li>
                  <p>ИП Музалевский А.М.</p>
                </li>

                <li>
                  <Link href="/">Политика конфеденциальности</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <p>ИНН 34234234 </p>
                </li>

                <li>
                  <p>ОГРИНП 34234234</p>
                </li>
              </ul>

              <ul>
                <li>
                  <Link href="mailto:muzelawsky_games@gmail.com">
                    muzelawsky_games@gmail.com
                  </Link>
                </li>

                <li>
                  <Link href="tel:+79050880288">+79050880288</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

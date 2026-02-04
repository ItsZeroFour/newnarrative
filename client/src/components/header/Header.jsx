import React from "react";
import style from "./header.module.scss";
import Link from "next/link";

const Header = () => {
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
        </div>
      </div>
    </header>
  );
};

export default Header;

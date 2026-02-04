import React from "react";
import style from "./clients.module.scss";
import ParticleEffect from "@/utils/ParticleEffect";
import Link from "next/link";
import Image from "next/image";
import CTALink from "@/components/link/CTALink";

const Clients = () => {
  return (
    <section className={style.clients}>
      <ParticleEffect />

      <div className="container">
        <div className={style.clients__wrapper}>
          <div className={style.clients__list}>
            <div className={style.clients__list__top}>
              <h2>Наши клиенты</h2>

              <CTALink href="/" text="Стать нашим партнером" />
            </div>

            <ul>
              <li>
                <p>Макси</p>
                <Image
                  src="/images/clients/maxi.png"
                  alt="maxi"
                  width={280}
                  height={158}
                />
              </li>

              <li>
                <p>Макси</p>
                <Image
                  src="/images/clients/yandex.png"
                  alt="yandex"
                  width={280}
                  height={158}
                />
              </li>

              <li>
                <p>Макси</p>
                <Image
                  src="/images/clients/takayama.png"
                  alt="takayama"
                  width={280}
                  height={158}
                />
              </li>

              <li>
                <p>Макси</p>
                <Image
                  src="/images/clients/magnit.png"
                  alt="magnit"
                  width={280}
                  height={158}
                />
              </li>

              <li>
                <p>Макси</p>
                <Image
                  src="/images/clients/cordiant.png"
                  alt="cordiant"
                  width={280}
                  height={158}
                />
              </li>

              <li>
                <p>Макси</p>
                <Image
                  src="/images/clients/kinopoisk.png"
                  alt="kinopoisk"
                  width={280}
                  height={158}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

import React from "react";
import style from "./home.module.scss";

const Home = () => {
  return (
    <div className={style.home}>
      <div className="container">
        <div className={style.home__wrapper}>
          <h1>NEW NARRATIVE</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            tempora ipsa, debitis nobis minus recusandae soluta hic numquam
            suscipit cupiditate molestias eum. Odit neque omnis, ut aliquid vero
            illo sit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

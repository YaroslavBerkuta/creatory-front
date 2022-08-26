import React from "react";
import style from "../styles/Portfolio.module.scss";

export default function portfolio({data}) {
  return (
    <section className={style.portfolio}>
      <div className="container">
        <div className={style.section__title}>
          <h1>Портфоліо</h1>
          <p>Всі наші проекти ми робимо так, щоб ми могли ними пишатися</p>
        </div>
        <div className={style.portfolio__filter}>
          <div className={style.filter__item}>
            <p>Всі роботи</p>
          </div>
          <div className={style.filter__item}>
            <p>App design</p>
          </div>
          <div className={style.filter__item}>
            <p>Ui/Ux</p>
          </div>
          <div className={style.filter__item}>
            <p>Web</p>
          </div>
          <div className={style.filter__item}>
            <p>Logos</p>
          </div>
          <div className={style.filter__item}>
            <p>Corporate</p>
          </div>
          <div className={style.filter__item}>
            <p>E-Commerce</p>
          </div>
          <div className={style.filter__item}>
            <p>Illustrations</p>
          </div>
          <div className={style.filter__item}>
            <p>Branding</p>
          </div>
          <div className={style.filter__item}>
            <p>NFT</p>
          </div>
          <div className={style.filter__item}>
            <p>Catalogue</p>
          </div>
        </div>
        <div className={style.portfolio__flex}>
          {data &&
            data.map((item) => (
              <a
                className={style.portfolio__item}
                key={item._id}
                style={{ background: item.color }}
                href={item.link}
              >
                <div className={style.portfolio__image}>
                  <img src={item.mainIMG} alt={item.name} />
                </div>
                <div className={style.portfolio__description}>
                  <h4>{item.description}</h4>
                  <span>{item.typeSite}</span>
                </div>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:4000/project`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
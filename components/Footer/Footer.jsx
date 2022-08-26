import React from "react";
import Image from "next/image";
import style from "../../styles/Footer.module.scss";
export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__flex}>
          <div className={style.footer__image}>
            <Image src="/footerLogo.svg" width={100} height={50} alt="logo" />
          </div>
          <div className={style.footer__list}>
            <ul>
              <h4>Соцмережі</h4>
              <li>
                <a href="#">Telegram</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Whatsapp</a>
              </li>
              <li>
                <a href="#">TikTok</a>
              </li>
            </ul>
            <ul>
              <h4>Контакти</h4>
              <li>
                <a href="tel:+380970391011">+380 97 039 10 11</a>
              </li>
              <li>
                <a href="mailto:magic@creatory.studio">magic@creatory.studio</a>
              </li>
              <li>Хмельницький, Україна Зарічанська 13</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

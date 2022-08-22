import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
import style from "../../styles/Header.module.scss";
import { Navbar } from "../Navbar/Navbar";
export const Header = () => {
  const [menu, setMenu] = useState(false);

  const navContainer = useRef();
  const navLeft = useRef();
  const navRight = useRef();

  const openMenu = () => {
    const t1 = gsap.timeline();
    !menu
      ? t1
          .to(navContainer.current, {
            y: 0,
            duration: 0.3,
          })
          .to(navLeft.current, { x: 0, duration: 0.5 }, "+=0")
          .to(navRight.current, { x: 0, duration: 0.5 }, "-=0.5")
      : t1
          .to(navLeft.current, { x: "-100%", duration: 0.5 }, "+=0")
          .to(navRight.current, { x: "100%", duration: 0.5 }, "-=0.5")
          .to(navContainer.current, {
            y: "-100%",
            duration: 0.3,
          });
  };

  return (
    <>
      <header className={style.header}>
        <div className="container">
          <div className={style.header__flex}>
            <div className={style.header__logo}>
              <Link href="/">
                <a>
                  <Image src="/logo.svg" width={32} height={32} alt="logo" />
                </a>
              </Link>
            </div>
            <div
              className={
                menu
                  ? `${style.header__burger} ${style.active}`
                  : style.header__burger
              }
              onClick={() => {
                openMenu();
                setMenu(!menu);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
      <Navbar
        navContainer={navContainer}
        navLeft={navLeft}
        navRight={navRight}
        setMenu={setMenu}
        menu={menu}
      />
    </>
  );
};

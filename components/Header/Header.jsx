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

  useEffect(() => {
    gsap.set(navContainer.current, { y: "-100%" });
    gsap.set(navLeft.current, { x: "-100%" });
    gsap.set(navRight.current, { x: "100%" });
  }, []);

  const openMenu = () => {
    const t1 = gsap.timeline({yoyo:true});
    if (menu == false) {
      t1.to(navContainer.current, {
        y: 0,
        duration: 1,
      })
        .to(navLeft.current, { x: 0, duration: 1 }, "+=0")
        .to(navRight.current, { x: 0, duration: 1 }, "-=1");
    } else {
      t1.reverse();
    }

    setMenu(!menu);
  };

  return (
    <>
      <header className={style.header}>
        <div className="container">
          <div className={style.header__flex}>
            <div className="header__logo">
              <Link href="/">
                <a>
                  <Image src="/logo.svg" width={32} height={32}></Image>
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
      />
    </>
  );
};

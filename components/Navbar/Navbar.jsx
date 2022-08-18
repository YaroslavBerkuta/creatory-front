import React from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import style from "../../styles/Navbar.module.scss";
export const Navbar = ({ navContainer, navLeft, navRight, setMenu, menu }) => {
  const closeMenu = () => {
    const t2 = gsap.timeline();
    t2.to(navLeft.current, { x: "-100%", duration: 0.5 }, "+=0")
      .to(navRight.current, { x: "100%", duration: 0.5 }, "-=0.5")
      .to(navContainer.current, {
        y: "-100%",
        duration: 0.3,
      });
    setMenu(!menu);
  };
  return (
    <nav className={style.navbar} ref={navContainer}>
      <div className={style.navbar__flex}>
        <div className={style.navbar__item} ref={navLeft}>
          <Image src="/navbar.png" width={728} height={690} alt="navImg" />
        </div>
        <div className={style.navbar__item} ref={navRight}>
          <ul>
            <li>
              <span>00</span>
              <Link href="/">
                <a onClick={() => closeMenu()}>Головна</a>
              </Link>
            </li>
            <li>
              <span>01</span>
              <Link href="/portfolio">
                <a onClick={() => closeMenu()}>Портфоліо</a>
              </Link>
            </li>
            <li>
              <span>02</span>
              <Link href="/order">
                <a onClick={() => closeMenu()}>Замовлення</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

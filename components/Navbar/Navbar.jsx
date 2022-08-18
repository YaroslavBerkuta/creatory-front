import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import style from "../../styles/Navbar.module.scss";
export const Navbar = ({ navContainer, navLeft, navRight }) => {
  return (
    <nav className={style.navbar} ref={navContainer}>
      <div className={style.navbar__flex}>
        <div className={style.navbar__item} ref={navLeft}>
          <Image src="/navbar.png" width={728} height={690} />
        </div>
        <div className={style.navbar__item} ref={navRight}>
          <ul>
            <li>
              <span>00</span>
              <Link href="/">Головна</Link>
            </li>
            <li>
              <span>01</span>
              <Link href="/portfolio">Портфоліо</Link>
            </li>
            <li>
              <span>02</span>
              <Link href="/order">Замовлення</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

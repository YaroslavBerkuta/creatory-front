import Link from "next/link";
import { Canvas } from "../components/Canvas/Canvas";
import style from "../styles/Home.module.scss";
export default function Home() {
  return (
    <>
      <section className={style.hero}>
        <div className={style.container}>
          <div className={style.hero__flex}>
            <div className={style.hero__item}>
              <h1>Creatory</h1>
              <p>
                Ми веб студія повного циклу, створюємо якісні цифрові продукти
              </p>
              <Link href="/order">
                <a className="btn">Залишити заявку</a>
              </Link>
            </div>
          </div>
        </div>
        <Canvas />
      </section>
    </>
  );
}

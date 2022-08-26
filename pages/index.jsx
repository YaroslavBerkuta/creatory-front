import Link from "next/link";
import Image from "next/image";
import { Canvas } from "../components/Canvas/Canvas";
import { MagneticButton } from "../components/MagneticButton/MagneticButton";
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
                <a className="btn-color">Залишити заявку</a>
              </Link>
            </div>
          </div>
        </div>
        {/* <Canvas /> */}
      </section>
      <section className={style.info}>
        <div className="container">
          <div className={style.info__flex}>
            <div className={style.info__item}>
              <h2>
                Хочете перенести свою справу з офлайну в онлайн? Потрібен
                брендинг і оформлення ваших ідей в цифровий вигляд?
              </h2>
              <p>Ми допоможемо з цим.</p>
              <p>
                Консультуємо, працюємо за вашим брифом та у встановлені
                дедлайни.
              </p>
            </div>
            <div className={style.info__item}>
              <h2>У процесі ви отримуєте:</h2>
              <ul>
                <li>
                  Проджект-менеджера - людину, яка на зв’язку з вами протягом
                  усього процесу співпраці.{" "}
                </li>
                <li>Аудит вашого бізнесу та ринку.</li>
                <li>Бриф та консультацію по ньому.</li>
                <li>Звітність на кожному етапі роботи.</li>
                <li>Готову роботу під ключ у задані терміни.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={style.service}>
        <div className="container">
          <div className="section__title">
            <h2>Що ми пропонуємо?</h2>
          </div>
          <div className={style.service__flex}>
            <div className={style.service__item}>
              <p>Сайти та лендінги під ключ</p>
            </div>
            <div className={style.service__item}>
              <p>UI/UX мобільних додатків</p>
            </div>
            <div className={style.service__item}>
              <p>Брендинг та айдентика</p>
            </div>
            <div className={style.service__item}>
              <p>Банери та рекламні матеріали</p>
            </div>
            <div className={style.service__item}>
              <p> SMM, SEO</p>
            </div>
            <div className={style.service__item}>
              <p>Анімація, 3D</p>
            </div>
            <div className={style.service__item}>
              <p>CRM, CMS</p>
            </div>
            <div className={style.service__item}>
              <p>Консультація та аудит</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="section__title">
            <h2>Портфоліо</h2>
          </div>
          <div className={style.portfolio__flex}>
            <div className={style.portfolio__detail}>
              <p>Corporate website</p>
              <h3>Mriya Zabudovnika</h3>
              <ul>
                <li>design</li>
                <li>development</li>
                <li>web</li>
                <li>ui/ux</li>
              </ul>
              <ul className={style.portfolio__list}>
                <li>
                  <Image
                    alt="tehnology"
                    src="/js.png"
                    width={21.5}
                    height={23}
                  />
                </li>
                <li>
                  <Image
                    alt="tehnology"
                    src="/node.png"
                    width={21.5}
                    height={23}
                  />
                </li>
                <li>
                  <Image
                    alt="tehnology"
                    src="/react.png"
                    width={21.5}
                    height={23}
                  />
                </li>
              </ul>
              <MagneticButton>Детальніше</MagneticButton>
            </div>
            <div className={style.portfolio__image}>
              <Image src="/mz.png" alt="img" width={626} height={467} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={style.order}>
            <span>Розпочати</span>
            <h3>Розкажіть нам про свою ідею і ми зробимо її працюючою</h3>
            <MagneticButton>Розрахувати</MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}


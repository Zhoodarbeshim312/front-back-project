"use client";
import { FC, useEffect, useRef } from "react";
import scss from "./Welcome.module.scss";
import Typed from "typed.js";

const Welcome: FC = () => {
  const el = useRef<HTMLSpanElement | null>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (!el.current) return;
    typed.current = new Typed(el.current, {
      strings: ["ShopSite", "Best Deals Daily", "Your Favorite Products"],
      typeSpeed: 60,
      backSpeed: 20,
      backDelay: 2000,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => typed.current?.destroy();
  }, []);

  return (
    <section className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <h1>
            <span ref={el}></span>
          </h1>
          <p>
            Your one-stop online shop for electronics, clothes, and more. Fast,
            secure, and reliable.
          </p>
          <div className={scss.actions}>
            <button>Shop Now</button>
            <button>View Products</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

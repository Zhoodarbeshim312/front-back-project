"use client";
import Link from "next/link";
import scss from "./Header.module.scss";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1>ShopSite</h1>

          <nav className={scss.nav}>
            <Link href={"/"}>Home</Link>
            <Link href={"/products"}>Products</Link>
            <Link href={"/favorites"}>Favorites</Link>
            <Link href={"/basket"}>Basket</Link>
            <button>Admin</button>
            <button onClick={() => setRegisterOpen(true)}>Registration</button>
            <button onClick={() => setLoginOpen(true)}>Login</button>
          </nav>

          <div className={scss.burger}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>

      <div className={`${scss.mobileMenu} ${isOpen ? scss.open : ""}`}>
        <nav className={scss.mobileNav}>
          <Link href={"/"} onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href={"/products"} onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link href={"/favorites"} onClick={() => setOpen(false)}>
            Favorites
          </Link>
          <Link href={"/basket"} onClick={() => setOpen(false)}>
            Basket
          </Link>
          <button onClick={() => setOpen(false)}>Admin</button>
          <button
            onClick={() => {
              setRegisterOpen(true);
              setOpen(false);
            }}
          >
            Registration
          </button>
          <button
            onClick={() => {
              setLoginOpen(true);
              setOpen(false);
            }}
          >
            Login
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className={scss.overlay} onClick={() => setOpen(false)}></div>
      )}

      {isRegisterOpen && (
        <div
          className={scss.modalOverlay}
          onClick={() => setRegisterOpen(false)}
        >
          <div className={scss.modal} onClick={(e) => e.stopPropagation()}>
            <h2>Registration</h2>
            <div className={scss.form}>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button>Register</button>
            </div>
            <button
              className={scss.closeBtn}
              onClick={() => setRegisterOpen(false)}
            >
              ✖
            </button>
          </div>
        </div>
      )}

      {isLoginOpen && (
        <div className={scss.modalOverlay} onClick={() => setLoginOpen(false)}>
          <div className={scss.modal} onClick={(e) => e.stopPropagation()}>
            <h2>Login</h2>
            <div className={scss.form}>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
            </div>
            <button
              className={scss.closeBtn}
              onClick={() => setLoginOpen(false)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

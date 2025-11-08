"use client";
import Link from "next/link";
import scss from "./Header.module.scss";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

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
            <button>Registration</button>
            <button>Login</button>
          </nav>

          {/* Burger для мобильных */}
          <div className={scss.burger}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>

      {/* Off-canvas menu */}
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
          <button onClick={() => setOpen(false)}>Registration</button>
          <button onClick={() => setOpen(false)}>Login</button>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className={scss.overlay} onClick={() => setOpen(false)}></div>
      )}
    </header>
  );
};

export default Header;

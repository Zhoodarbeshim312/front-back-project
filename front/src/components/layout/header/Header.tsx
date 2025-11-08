"use client";
import Link from "next/link";
import scss from "./Header.module.scss";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import axios from "axios";

const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async () => {
    if (!userName.trim() || !password.trim()) {
      alert("Заполните пустые ячейки!");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/v1/auth/register", {
        username: userName,
        password: password,
      });
      setUserName("");
      setPassword("");
      alert("Регистрация прошла успешно!");
    } catch (error) {
      console.error(error);
      console.log(error);
      alert("Ошибка при регистрации");
    }
  };
  const handleLogin = async () => {
    if (!userName.trim() || !password.trim()) {
      alert("Заполните пустые ячейки!");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        {
          username: userName,
          password: password,
        }
      );
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      setUserName("");
      setPassword("");
      alert("Вход выполнен успешно!");
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.message || "Ошибка при входе");
    }
  };

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
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="Username"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <button onClick={handleRegister}>Register</button>
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
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="Username"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <button onClick={handleLogin}>Login</button>
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

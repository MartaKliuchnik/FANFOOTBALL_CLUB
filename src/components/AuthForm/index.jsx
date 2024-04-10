import { useEffect, useRef } from "react";
import styles from "./index.module.css";

export default function AuthForm({ type, openAuthForm, closeAuthForm }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  });

  const formRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      closeAuthForm();
    }
  };

  if (type === "login")
    return (
      <div onClick={handleOutsideClick} className={styles.wrapper}>
        <form ref={formRef} className={styles.form}>
          <h1 className={styles.title}>Войти</h1>
          <input type="email" placeholder="Эл. Почта" />
          <input type="password" placeholder="Пароль" />
          <div className={styles.checkboxWrapper}>
            <div className={styles.checkbox}>
              <input id="checkbox" type="checkbox" />
              <label htmlFor="checkbox">Запомнить меня</label>
            </div>
            <a href="#">Забыли пароль?</a>
          </div>
          <button className={styles.sumbitButton}>Войти</button>
          <div className={styles.haveNoAccountContainer}>
            <div className={styles.line}></div>
            <span>Нет аккаунта?</span>
            <div className={styles.line}></div>
          </div>
          <button
            onClick={() => openAuthForm("registration")}
            className={styles.registrationButton}
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    );

  if (type === "registration")
    return (
      <div onClick={handleOutsideClick} className={styles.wrapper}>
        <form ref={formRef} className={styles.form}>
          <h1 className={styles.title}>Регистрация</h1>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Фамилия" />
          <input type="email" placeholder="Эл. Почта" />
          <input type="password" placeholder="Пароль" />
          <input type="password" placeholder="Повторите пароль" />
          <div className={styles.checkbox}>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">
              Я принимаю <a href="#">пользовательское соглашение</a>
            </label>
          </div>
          <button className={styles.registrationButton}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    );
}

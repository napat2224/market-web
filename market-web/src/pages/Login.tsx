import { useState } from "react";
import styles from "./styles/Login.module.css";

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  const regist = () => {
    return (
      <>
        <input
          type="password"
          className={styles.input}
          placeholder="confirm password"
        />
        <button className={styles.button}>register</button>
        <a onClick={() => setIsRegistering(false)} className={styles.link}>
          already have an account
        </a>
      </>
    );
  };

  return (
    <div className="root">
      <h2 className={styles.logo}>logo</h2>
      <input type="text" className={styles.input} placeholder="username" />
      <input type="password" className={styles.input} placeholder="password" />
      {isRegistering ? (
        regist()
      ) : (
        <>
          <button className={styles.button}>login</button>
          <a onClick={() => setIsRegistering(true)} className={styles.link}>
            register
          </a>
        </>
      )}
    </div>
  );
}

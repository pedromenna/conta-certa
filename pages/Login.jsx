"use client";
import styles from "./login.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa6";















export default function () {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <Link href="/">
          <img src="./logoBranco.png" alt="logo" width={200} height={200} />
        </Link>
      </div>
      <div className={styles.box}>
        <div className={styles.form}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInputDisabled"
              placeholder="name@example.com"
              disabled
            />
            <label htmlFor="floatingInputDisabled">E-mail</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInputDisabled"
              placeholder="name@example.com"
              disabled
            />
            <label htmlFor="floatingInputDisabled">Senha</label>
          </div>

          <div className={styles.buttonBox}>
            <Link href="/Initial">
            <button className={styles.button}>Entrar</button>
            </Link>
            <button className={styles.buttonCancelar}>
              {" "}
              <Link href="/" className={styles.link}>
                Cancelar
              </Link>
            </button>
          </div>

          <div className={styles.boxA}>
            <div className={styles.access}>
              <h1>Acessar com:</h1>
              <div className={styles.icons}>
                <FaFacebook />
                <FaGoogle />
                <FaApple />
              </div>
              <div className={styles.cadas}>
                <h1>
                  Não possui uma conta ainda?{" "}
                  <Link className={styles.cadastro} href="/Cadastro">
                    Cadastre-se
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

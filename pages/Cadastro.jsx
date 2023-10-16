"use client";
import styles from "./Cadastro.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa6";









export default function () {
  return (
    <section className={styles.section} id="contato">
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
            <label htmlFor="floatingInputDisabled">Seu nome completo</label>
          </div>
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
            <label htmlFor="floatingInputDisabled">Sua senha</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInputDisabled"
              placeholder="name@example.com"
              disabled
            />
            <label htmlFor="floatingInputDisabled">Confirme sua senha</label>
          </div>

          <div className={styles.buttonBox}>
            <button className={styles.button}>Criar conta</button>
            <button className={styles.buttonCancelar}>
              {" "}
              <Link href="/" className={styles.botaoCancel}>
                Cancelar{" "}
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
                  Já possui uma conta?{" "}
                  <Link className={styles.cadastro} href="/Login">
                    Entre.
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

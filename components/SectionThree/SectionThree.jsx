'use client'
import styles from "./SectionThree.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

export default function () {

  const [text, setText] = useState("Informe a mensagem");

  return (
    <section className={styles.section}>
      <div className={styles.contact}><h1>Contato</h1></div>
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
            <label htmlFor="floatingInputDisabled">Seu nome</label>
          </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextareaDisabled"
            disabled
          ></textarea>
          <label htmlFor="floatingTextareaDisabled">E-mail</label>
        </div>
        <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2Disabled"
              style={{ height: "100px" }}
              disabled
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <label htmlFor="floatingTextarea2Disabled">Assunto</label>
          </div>
          <div className={styles.buttonBox}>
          <button className={styles.button}>Enviar</button>
          </div>
      </div>
      </div>
    </section>
  );
}

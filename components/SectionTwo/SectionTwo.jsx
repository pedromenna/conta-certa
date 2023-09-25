import React from "react";
import styles from "./SectionTwo.module.css";
import "bootstrap/dist/css/bootstrap.css"; // Certifique-se de importar o CSS do Bootstrap

export default function SectionTwo() {
  return (
    <section className={styles.section} id="sobre">
      <div className={styles.flexContainer}>
        <div className={styles.imageContainer}>
          <img
            src="../secttwo.png"
            alt="Conta certa desktop"
            className={`img-fluid ${styles.image}`} // Adicione a classe img-fluid aqui
          />
        </div>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <div className={styles.mtitle}>
              <h1>Centralize o controle das </h1>
              <h1>finanças de sua empresa </h1>
              <h1>
              em um <span className={styles.destaque}>único local</span>.
              </h1>
            </div>
            <div className={styles.pTwo}>
              <p className={styles.paragraphTwo}>
                Simplificar a administração do seu dinheiro está ao seu alcance.
              </p>
              <p className={styles.paragraphTwo}>
                Com a nossa plataforma de gestão financeira, você tem à
                disposição todas
              </p>
              <p className={styles.paragraphTwo}>
                as ferramentas necessárias para estruturar e projetar o seu
                panorama
              </p>
              <p className={styles.paragraphTwo}>
                financeiro, tudo reunido de forma integrada.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

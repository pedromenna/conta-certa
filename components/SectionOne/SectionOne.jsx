import styles from './SectionOne.module.css'
import React from 'react'

export default function SectionOne() {
    return (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.flexContainer}>
              <div className="container-fluid">
                <div className={styles.title}>
                  <h1>Domine seus números, </h1>
                  <h1 className={styles.sub}>trace seu <span className={styles.destaque}>sucesso</span>.</h1>
                  <p className={styles.paragraph}>Transforme suas práticas financeiras de maneira simples e segura,</p>
                  <p className={styles.paragraph}>automatizando tarefas e obtendo clareza nas informações.</p>
                </div>
              </div>
              <div className={`${styles.imagem} col-lg-6 col-md-12`}>
                <img src="../home.png" alt="Home" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
    )
}

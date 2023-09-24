import styles from "./Footer.module.css";
import Link from "next/link";
import React from "react";

export default function Footer() {

    const customStyles = {
        marginTop: "100px",
        marginRight:"100px"
      };


  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <img
            src="../logoBranco.png"
            alt="logo"
            width={300}
            height={300}
            className={styles.imagem}
          />
          <div className={styles.box}>
            <div className={styles.boxContent}>
              <div style={customStyles} className={`row align-items-center`}> 
                <div className="col">
                  <div className={styles.links}>
                    <Link href="/#" className={styles.link}>
                      Home
                    </Link>
                    <Link href="/#" className={styles.link}>
                      Sobre
                    </Link>
                    <Link href="/#" className={styles.link}>
                      Contato
                    </Link>
                  </div>
                </div>

                <div className="col">
                  <div className={styles.linksTwo}>
                    <Link href="/#" className={styles.link}>
                      Facebook
                    </Link>
                    <Link href="/#" className={styles.link}>
                      Instagram
                    </Link>
                    <Link href="/#" className={styles.link}>
                      Twitter
                    </Link>
                  </div>
                </div>

                <div className="col">
                  <div className={styles.adicional}>
                    <p>R. Gonçalves Chaves, 602</p>
                    <p>Pelotas, RS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

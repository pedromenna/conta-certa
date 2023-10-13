"use client";
import NavBar from "@/components/NavBar/NavBar";
import styles from "./Initial.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Saldo } from "@/components/Grafic/Saldo";

export default function () {
  return (
    <section className={styles.section}>
      <NavBar />
      <div className={styles.border}> </div>
      <div className={styles.row}>
        <div class="container text-center">
        <div className={styles.row}>
          <div class="row">
            <div class="col">
              <div className={styles.boxSaldo}>
                <Saldo />
              </div>
            </div>
            <div class="col">
              <div className={styles.boxTwo}></div>
            </div>
            <div class="col ms-0">
              <div className={styles.box}></div>
            </div>
          </div>
          <div className={styles.secondRow}>
          <div class="row">
            <div class="col">
              <div className={styles.boxSaldo}></div>
            </div>
            <div class="col">
              <div className={styles.boxUltimas}></div>
            </div>
            </div>
          </div>
          <div className={styles.thirdRow}>
          <div class="row">
            <div class="col">
              <div className={styles.boxSaldo}></div>
            </div>
            <div class="col">
              <div className={styles.boxUltimas}></div>
            </div>
            </div>
            </div>
          </div>
          </div>
        </div>
    </section>
  );
}

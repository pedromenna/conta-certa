import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css'
import styles from './Titulo.module.css'

export default function Titulo() {
  return (
    <div className={styles.nav}>
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid float-left">
    <div className={styles.margin_left}>
    <Link className="navbar-brand" href="#">
      <img src="../logoVerde.png" alt="Logo" width="100" height="100" className="d-inline-block align-text-top"/>
    </Link>
    </div>
    <div className={styles.bold}>
      <Link className="navbar-brand" href="#">Home</Link>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="#"></Link>
          </li>
          <li className="nav-item" href="#sobre">
            <Link className="nav-link" href="#sobre"> 
            <div className={styles.bold}>
            Sobre nós
            </div>
            </Link>
          </li>
          <li className="nav-item" href="#contato">
            <Link className="nav-link" href="#contato">
            <div className={styles.bold}>
            Contato
            </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>

    <div>

    <div className={styles.margin_right}>
    <div className="collapse navbar-collapse float-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item" href="/Login">
            <Link className="nav-link" href="/Login"> 
            <div className={styles.bold}>
            Login
            </div>
            </Link>
          </li>
          <li className="nav-item" href="/Cadastro">
            <Link className="nav-link" href="/Cadastro">
            <div className={styles.bold}>
            Cadastro
            </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
  </nav>
  </div>
  )
}
import styles from './AddPanel.module.css'
import "bootstrap/dist/css/bootstrap.css";


export default function AddPanel() {
    return (
        <div className={styles.box}>
            <section>
                <div className={styles.form}>
                    <form>
                        <div className={styles.form}>
                            <div className={styles.camp}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label" id={styles.name} >Data</label>
                            <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label" id={styles.name} >Valor</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        </div>
                        <div className={styles.pass}>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label" id={styles.name}>Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="dropdown" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    
                </div>
            </section>
        </div>

    )
}
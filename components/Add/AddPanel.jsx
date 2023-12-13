import React, { useState } from "react";
import styles from './AddPanel.module.css'
import DropdownButton from '../button/DropdownButton';
import "bootstrap/dist/css/bootstrap.css";
import DropdownWithInput from '../button/DropdownInput';

export default function AddPanel() {
    const [isCreditSelected, setIsCreditSelected] = useState(false);

    const handlePaymentTypeChange = (value) => {
        setIsCreditSelected(value === "Crédito");
    };

    return (
        <section className={styles.page}>
        <>
       
            <div className={styles.button}>
                <DropdownButton
                    toggleText="Nova Saída"
                    action1Text="Nova Entrada"
                    action2Text="Nova Transferência"
                />
            </div>

            <div className={styles.box}>
                <section>
                    <div className={styles.form}>
                        <form>
                            <div className={styles.form}>
                                <div className={styles.camp}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label" id={styles.name}>Data</label>
                                        <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ paddingLeft: "50px" }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label" id={styles.name} style={{ marginLeft: "50px" }}>Valor</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ marginLeft: "50px" }} placeholder="Valor" />
                                    </div>
                                </div>
                                <div className={styles.pass}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label" id={styles.name}>
                                            <DropdownWithInput
                                                title="Categoria"
                                                action1="Administrativo"
                                                action2="Financeiro"
                                                action3="Fixos"
                                                add="Adicionar Categoria"
                                                placeholder="Escolha uma categoria"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className={styles.pass}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label" id={styles.name}>
                                            <DropdownWithInput
                                                title="Forma de pagamento"
                                                action1="Pix"
                                                action2="Crédito"
                                                action3="Débito"
                                                add="Adicionar forma de pagamento"
                                                placeholder="Escolha uma forma de pagamento"
                                                onChange={handlePaymentTypeChange}
                                            />
                                        </label>
                                    </div>
                                </div>

                                {isCreditSelected && (
                                    <div className={styles.pass}>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label" id={styles.name2}>
                                                Número de Parcelas
                                                <input type="number" className="form-control mt-3" id="parcela" />
                                            </label>
                                        </div>
                                    </div>
                                )}


                                <div className={styles.pass}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label" id={styles.name2}>
                                            Descrição
                                            <input type="text" className="form-control mt-3" id="descricao" style={{height: '250px'}}/>
                                        </label>
                                    </div>
                                </div>


                                <div className={styles.botoes}>
                                    <button type="submit" className={styles.botao_enviar}>Confirmar</button>
                                    <button type="submit" className={styles.botao_cancel}>Cancelar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            
        </>
        </section>
    )
}

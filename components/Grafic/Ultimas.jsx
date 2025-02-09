import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './Ultimas.module.css';

function Ultimas() {
    const [indiceAtual, setIndiceAtual] = useState(0);

    const dadosDaTabela = [
        { col1: "Fornecedor X", col2: "16/ago", col3: "PIX", col4: "R$700,00" },
        { col1: "Fornecedor Y", col2: "16/ago", col3: "PIX", col4: "R$800,00" },
        { col1: "Fornecedor Z", col2: "16/ago", col3: "Débito", col4: "R$900,00" },
        { col1: "Fornecedor X", col2: "15/ago", col3: "A vista", col4: "R$800,00" },
        { col1: "Fornecedor Y", col2: "15/ago", col3: "Débito", col4: "R$600,00" }
        ];

    const tamanhoPagina = 4;

    const proximosDados = dadosDaTabela.slice(indiceAtual, indiceAtual + tamanhoPagina);

    const handleClickProximo = () => {
        if (indiceAtual + tamanhoPagina < dadosDaTabela.length) {
            setIndiceAtual(indiceAtual + tamanhoPagina);
        }
    };

    const handleClickAnterior = () => {
        if (indiceAtual - tamanhoPagina >= 0) {
            setIndiceAtual(indiceAtual - tamanhoPagina);
        }
    };

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="4" className="text-center">
                            <h1 style={{
                                fontSize: '14px',
                                marginTop: '20px',
                                marginBottom: '20px',
                                fontWeight: '800',
                            }}>Últimas despesas</h1>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {proximosDados.map((linha, index) => (
                        <tr key={index}>
                            <td>{linha.col1}</td>
                            <td>{linha.col2}</td>
                            <td>{linha.col3}</td>
                            <td><strong>{linha.col4}</strong></td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="4">
                            {indiceAtual > 0 && (
                                <button className={styles.button} onClick={handleClickAnterior}>
                                    <i className="bi bi-arrow-up-short"></i> 
                                </button>
                            )}
                            {indiceAtual + tamanhoPagina < dadosDaTabela.length && (
                                <button className={styles.button} onClick={handleClickProximo}>
                                    <i className="bi bi-arrow-down-short"></i> 
                                </button>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Ultimas;

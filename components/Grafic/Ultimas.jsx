import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './Ultimas.module.css';

function Ultimas() {
    const [pagina, setPagina] = useState(1);
    const itensPorPagina = 4;

    const dadosDaTabela = [
        { col1: "Linha 1, Coluna 1", col2: "Linha 1, Coluna 2", col3: "Linha 1, Coluna 3", col4: "Linha 1, Coluna 4" },
        { col1: "Linha 2, Coluna 1", col2: "Linha 2, Coluna 2", col3: "Linha 2, Coluna 3", col4: "Linha 2, Coluna 4" },
        { col1: "Linha 3, Coluna 1", col2: "Linha 3, Coluna 2", col3: "Linha 3, Coluna 3", col4: "Linha 3, Coluna 4" },
        { col1: "Linha 4, Coluna 1", col2: "Linha 4, Coluna 2", col3: "Linha 4, Coluna 3", col4: "Linha 4, Coluna 4" }]
     

    const startIndex = (pagina - 1) * itensPorPagina;
    const endIndex = startIndex + itensPorPagina;
    const dadosExibidos = dadosDaTabela.slice(startIndex, endIndex);

    const mostrarMais = () => {
        if (pagina < Math.ceil(dadosDaTabela.length / itensPorPagina)) {
            setPagina(pagina + 1);
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
                    {dadosExibidos.map((linha, index) => (
                        <tr key={index}>
                            <td>{linha.col1}</td>
                            <td>{linha.col2}</td>
                            <td>{linha.col3}</td>
                            <td>{linha.col4}</td>
                        </tr>
                    ))}
                    {pagina < Math.ceil(dadosDaTabela.length / itensPorPagina) && (
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button className={styles.button} onClick={mostrarMais}>
                                    <i className="bi bi-arrow-down-short"></i> Mostrar Mais
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Ultimas;

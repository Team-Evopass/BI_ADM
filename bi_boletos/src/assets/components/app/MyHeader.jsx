import React from 'react';

import style from "../../css/common/style_header.css"

import download_file from "../../download/relatorio";
import get_members from "../../api/member_api"

var logo = "https://academiaevoque.com.br/wp-content/uploads/2023/06/EvoPass2.png"

export default props => {

    async function exportar_valores () {

        var data_members = await get_members()
        download_file(data_members)

        alert('Valores exportados para ti.evopass@gmail.com')
    }

    return (
        <header className="header">
            <nav className="nav">
                <img src= {logo} alt="" className="logo-empresa" />
                <ul className="list-buttons">
                    <li onClick={ () => {exportar_valores()}} >Exportar valores</li>
                    <li>Empresas</li>
                    <li>Filtros</li>
                    <li>Gerar pagamentos</li>
                </ul>
            </nav>
        </header>
    )
}
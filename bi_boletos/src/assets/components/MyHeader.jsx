import style from "../css/header/style_header.css"

import api from "../api/member_api.js"

var logo = "https://academiaevoque.com.br/wp-content/uploads/2023/06/EvoPass2.png"

export default props => {

    function exportar_valores () {
        alert('Valores exportados para ti.evopass@gmail.com')
    }

    return (
        <header className="header">
            <nav className="nav">
                <img src= {logo} alt="" className="logo-empresa" />
                <ul className="list-buttons">
                    <li onClick={ () => {exportar_valores()}} >Exportar valores</li>
                    <li>Grupos econômicos</li>
                    <li>Filtros</li>
                    <li>Meta</li>
                </ul>
            </nav>
        </header>
    )
}
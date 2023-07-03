import logo from "../img/logo-evopass.png"
import style from "../css/header/style_header.css"
export default props => {
    return (
        <header className="header">
            <nav className="nav">
                <img src= {logo} alt="" className="logo-empresa" />
                <ul className="list-buttons">
                    <li>Exportar valores</li>
                    <li>Empresa</li>
                    <li>Meta</li>
                </ul>
            </nav>
        </header>
    )
}
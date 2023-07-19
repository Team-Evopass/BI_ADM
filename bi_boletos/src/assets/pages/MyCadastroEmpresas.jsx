export default props => {
    return (
        <div className="container-cadastro-empresas">
           <aside>
                <form>
                    <h2>Cadastre uma empresa</h2>
                    <label>Nome da empresa</label>
                    <input type="text" />

                    <label>CNPJ</label>
                    <input type="text" />

                    <label>Email</label>
                    <input type="text" />

                    <button></button>
                </form>
           </aside>
        </div>
    )
}
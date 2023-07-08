import React from "react";
import MyHeader from "./assets/components/MyHeader";
import MyTable from "./assets/components/MyTable";


import seta_direita from "./assets/img/logo-seta-direita.png"

import style from "./assets/css/app/style_app.css"
import style_amarrar_empresas from "./assets/css/amarrar_empresas/style_amarrar_empresas.css"

// import app_config from "./assets/firebase//app_config"

export default function App() {
  return (
    <div className="App">
      <MyHeader/>
      <div className="container-table">
        <MyTable></MyTable>
      </div>
      <div className="container-amarrar-empresas">
     
        <nav>
          <input type="text" className="pesquisa-grupo-economico" placeholder="Pesquise por um grupo econômico"></input>
          <button className="btn-novo-grupo">Novo grupo</button>
        </nav>

        <main>
          <div className="list-group">
            <ul>
              <li> <h4>Nome do grupo</h4> <img src= { seta_direita } ></img></li>
              <li> <h4>Nome do grupo</h4> <img src= { seta_direita } ></img></li>
              <li> <h4>Nome do grupo</h4> <img src= { seta_direita } ></img></li>
              <li> <h4>Nome do grupo</h4> <img src= { seta_direita } ></img></li>
              <li> <h4>Nome do grupo</h4> <img src= { seta_direita } ></img></li>
              <li> <h4>Nome do grupo</h4> <img src= { seta_direita } ></img></li>
              <li> <h4>Nome do grupo</h4> <img src= { seta_direita } ></img></li>
              <li> <h4>Nome do grupo</h4> <img src= { seta_direita } ></img></li>
              <li> <h4>Nome do grupo</h4> <img src= { seta_direita } ></img></li>
              <li> <h4>Nome do grupo</h4> <img src= { seta_direita } ></img></li>
              <li> <h4>Nome do grupo</h4> <img src= { seta_direita } ></img></li>
              <li> <h4>Nome do grupo</h4> <img src= { seta_direita } ></img></li>
            </ul>
          </div>
          <div className="list-empresas">
            <nav>
              Grupo "nome do grupo" selecionado
            </nav>
            <ul>
              <li>Empresa 01 'nome abreviado e CNPJ'</li>
              <li>Empresa 02 'nome abreviado e CNPJ'</li>
              <li>Empresa 03 'nome abreviado e CNPJ'</li>
              <li>Empresa 04 'nome abreviado e CNPJ'</li>
            </ul>
          </div>
        </main>
    
      </div>
      <div className="fade-in"></div>
    </div>

  );
}

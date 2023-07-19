import React from "react";
import MyHeader from "./assets/components/app/MyHeader";
import MyRoutes from "./assets/routes/Routes"

import seta_direita from "./assets/img/logo-seta-direita.png"
import style from "./assets/css/app/style_app.css"

export default function App() {
  return (
    <div className="App">
      <MyHeader/>
      <MyRoutes></MyRoutes>
    </div>
  );
}

import React from "react";
import MyHeader from "./assets/components/MyHeader";
import MyTable from "./assets/components/MyTable";
import style from "./assets/css/app/style_app.css"


export default function App() {
  return (
    <div className="App">
      <MyHeader/>
      <div className="container-table">
        <MyTable></MyTable>
      </div>
    </div>
  );
}

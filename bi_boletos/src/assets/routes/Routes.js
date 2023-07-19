import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyBi from '../pages/MyBi';
import MyCadastroEmpresas from '../pages/MyCadastroEmpresas';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyBi />} />
        <Route path="/empresas" element={<MyCadastroEmpresas />} />
        {/* <Route path="/teste" element={<MyHeader />} />  selecionar a minha pagina*/}
      </Routes>
    </Router>
  );
};

export default AppRoutes;

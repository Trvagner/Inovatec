import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './componentes/paginas/Home';
import Login from './componentes/paginas/Login';
import Cadastro from './componentes/paginas/Cadastro';
import Menu from './componentes/Menu';
import Banner from "./componentes/Banner";
import Rodape from "./componentes/Rodape";


function AppRoutes() {
  return (
    <BrowserRouter>
      <main>
        <Banner/>
        <Menu/>
      </main>
      
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="cadastro" element={<Cadastro/>}/>
      </Routes>
      <Rodape/> 
    </BrowserRouter>
     
  )
}

export default AppRoutes;

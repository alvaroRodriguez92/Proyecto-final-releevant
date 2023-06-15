import Map from "./views/Map/Map";
import "./App.css";
import UserContextProvider from "./context/UserContext";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Registro from "./components/Registro/Registro";
import Home from "./views/Home/Home";
import Perfil from "./views/Perfil/Perfil";

function App() {
  return (
    <BrowserRouter>
    <UserContextProvider>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/map" element={<Map/>} />
    <Route path="/registro" element={<Registro/>} />
    <Route path="/perfil" element={<Perfil />} />
    </Routes>
    </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;

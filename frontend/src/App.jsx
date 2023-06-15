import Map from "./views/Map/Map";
import "./App.css";
import UserContextProvider from "./context/UserContext";
import Home from "./views/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Perfil from "./views/Perfil/Perfil";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;

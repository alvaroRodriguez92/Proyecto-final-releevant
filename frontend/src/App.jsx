import "./App.css";
import UserContextProvider from "./context/UserContext";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RegistroView from "./views/RegistroView/RegistroView";
import Home from "./views/Home/Home";
import Perfil from "./views/Perfil/Perfil";
import { ThemeProvider } from "@mui/material/styles";
import {theme} from "./theme/theme"


function App() {
  return (
    <BrowserRouter>
    <UserContextProvider>
    <ThemeProvider theme={theme}>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/registro" element={<RegistroView/>} />
    <Route path="/perfil" element={<Perfil />} />
    </Routes>
    </ThemeProvider>
    </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;

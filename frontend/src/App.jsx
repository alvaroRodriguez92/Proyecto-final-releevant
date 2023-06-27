import "./App.css";
import UserContextProvider from "./context/UserContext";
import CardContextProvider from "./context/CardContext";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegistroView from "./views/RegistroView/RegistroView";
import Home from "./views/Home/Home";
import PerfilView from "./views/PerfilView/PerfilView";
import EditView from "./views/EditView/EditView";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme"


function App() {
  return (
    <BrowserRouter>
      <CardContextProvider>
      <UserContextProvider>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<RegistroView />} />
            <Route path="/perfil" element={<PerfilView />} />
            <Route path="/perfil/edit" element={<EditView />} />
          </Routes>
        </ThemeProvider>
      </UserContextProvider>
      </CardContextProvider>
    </BrowserRouter>
  );
}

export default App;

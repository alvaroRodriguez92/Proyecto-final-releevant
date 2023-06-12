import Map from "./views/Map/Map";
import "./App.css";
import UserContextProvider from "./context/UserContext";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Registro from "./components/Registro/Registro";

function App() {
  return (
    <BrowserRouter>
    <UserContextProvider>
    <Routes>
      <Route path="/map" element={<Map/>} />
      <Route path="/registro" element={<Registro/>} />
    </Routes>
    </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;

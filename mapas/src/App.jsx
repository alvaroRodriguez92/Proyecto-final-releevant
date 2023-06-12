import Home from "./views/Home/Home";
import "./App.css";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Home />
    </UserContextProvider>
  );
}

export default App;

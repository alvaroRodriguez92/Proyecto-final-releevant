import Map from "./views/Map/Map";
import "./App.css";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Map />
    </UserContextProvider>
  );
}

export default App;

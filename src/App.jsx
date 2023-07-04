import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./composants/Accueil";
import Saisie from "./composants/saisie";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Saisie" element={<Saisie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

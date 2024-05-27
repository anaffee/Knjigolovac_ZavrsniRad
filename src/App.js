import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Objekti from "./Objekti.js";
import Membership from "./Components/Membership";
import Pisci from "./Components/Pisci";
import Kontakt from "./Components/Kontakt";
import Pocetna from "./Components/Pocetna";
import Proizvod from "./Components/Proizvod";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />}></Route>
          <Route path="/webshop" element={<Objekti />}></Route>
          <Route path="/membership" element={<Membership />}></Route>
          <Route path="/kontakt" element={<Kontakt />}></Route>
          <Route path="/pisci/:autor" element={<Pisci />}></Route>
          <Route path="/proizvod/:id" element={<Proizvod />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

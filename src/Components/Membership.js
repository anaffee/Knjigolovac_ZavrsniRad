import "../Stylesheets/styles.css";
import { Link } from "react-router-dom";
import { Form } from "../Form";
import Footer from "../Footer";
import Ukras from "../Slike/ukras2.png";

export default function Membership() {
  return (
    <div className="App">
      <div class="header">
        <div class="headermain">
          <div class="headerlogo">
            <img src={Ukras} class="ukras" />
            <h1>Knjigolovac</h1>
          </div>
          <h4>Ana Čikeš</h4>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" class="links">
                Početna
              </Link>
            </li>
            <li>
              <Link to="/webshop" class="links">
                Knjige
              </Link>
            </li>
            <li>
              <Link to="/kontakt" class="links">
                O nama
              </Link>
            </li>
            <li>
              <Link to="/membership" class="links">
                Prijavi se
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Form />
      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import "../Stylesheets/styles.css";
import "../Stylesheets/webstyle.css";
import Crnimacakslika from "../Slike/crnimacak.jpg";
import Lovacuzituslika from "../Slike/lovacuzitu1.jpg";
import Strangerslika from "../Slike/stranger.jpg";
import Antigonaslika from "../Slike/antigona.jpg";
import Zlocinslika from "../Slike/zlocin.jpg";
import Macakslika from "../Slike/macak.jpg";
import Footer from "../Footer";
import Ukras from "../Slike/ukras2.png";
export default function Web({
  Crnicat,
  Antigonaa,
  Stranger,
  Lovac,
  Zlocinikazna,
  Cizme,
}) {
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

      <div class="main" id="about">
        <h1>Knjige</h1>
        <div class="grid-container">
          <Link to={`/proizvod/crnimacak`}>
            <div class="item">
              <img src={Crnimacakslika} />
              <p>
                <b> {Crnicat.ime}</b>
              </p>
              <p>
                <b>Pisac:</b>
                {Crnicat.pisac}
              </p>
              <p>
                <b>Žanr:</b>
                {Crnicat.zanr}
              </p>
            </div>
          </Link>

          <Link to={`/proizvod/lovacuzitu`}>
            <div className="item">
              <img src={Lovacuzituslika} />
              <p>
                <b>{Lovac.ime}</b>
              </p>
              <p>
                <b>Pisac:</b> {Lovac.pisac}
              </p>
              <p>
                <b>Žanr:</b> {Lovac.zanr}
              </p>
            </div>
          </Link>
          <Link to={`/proizvod/stranger`}>
            <div className="item">
              <img src={Strangerslika} />
              <p>
                <b>{Stranger.ime}</b>
              </p>
              <p>
                <b>Pisac:</b> {Stranger.pisac}
              </p>
              <p>
                <b>Žanr:</b> {Stranger.zanr}
              </p>
            </div>
          </Link>
          <Link to={`/proizvod/antigona`}>
            <div className="item">
              <img src={Antigonaslika} />
              <p>
                <b>{Antigonaa.ime}</b>
              </p>
              <p>
                <b>Pisac:</b> {Antigonaa.pisac}
              </p>
              <p>
                <b>Žanr:</b> {Antigonaa.zanr}
              </p>
            </div>
          </Link>
          <Link to={`/proizvod/zlocinikazna`}>
            <div class="item">
              <img src={Zlocinslika} />
              <p>
                <b>{Zlocinikazna.ime}</b>
              </p>
              <p>
                <b>Pisac:</b>
                {Zlocinikazna.pisac}
              </p>
              <p>
                <b>Žanr:</b>
                {Zlocinikazna.zanr}
              </p>
            </div>
          </Link>
          <Link to="/proizvod/macakucizmama">
            <div class="item">
              <img src={Macakslika} />
              <p>
                <b>{Cizme.ime}</b>
              </p>
              <p>
                <b>Pisac:</b>
                {Cizme.pisac}
              </p>
              <p>
                <b>Žanr:</b>
                {Cizme.zanr}
              </p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

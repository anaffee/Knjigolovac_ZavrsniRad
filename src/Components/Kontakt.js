import { Link } from "react-router-dom";
import "../Stylesheets/styles.css";
import "../Stylesheets/kontaktstyle.css";
import Slika from "../Slike/writting1.png";
import Footer from "../Footer";
import Ukras from "../Slike/ukras2.png";

export default function Kontakt() {
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
      <div class="kontaktheader">
        <h1>Dobrodošli u Knjigolovac</h1>
        <img src={Slika} class="slikaPozadinakon" />
      </div>

      <div class="info">
        <div class="kontaktitem">
          <h2>Naša priča</h2>
          <p>
            Dobrodošli na Knjigolovac, vaš krajnji izvor za detaljne analize i
            recenzije knjiga! Naša misija je pomoći ljubiteljima knjiga da
            pronađu najbolje naslove, otkriju nove autore i uživaju u svakoj
            pročitanici stranici.
          </p>
        </div>
        <hr class="hrkon" />

        <div class="kontaktitem">
          <h2>Naš tim</h2>
          <p>
            Knjigolovac je tim strastvenih čitatelja i književnih kritičara
            posvećenih stvaranju zajednice koja dijeli ljubav prema knjigama.
            Naša stručnost i iskustvo omogućuju nam da pružimo kvalitetne i
            nepristrane analize knjiga iz raznih žanrova, od fikcije do
            nefikcije, klasika do suvremenih naslova. . Saznajte više o našem
            timu{" "}
            <a href="https://mail.google.com/mail/u/0/#inbox" class="linkkon">
              ovdje
            </a>
            .
          </p>
        </div>
        <hr class="hrkon" />

        <div class="kontaktitem">
          <h2>Naš pristup</h2>
          <p>
            Analize koje pružamo temelje se na pažljivoj i objektivnoj
            evaluaciji. Svaka knjiga se ocjenjuje prema unaprijed definiranim
            kriterijima koji uključuju kvalitetu pisanja, originalnost,
            razvijenost likova, konzistentnost zapleta i ukupni dojam. Cilj nam
            je pružiti transparentne i pouzdane informacije koje vam mogu pomoći
            u odabiru knjige koja će vam pružiti zadovoljstvo čitanja.
          </p>
        </div>
        <hr class="hrkon" />

        <div class="kontaktitem">
          <h2>Kontaktirajte nas</h2>
          <p>
            Želite li saznati više o Knjigolovcu ili imate pitanja o našim
            analizama i uslugama? Slobodno nas kontaktirajte putem e-pošte na{" "}
            <a href="mailto:info@knjigolovac.com" class="linkkon">
              info@knjigolovac.com
            </a>{" "}
            ili nas nazovite na +123 456 789.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

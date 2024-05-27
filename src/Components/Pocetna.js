import "../Stylesheets/pocetnastyle.css";
import "../Stylesheets/styles.css";
import { Link } from "react-router-dom";
import Knjigegif from "../Slike/knjigegif.gif";
import Wiggle from "../Slike/wigglepaper2.png";
import Ukras from "../Slike/ukras2.png";

export default function Pocetna() {
  return (
    <div className="App">
      <div class="containerPoc">
        <img src={Knjigegif} class="gifknjige" />
        <img src={Wiggle} class="wiggle" />
        <div class="mainpocetna">
          <div class="knjiga">
            <div class="pocetnalogo">
              <img src={Ukras} class="ukraspocetna" />
              <h1>Knjigolovac</h1>
            </div>

            <br />
            <h4>
              Ova stranica pristupa analizi knjiga na temeljan način koji
              obuhvaća nekoliko ključnih aspekata. Prvo, pruža se kratak sažetak
              knjige koji obuhvata osnovne elemente radnje, glavne likove i
              ključne događaje. Ovaj sažetak služi kao uvod za čitatelje i
              omogućava im da se upoznaju s pričom bez otkrivanja previše
              detalja. Ova analiza ide dublje u karakterizaciju glavnih likova,
              opisujući njihove osobine, motive i razvoj tokom priče. Također se
              istražuje njihova uloga u knjizi i način na koji utječu na radnju.
              Kroz sve ove aspekte, stranica kombinira različite pristupe kako
              bi pružila sveobuhvatnu analizu knjiga, omogućavajući čitateljima
              da dublje razumeju i cijene književna djela.
              <br />
              <br />
              Ako želite bit obavlješteni o novim analizama prijavite se!!!
            </h4>
          </div>
          <div class="kutija">
            <table>
              <tr>
                <th>
                  <Link to="/webshop" class="links">
                    Knjige
                  </Link>
                </th>
              </tr>
              <br />
              <tr>
                <th>
                  <Link to="/kontakt" class="links">
                    O nama
                  </Link>
                </th>
              </tr>
              <br />
              <tr>
                <th>
                  <Link to="/membership" class="links">
                    Prijavi se
                  </Link>
                </th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

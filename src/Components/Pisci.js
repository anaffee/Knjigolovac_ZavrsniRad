import "../Stylesheets/styles.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Sofokloslika from "../Slike/sofoklo.jpg";
import Dostoyevskyslika from "../Slike/dostoyevsky.jpg";
import Edgarslika from "../Slike/edgar.jpg";
import Charlesslika from "../Slike/charles.jpg";
import Albertslika from "../Slike/albert.jpg";
import Jeromeslika from "../Slike/jerome.jpg";
import Slika from "../Slike/cursive1.0.png";
import "../Stylesheets/pisci.css";
import Okvir from "../Slike/okvir1.png";
import Footer from "../Footer";
import Ukras from "../Slike/ukras2.png";

export default function Pisci() {
  const { autor } = useParams();
  let pisci = {
    Sofoklo: {
      ime: "Sofoklo",
      opcenito:
        "Sofokle, ili Sofoklo (Sofokles, Σοφοκλῆς), bio je starogrčki dramski pisac, jedan od najvažnijih tragičara antičke Grčke. Rođen je oko 497/496. godine pre nove ere u selu Kolonos, blizu Atine, a umro je 406/405. godine pre nove ere.",
      biografija:
        "Sofokle je bio sin bogatog oružara i pripadnik visokog sloja atinskog društva. Dobio je dobro obrazovanje, a već u mladosti je pokazao talent za umetnost. Postao je poznat nakon pobede na dramskom takmičenju u Atini 468. godine pre nove ere, pobedivši tada već etabliranog Eshila. Bio je aktivan u političkom i vojnom životu Atine, služeći kao strateg (vojni zapovednik) i član raznih državnih odbora.",
      djela: "Kralj Edip, Antigona, Edip na Kolonu, Elektra",
      stil: "Sofokle je poznat po svojim vešto razvijenim zapletima i dubokom psihološkom istraživanju svojih likova. Njegove drame često istražuju teme sudbine, božanske pravde, ljudske slabosti i moralne dileme. Njegovi likovi su često suočeni sa teškim izborima i neizbežnim sudbinama koje dovode do tragičnih ishoda.",
      slika: Sofokloslika,
    },
    "Charles Perrault": {
      ime: "Charles Perrault",
      opcenito:
        "Charles Perrault bio je francuski pisac i pripovedač iz 17. veka, poznat po svojoj zbirci bajki koja je postavila temelje za žanr bajke i uticala na kasnije verzije mnogih poznatih priča. Rođen je 12. januara 1628. godine u Parizu, a umro 16. maja 1703. godine. Perrault je bio značajna figura na dvoru kralja Luja XIV i član Francuske akademije.",
      biografija:
        "Perrault je bio sin bogatog advokata i imao je privilegiju dobiti dobro obrazovanje. Studirao je pravo i postao advokat, ali je ubrzo prešao u državnu službu. Radio je kao službenik i savjetnik na dvoru Luja XIV, gde je imao značajnu ulogu u razvoju umetnosti i književnosti. Bio je član Francuske akademije i aktivno je učestvovao u književnim debatama svog vremena.",
      djela:
        "Crvenkapica, Pepeljuga, Uspavana lepotica, Mačak u čizmama, Plavobradi",
      stil: "Perraultove bajke su često imale moralne pouke i bile su namenjene kako deci, tako i odraslima. Njegov stil je jednostavan i direktan, sa naglaskom na jasnoću i razumljivost. Bajke su često istraživale teme poput dobrote, hrabrosti, pravde i sudbine. Perrault je koristio magične elemente i fantastiku da bi prenio svoje poruke i zabavio čitatelje.",
      slika: Charlesslika,
    },
    "Fjodora Mihajloviča Dostojevskog": {
      ime: "Fjodora Mihajloviča Dostojevskog",
      opcenito:
        "Fjodor Mihajlovič Dostojevski bio je jedan od najvećih ruskih pisaca, čija su dela duboko uticala na svetsku književnost. Rođen je 11. novembra 1821. godine u Moskvi, Rusija, i umro je 9. februara 1881. godine u Sankt Peterburgu. Dostojevski je poznat po svojim složenim likovima, dubokim psihološkim analizama, i istraživanju tema poput moralnosti, slobode, religije, i ljudske patnje.",
      biografija:
        "Dostojevski je odrastao u porodici srednjeg sloja u Rusiji. Studirao je inženjerske nauke, ali je već tada bio zainteresovan za književnost. Nakon studija, počeo je da piše i da se bavi novinarstvom. 1849. godine, zbog političke aktivnosti, Dostojevski je osuđen na smrt, ali mu je kazna kasnije preinačena u prinudni rad u Sibiru. Tokom ovog perioda, Dostojevski je doživeo teške životne uslove i suočio se sa svojom sopstvenom smrtnošću, što je duboko uticalo na njegovo kasnije književno stvaralaštvo. vNakon što je amnestiran 1859. godine, Dostojevski se vratio u Sankt Peterburg i nastavio sa pisanjem.  Dostojevski je bio član društvene elite i uživao je u visokom društvenom položaju, ali je i dalje istraživao teme moralnosti, religije i ljudske prirode.",
      djela:
        "Zločin i kazna, Idiot, Braća Karamazovi i Prestupnikova bilježnica",
      stil: "Dostojevski je poznat po svom kompleksnom stilu pisanja, koji uključuje duboke psihološke analize likova i složene narativne strukture. Njegova dela često istražuju unutrašnju borbu likova, njihove moralne dileme i duhovnu potragu za smislom života. Dostojevski je bio majstor u stvaranju autentičnih likova koji se suočavaju sa ekstremnim situacijama i moralnim izazovima.",
      slika: Dostoyevskyslika,
    },
    "Albert Camus": {
      ime: "Albert Camus",
      opcenito:
        "Albert Camus bio je francuski filozof, pisac i esejist, poznat po svom doprinosu egzistencijalizmu i absurdizmu u filozofiji i književnosti. Rođen je 7. novembra 1913. godine u Mondovi, Alžir, koji je tada bio francuska kolonija, a umro je 4. januara 1960. godine u automobilskoj nesreći u blizini Sensa, Francuska.",
      biografija:
        "Camus je rođen u porodici siromašnih Alžiraca i odrastao je u teškim uslovima. Ipak, uspeo je da se izbori za obrazovanje i studirao je filozofiju na Univerzitetu u Alžiru. Bio je aktivan u političkim i intelektualnim krugovima i postao je član Francuskog komunističkog partizanskog pokreta tokom Drugog svetskog rata. Međutim, kasnije se distancirao od komunizma zbog njegove autoritarne prirode.Camus je postao poznat po svojim esejima, romanima i dramskim delima koji istražuju teme kao što su apsurd ljudskog postojanja, moralnost, sloboda i pobuna protiv besmisla sveta.",
      djela: "Stranac, Mit o Sizifu, Pobuna, Kaligula",
      stil: "Camus je poznat po razvijanju koncepta apsurda, koji se odnosi na nespojivost ljudskih težnji za smislom sa besmislenošću sveta. Prema Camusu, svet je apsurdan jer nema unapred određen smisao ili svrhu, ali ljudi nastavljaju da tragaju za smislom i vrednošću. On je zagovornik ideje da se moramo boriti protiv apsurda sveta, prihvatiti svoju sudbinu i pronaći slobodu i sreću unutar besmislenosti.",
      slika: Albertslika,
    },
    "Jerome David Salinger": {
      ime: "Jerome David Salinger",
      opcenito:
        "Jerome David Salinger bio je američki pisac, najpoznatiji po svom kultnom romanu 'Lovac u žitu' (The Catcher in the Rye). Rođen je 1. januara 1919. godine u Njujorku, a umro je 27. januara 2010. godine u Kornišu, New Hampshire. Salinger je tokom svog života postao poznat po svom odbijanju javne slave i života u izolaciji.",
      biografija:
        "Salinger je rođen u Njujorku, u porodici jevrejskih imigranata. Nakon završetka srednje škole, pohađao je nekoliko univerziteta pre nego što je počeo da piše puno vreme. Tokom Drugog svetskog rata, služio je kao vojnik i učestvovao je u borbama, uključujući i D-Day. Nakon rata, Salinger se posvetio pisanju i objavio je nekoliko priča u raznim časopisima. Njegov najpoznatiji rad, 'Lovac u žitu', objavljen je 1951. godine i odmah je postao bestseler. Roman prati lik Holdena Caulfielda, tinejdžera koji luta Njujorkom dok se bori sa svojim osećajem izolacije i besmisla.",
      djela:
        "Lovac u žitu, Franny i Zooey, Devine komedije, Lift visoko u vazduh",
      stil: "Stil pisanja Jeromea Davida Salinger-a karakteriše jednostavnost, direktnost i duboka empatija prema svojim likovima. Njegove priče često istražuju unutrašnje živote svojih junaka, koji se bore sa osećajem izolacije, tražeći smisao u svetu koji ih okružuje. Salinger je poznat po tome što je vešto uhvatio jezik i misli adolescenata, kao i po tome što je stvorio likove koji su postali simboli generacijskih sukoba i univerzalnih osećanja tinejdžerske buntovnosti.",
      slika: Jeromeslika,
    },
    "Edgar Allan Poe": {
      ime: "Edgar Allan Poe",
      opcenito:
        "Edgar Allan Poe bio je američki pisac, poznat po svojim nadrealnim pričama, jezovitim pesmama i pionirskim doprinosima žanrovima detektivske i horor literature. Rođen je 19. januara 1809. godine u Bostonu, a umro je 7. oktobra 1849. godine u Baltimoru, u državi Maryland. Poe je bio jedan od najvažnijih pisaca 19. veka i ostavio je dubok i trajan uticaj na svetsku književnost.",
      biografija:
        "Edgar Allan Poe, američki pisac rođen 1809. u Bostonu, rano je ostao siroče. Usvojen je od strane bogate porodice, ali je kasnije bio razdvojen od biološke braće. Pokazao je rani talenat za pisanje i prvi rad, zbirku pesama 'Tamerlane and Other Poems', objavio je 1827. godine. Poeov život bio je obeležen brojnim tragedijama i gubicima. Venčao se sa svojom rođakom, Virdžinijom Klem, koja je ubrzo umrla od tuberkuloze. Njegova dela često istražuju teme poput smrti, ludila, opsesije i nadnaravnog, poznata su po mračnom, gotičkom stilu.",
      djela: "Gavran, Crni mačak, Sfinga, Annabell Lee",
      stil: "Poeov stil pisanja karakteriše mračna atmosfera, nadrealne slike i intenzivna emocionalna iskustva. On je poznat po svom veštom korišćenju jezika i ritma, kao i po svom sposobnosti da stvori jezovitu atmosferu koja preplavljuje čitaoca. Poe je takođe bio pionir u korišćenju psihološke analize likova i motivacije, što je postalo karakteristično za modernu književnost.",
      slika: Edgarslika,
    },
  };
  const pisac = pisci[autor];

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
      <div class="headerpisci">
        <img src={Slika} class="headerslikapisci"></img>
        <div class="pisac">
          <h1>{pisac.ime}</h1>
          <div class="autorslikadiv">
            <img src={pisac.slika} class="pisacslika"></img>
            <img src={Okvir} class="okvir"></img>
          </div>
        </div>
      </div>
      <div class="mainpisac">
        <p>{pisac.opcenito}</p>
        <br />
        <h2>Biografija:</h2>
        <br />
        <p>{pisac.biografija}</p>
        <br />
        <h2>Djela:</h2>
        <p>{pisac.djela}</p>
        <br />
        <h2>Stil pisanja: </h2>
        <br />
        <p>{pisac.stil}</p>
        <br />
      </div>
      <Footer />
    </div>
  );
}

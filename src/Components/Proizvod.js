import React from "react";
import { Link } from "react-router-dom";
import "../Stylesheets/proizvodistyle.css";
import { useParams } from "react-router-dom";
import Crnimacakslika from "../Slike/crnimacak.jpg";
import Lovacuzituslika from "../Slike/lovacuzitu1.jpg";
import Strangerslika from "../Slike/stranger.jpg";
import Antigonaslika from "../Slike/antigona.jpg";
import Zlocinslika from "../Slike/zlocin.jpg";
import Macakslika from "../Slike/macak.jpg";
import Footer from "../Footer";
import Page from "../Slike/page2.0.png";
import Ukras from "../Slike/ukras2.png";

export default function Proizvod() {
  const { id } = useParams();
  let books = {
    macakucizmama: {
      ime: "Mačak u čizmama",
      pisac: "Charles Perrault",

      zanr: "Bajka",
      kratkisadrzaj:
        "Prati mačka, koji, unatoč svojoj običnoj vanjštini, pokazuje izuzetnu lukavost i snalažljivost. Kada se njegov gospodar nađe u nevolji zbog svoje siromašne situacije, mačak odlučuje pomoći mu. Koristeći svoje lukave planove, mačak pomaže svom gospodaru da osvoji srce princeze i postane bogat. Mačak se koristi svojim trikovima kako bi prevazišao prepreke, uključujući sukob s divovima i zmajem. Na kraju, mačak osigurava srećan kraj za sve, pokazujući da snalažljivost i dobrota mogu prevladati prepreke.",
      analiza1:
        "Mačak: Glavni junak bajke, mačak, je inteligentan, lukav i snalažljiv. On koristi svoju pamet kako bi pomogao svom gospodaru da postigne uspjeh i bogatstvo. Mačak je prikazan kao simbol hrabrosti i spretnosti, koristeći svoje trikove kako bi prevario druge likove u priči.",
      analiza2:
        "Gospodar: Gospodar mačka je siromašni seljak koji nasljeđuje mačka nakon smrti svog oca. Dok je na početku priče nemoćan i siromašan, zahvaljujući mačkovim planovima, postaje bogat i moćan. Gospodar je prikazan kao dobar i srdačan, ali nedovoljno sposoban da sam postigne uspjeh bez pomoći mačka.",
      analiza3:
        "Princeza: Princeza je lik koja predstavlja visoki socijalni status i cilj gospodara mačka. Iako na početku nezainteresirana za gospodara, mačak koristi svoje trikove da je impresionira i osvoji njeno srce. Ona je simbol ljepote i moći, ali se u priči također pokazuje kao osoba koja cijeni iskrenost i hrabrost.",
      izvor: "https://www.lektire.hr/macak-u-cizmama-charles-perrault/",
      slika: Macakslika,
    },
    zlocinikazna: {
      ime: "Zločin i kazna",
      pisac: "Fjodora Mihajloviča Dostojevskog",
      zanr: "Roman",
      kratkisadrzaj:
        "Prati Raskoljnikova, mladog studenta koji, uvjeren da je iznad moralnih zakona, ubija staru pazaricu. Nakon zločina, suočava se s unutarnjom borbom i osjećajem krivice. Upoznaje Sonju, siromašnu prostitutku, koja postaje ključna figura u njegovom putovanju ka iskupljenju. Istražitelj Porfirije Petrovič nastoji razotkriti Raskoljnikovljev zločin, dok se Raskoljnikov polako suočava sa svojim moralnim i psihološkim unutarnjim demonima. Kroz Raskoljnikovljevu priču, roman istražuje moralne dileme, iskupljenje i dubinu ljudske psihe, ostavljajući čitatelja s dubokim filozofskim pitanjima o prirodi krivice i moralnosti.",
      analiza1:
        "Raskoljnikov: Centralni lik, mladi student koji osjeća moralno opravdanje za počinjenje zločina, uvjeren da može biti iznad običnih moralnih zakona. Međutim, suočava se s unutarnjom borbom i osjećajem krivice nakon zločina.",
      analiza2:
        "Sonia Marmeladova: Siromašna prostitutka koja postaje ključna figura u Raskoljnikovljevoj transformaciji. Njena ljubav i suosjećanje prema njemu pomažu mu da pronađe put ka iskupljenju.",
      analiza3:
        "Porfirije Petrovič: Iskusni istražitelj koji pokušava razotkriti Raskoljnikovljev zločin. Inteligentan i lukav, ali istovremeno razumijevanja za ljudsku prirodu, što mu omogućuje da istražuje Raskoljnikovljevu psihičku krhkost.",
      slika: Zlocinslika,
      izvor: "https://www.lektire.hr/zlocin-i-kazna/",
    },
    crnimacak: {
      ime: "Crni mačak",
      pisac: "Edgar Allan Poe",
      zanr: "Gotička fikcija",
      kratkisadrzaj:
        "Priča je ispričana u prvom licu, kroz perspektivu pripovedača koji opisuje svoj pad u ludilo i zločin koji je počinio. Pripovedač, nekada ljubitelj životinja, postaje sve nasilniji, najviše prema svom voljenom crnom mačku Plutonu. U stanju pijanstva, pripovedač vadi jedno oko Plutonu, a kasnije ga ubija obešivši ga na drvo. Nakon toga, njegova kuća biva uništena u požaru, a na jednom od zidova ostaje jedina netaknuta slika - obris obešenog mačka.Kasnije, pripovedač nalazi novog crnog mačka koji ima sličnu belu fleku na grudima. Njegova averzija prema mačku raste, a u trenutku besa, pokušava da ubije mačku sekirom, ali ubija svoju ženu koja pokušava da ga zaustavi. Pripovedač sakriva telo iza zida u podrumu, ali ga otkriva policija kada čuju mjaukanje mačke koju je slučajno zazidao zajedno sa telom.",
      analiza1:
        "Pripovedač: On je kompleksan i duboko defektan lik. Na početku, prikazan je kao ljubitelj životinja, ali postupno pokazuje svoju nasilnu prirodu i sklonost ka pijanstvu. Njegova spirala u ludilo i nasilje je centralna tema priče, a njegovo ponašanje odražava Poovu fascinaciju mračnim aspektima ljudske psihe.",
      analiza2:
        "Crni mačak (Pluton): Pluton simbolizuje nevinost i odanost, ali postaje žrtva pripovedačeve rastuće brutalnosti. Njegovo ime, koje asocira na rimskog boga podzemlja, nagoveštava njegovu povezanost sa smrću i osvetom.",
      analiza3:
        "Nova mačka:Nova mačka, slična Plutonu, dodatno pogoršava pripovedačevu krivicu i ludilo. Bela fleka na njenim grudima poprima oblik vešala, simbolizujući zločin i kaznu.",
      slika: Crnimacakslika,
      izvor: "https://www.lektire.hr/crni-macak/",
    },
    lovacuzitu: {
      ime: "Lovac u žitu",
      pisac: "Jerome David Salinger",
      zanr: "Roman",
      kratkisadrzaj:
        "Houlden Kolfild, šesnaestogodišnjak izbačen iz škole, odlazi u Njujork umesto da se odmah vrati kući. Tamo luta gradom, osećajući se usamljenim i depresivnim, pokušavajući da se poveže sa ljudima koje poznaje, uključujući devojku Sali Hejs. Njihov susret završava svađom, što dodatno pojačava Houldenovu izolaciju. Houlden često razmišlja o svom preminulom bratu Aliju, što produbljuje njegov osećaj gubitka. Poseti svoju sestru Fibi, jedinu osobu koja ga razume i suočava s njegovim ponašanjem. Na kraju, dok posmatra Fibi na vrtešci, Houlden oseća trenutak mira, a priču piše iz sanatorijuma gde se oporavlja.",
      analiza1:
        "Houlden Kolfild: Houlden je kompleksan lik, duboko nesiguran i zbunjen mladić. Njegov ciničan pogled na svet i odbijanje da prihvati društvene norme odražavaju njegovu unutrašnju borbu i osećaj gubitka. On idealizuje detinjstvo i prezire lažljivost odraslog sveta, što ga čini simbolom mladalačke pobune.",
      analiza2:
        "Fibi Kolfild: Fibi je Houldenova mlađa sestra i jedna od retkih osoba u njegovom životu koju zaista voli i poštuje. Ona predstavlja nevinost i čistotu koju Houlden želi da zaštiti. Njen lik služi kao kontrast Houldenovom ciničnom pogledu na svet i pruža mu utehu i nadu.",
      analiza3:
        "Sali Hejs: Sali je Houldenova poznanica iz Njujorka, sa kojom provodi jedan deo svog boravka u gradu. Njihov odnos je komplikovan i obeležen Houldenovom kontradiktornom prirodom – istovremeno želi bliskost, ali je odbija zbog svog straha od intimnosti i povezanosti.",
      slika: Lovacuzituslika,
      izvor: "https://www.lektire.hr/lovac-u-zitu/",
    },
    stranger: {
      ime: "Stranac",
      pisac: "Albert Camus",
      zanr: "Apsurdna fikcija",
      kratkisadrzaj:
        "Roman prati život Mersoa, običnog činovnika u Alžiru, koji živi ravnodušnim i otuđenim životom. Priča počinje smrću njegove majke, čiju smrt Merso dočekuje s neobičnom hladnokrvnošću. Nekoliko dana nakon sahrane, Merso započinje vezu sa Mari, koleginicom s posla, i druži se sa komšijom Remonom, sumnjivim likom uključenim u kriminalne aktivnosti.Merso, Remon i Mari odlaze na izlet na plažu, gde dolazi do sukoba s Arapinom, bratom Remonove bivše ljubavnice. Kasnije tog dana, Merso se ponovo susreće s Arapinom na plaži i, oslepljen suncem i vrućinom, impulsivno puca u njega, ubijajući ga.Merso je uhapšen i suđenje počinje, ali tokom procesa postaje jasno da je on suđen ne toliko zbog ubistva, koliko zbog svoje indiferentnosti prema društvenim normama. Na kraju, Merso je osuđen na smrt i čeka izvršenje kazne. U poslednjim trenucima, prihvata besmisao života i nalazi mir u svojoj apsurdnoj sudbini.",
      analiza1:
        "Merso: Merso je središnji lik romana, predstavnik apsurdnog junaka. Njegova ravnodušnost prema društvenim očekivanjima i normama, kao i nedostatak konvencionalnih emocija, ističu njegovu otuđenost. On živi trenutak po trenutak, vođen senzornim iskustvima više nego moralnim ili emocionalnim normama.",
      analiza2:
        "Mari: Mari je Mersoova devojka koja predstavlja tradicionalne vrednosti ljubavi i emocionalne povezanosti. Njena prisutnost u Mersoovom životu naglašava njegovu nesposobnost da se poveže na konvencionalan način.",
      analiza3:
        "Remon: Remon je komšija s kriminalnim sklonostima, koji vuče Mersoa u sukob koji vodi do ubistva. Njegova karakterizacija kao nasilnika kontrastira s Mersoovom pasivnošću.",
      slika: Strangerslika,
      izvor: "https://www.lektire.hr/lovac-u-zitu/",
    },
    antigona: {
      ime: "Antigona",
      pisac: "Sofoklo",
      zanr: "Tragedija",
      kratkisadrzaj:
        "Grčka tragedija koja prati sukob između Antigone i Kreonta. Nakon što Kreont naredi da se Polinikov leš ostavi nepokopan, Antigona, suprotno Kreontovoj odluci, odlučuje sahraniti svog brata. Kreont, neumoljiv u svojoj odluci, osuđuje Antigonu na smrt. Hemon, Kreontov sin i zaručnik Antigone, pokušava promijeniti očevu odluku, ali ne uspijeva. Antigona se objesi u grobnici, Hemon se ubije od tuge, a Kreontova žena, Euridika, također počini samoubistvo nakon što sazna za smrt sina. Drama završava tragedijom, prikazujući sukob između ljudskih zakona i božanske pravde.",
      analiza1:
        "Antigona: Glavna protagonistica, Antigona, predstavlja snagu individualnog morala i dužnosti prema porodici. Njena upornost u poštovanju božanskih zakona, čak i po cijenu vlastitog života, ističe je kao simbol hrabrosti i odlučnosti.",
      analiza2:
        "Kreont: Kralj Kreont simbolizira autoritet države i zakona. Njegova tvrdoglavost i nepopustljivost dovode do konflikta s Antigoninim moralnim principima. Kroz Kreonta, drama istražuje granice vlasti i posljedice tiranije.",
      analiza3:
        "Hemon: Hemon, Kreontov sin, predstavlja mladu ljubav i razumijevanje. Njegova pokušaja da ubijedi oca da promijeni stavove pokazuju sukob između autoriteta i ljubavi.",
      slika: Antigonaslika,
      izvor: "https://www.lektire.hr/antigona/",
    },
  };

  const book = books[id];

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

      <center>
        <div class="shop_vinyl">
          <div id="naslov">
            <div class="pagediv">
              <img src={Page} class="pageslika" alt="Page Image" />
              <h1 id="Name">{book.ime}</h1>
            </div>
          </div>
          <hr class="hrbook" />

          <br />
          <div class="opis">
            <div class="slika_shop">
              <img id="img_shop" src={book.slika} alt={book.ime} />
            </div>
            <div class="tekst">
              <p id="producer">
                <b>Pisac:</b>
                <Link class="linkPisac" to={`/pisci/${book.pisac}`}>
                  {book.pisac}
                </Link>
              </p>
              <p id="genre">
                <b>Žanr:</b> {book.zanr}
              </p>
              <h3>Kratki sadržaj:</h3>
              <p id="date">{book.kratkisadrzaj}</p>
              <h3>Analiza likova:</h3>
              <p id="cijena">{book.analiza1}</p>
              <p id="cijena">{book.analiza2}</p>
              <p id="cijena">{book.analiza3}</p>

              <button>
                <a class="izvorbook" href={book.izvor}>
                  Izvor
                </a>
              </button>
            </div>
          </div>
        </div>
      </center>
      <Footer />
    </div>
  );
}

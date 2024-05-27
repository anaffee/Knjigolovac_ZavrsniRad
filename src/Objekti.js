import "./Stylesheets/styles.css";
import Web from "./Components/Web";
export default function Objekti() {
  let Macak = {
    ime: "Mačak u čizmama",
    pisac: "Charles Perrault",
    zanr: "Bajka",
  };
  let Zlocin = {
    ime: "Zločin i kazna",
    pisac: "Fjodora Mihajloviča Dostojevskog",
    zanr: "Roman",
  };
  let LovacuZitu = {
    ime: "Lovac u žitu",
    pisac: "Jerome David Salinger",
    zanr: "Roman",
  };
  let Stranac = {
    ime: "Stranac",
    pisac: "Albert Camus",
    zanr: "Apsurdna fikcija",
  };
  let Antigona = {
    ime: "Antigona",
    pisac: "Sofoklo",
    zanr: "Tragedija",
  };
  let Crnimacak = {
    ime: "Crni mačak",
    pisac: "Edgar Allan Poe",
    zanr: "Gotička fikcija",
  };
  return (
    <div className="App">
      <Web
        Crnicat={Crnimacak}
        Antigonaa={Antigona}
        Stranger={Stranac}
        Lovac={LovacuZitu}
        Zlocinikazna={Zlocin}
        Cizme={Macak}
      />
    </div>
  );
}

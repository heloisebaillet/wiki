import Navigation from "./Navigation";
import Resultats from "./Resultats";
import { useEffect, useState } from "react";

function Saisie() {
  const [saisie, setSaisie] = useState("");
  const [listeResultat, setListeResultat] = useState([]);

  const getInput = (e) => {
    setSaisie(e.target.value);
  };

  const getReponse = async () => {
    let reponse = await fetch(
      `https://fr.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${saisie}&format=json`
    );
    let donnees = await reponse.json();
    console.log("reponse : ", donnees);
    setListeResultat(donnees[3]);
    console.log("listeResultat : ", listeResultat);
    setSaisie("");
  };

  const afficherListeResultat = () => {
    return listeResultat.map((item, key) => {
      return <Resultats key={key} lien={item} />;
    });
  };

  useEffect(() => {
    console.log("valeur variable : ", listeResultat), [listeResultat];
  });

  return (
    <div className="saisie">
      <Navigation />
      <h2>Veuillez taper votre recherche ci-dessous :</h2>
      <input
        type="text"
        placeholder="Recherche"
        id="searchBar"
        value={saisie}
        onChange={getInput}
      />
      <button className="btnValider" onClick={getReponse}>
        Valider
      </button>
      <div className="affichageReponse">
        <p className="pResultats">Vos Résultats :</p>
        <ol>{afficherListeResultat()}</ol>
      </div>
    </div>
  );
}

export default Saisie;

import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav className="navBarre">
        <Link to="/">Retourner à l'Accueil</Link>
        <Link to="/Saisie">Effectuer une Recherche</Link>
      </nav>
    </div>
  );
}

export default Navigation;

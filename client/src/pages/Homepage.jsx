import "./style/Homepage.scss";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">EGAL-IT</h1>
      <div className="text-homepage">
        <p>
          Le label “EGAL-IT” récompense les entreprises exemplaires en terme
          d’inclusivité des femmes dans le domaine de l’IT.{" "}
        </p>
        <br />
        <p>Vous souhaitez obtenir le label “EGAL-IT” ? </p>
        <br />
        <p>Participez à notre quizz sur l’inclusivité de votre entreprise.</p>
      </div>
      <div className="button-homepage">
        <Link to="/quizz">Commencer</Link>
      </div>
    </div>
  );
}

export default Homepage;

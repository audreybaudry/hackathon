import "./style/Homepage.scss";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="text-homepage">
        <p>
          Le label “EGAL-IT” récompense les entreprises exemplaires en terme
          d’inclusivité des femmes dans le domaine de l’IT.{" "}
        </p>
        <br />
        <p>
          Vous souhaitez obtenir le label “EGAL-IT” ? Il vous suffit de répondre
          à notre quizz sur l'inclusivité de votre entreprise et en quelques
          questions, vous pourrez savoir où vous vous situez concernant cette
          thématique comparé à d'autres entreprises de l'IT.
        </p>
        <br />
        <p>
          Alors n'hésitez plus et cliquez sur commencer pour démarrer le quizz.
        </p>
      </div>
      <div className="button-homepage">
        <Link to="/quizz" className="link-homepage">
          Commencer
        </Link>
      </div>
    </div>
  );
}

export default Homepage;

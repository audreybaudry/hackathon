import "./style/Homepage.scss";
import { Link } from "react-router-dom";
import img1 from "../assets/images/perso.png";
import img2 from "../assets/images/perso02.png";

function Homepage() {
  return (
    <div className="homepage-container">
      <img
        src={img1}
        alt="pixel art - personne sur un ordinateur"
        className="img-1-homepage"
      />
      <img
        src={img2}
        alt="pixel art - personne sur un ordinateur"
        className="img-2-homepage"
      />
      <div className="text-homepage">
        <p>
          Le label “EGAL-IT” récompense les entreprises exemplaires <br /> en
          terme d’
          <span className="color-yellow">inclusivité des femmes</span> dans le
          domaine de l’IT.{" "}
        </p>
        <br />
        <p>Vous souhaitez obtenir le label “EGAL-IT” ? </p>
        <br />
        <p>Participez à notre quizz sur l’inclusivité de votre entreprise !</p>
      </div>
      <div className="button-homepage">
        <Link to="/quizz">Commencer</Link>
      </div>
    </div>
  );
}

export default Homepage;

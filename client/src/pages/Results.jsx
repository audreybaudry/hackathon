import "./style/Results.scss";
import tick from "../assets/images/green-tick.png";

function Results() {
  return (
    <div className="Results-container">
      <h2 className="title-results">PROFIL DE VOTRE ENTREPRISE</h2>

      <div className="text-results">
        <div className="titles-text-results">
          <div className="number-title">
            <h3>1</h3>
          </div>
          <h3>La présence des femmes</h3>
          <img className="tick" alt="coche verte ou croix rouge" src={tick} />
        </div>
        <img
          className="diagram"
          alt="diagramme représentant les résultats"
          src="https://media.nouvelobs.com/ext/uri/sreferentiel.nouvelobs.com/file/rue89/8207db15624fe1548440d206c780fe8f.jpg"
        />
        <div className="entreprise">
          <h3 className="entreprise-results">VOTRE ENTREPRISE</h3>
          <p className="text">
            Vous vous situez dans les 20% des entreprises les plus inclusives.
            Bravo à vous, vous avez un taux de présence de femmes dans votre
            entreprise qui respecte le label EGAL-IT.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Results;

import "./Quizz.scss";

export default function QuizzPage() {
  return (
    <section className="quizz-page-container">
      <div className="question-reponse-container">
        <div className="index-container">Informations générales </div>
        <div className="one-question-container">
          <label htmlFor="entreprise-name">Nom de votre entreprise</label>
          <input type="text" id="entreprise-name" className="input-text" />
          <label htmlFor="entreprise-employees"> Nombre d'employé.e.s </label>
          <input
            type="number"
            id="entreprise-employees"
            className="input-number"
          />
          <button type="button">Démarrer le quizz &rsaquo; </button>
        </div>
      </div>
      <div className="question-reponse-container">
        <div className="index-container">1/10</div>
        <div className="one-question-container">
          Combien de femmes employez-vous ?
          <div>
            <input type="radio" id="less-10" name="female-employees-1" />
            <label htmlFor="less-10"> 10% et moins</label>
          </div>
          <div>
            <input type="radio" id="10-20" name="female-employees-1" />
            <label htmlFor="10-20"> 10% à 20%</label>
          </div>
          <div>
            <input type="radio" id="20-30" name="female-employees-1" />
            <label htmlFor="20-30"> 20% à 30%</label>
          </div>
          <div>
            <input type="radio" id="30+" name="female-employees-1" />
            <label htmlFor="30+"> 30% ou plus </label>
          </div>
          <button type="button" id="button-real-question">
            Continuer &rsaquo;{" "}
          </button>
        </div>
      </div>
      <div className="question-reponse-container">
        <div className="index-container">2/10</div>
        <div className="one-question-container">
          Combien de femmes employez-vous ?
          <div>
            <input type="radio" id="less-10-2" name="female-employees-2" />
            <label htmlFor="less-10-2"> 10% et moins</label>
          </div>
          <div>
            <input type="radio" id="10-20-2" name="female-employees-2" />
            <label htmlFor="10-20-2"> 10% à 20%</label>
          </div>
          <div>
            <input type="radio" id="20-30-2" name="female-employees-2" />
            <label htmlFor="20-30-2"> 20% à 30%</label>
          </div>
          <div>
            <input type="radio" id="30+-2" name="female-employees-2" />
            <label htmlFor="30+-2"> 30% ou plus </label>
          </div>
          <button type="button" id="button-real-question">
            Continuer &rsaquo;{" "}
          </button>
        </div>
      </div>
    </section>
  );
}

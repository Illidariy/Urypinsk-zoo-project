const React = require("react");

function AnimalCard({ animal, user }) {
  return (
    <div data-id={animal.id} className="cardAnimal m-3">
      <img src={animal.uri} className="card-img-top" alt={animal.name} />
      <div className="card-body">
        <h5 className="card-title">{animal.name}</h5>
        <p className="card-text">{animal.describe}</p>
      </div>
      <div className="card-body">
        <a href="#" class="card-link">
          Галерея
        </a>
        {user &&
        <div>
        <button type="button" className="btn btn-primary deleteCard">delete</button>
        </div>}
      </div>
    </div>
  );
}
module.exports = AnimalCard;

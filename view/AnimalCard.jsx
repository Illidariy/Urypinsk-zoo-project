const React = require("react");
const Modal = require("./Modal");

function AnimalCard({ animal, user }) {
  return (
    <div data-id={animal.id} className="cardAnimal m-3">
      <img src={animal.uri} className="card-img-top" alt={animal.name} />

      <div className="card-body-text">
        <h3 className="card-title animalName">{animal.name}</h3>
        <p className="card-text animalDescribe">{animal.describe}</p>
      </div>
      <div className="card-body-gallery">
        <a href={`/animals/${animal.id}`} className="card-link">
          Галерея
        </a>
        {user && (
          <div>
            <button type="button" className="btn btn-primary deleteCard">
              delete
            </button>
            <button
              type="button"
              class="btn btn-primary editCard"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              edit
            </button>
            <Modal animal={animal} />
          </div>
        )}
      </div>
    </div>
  );
}
module.exports = AnimalCard;

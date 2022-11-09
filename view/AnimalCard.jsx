const React = require("react");

function AnimalCard({ animal }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={animal.uri} className="card-img-top" alt={animal.name} />
      <div className="card-body">
        <h5 className="card-title">{animal.name}</h5>
        <p className="card-text">{animal.describe}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"></li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
      </div>
    </div>
  );
}
module.exports = AnimalCard;

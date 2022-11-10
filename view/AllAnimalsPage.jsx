const React = require("react");
const AnimalCard = require("./AnimalCard.jsx");
const Layout = require("./Layout.jsx");
const NavBar = require("./NavBar");

module.exports = function AllAnimalsPage({ animals, title }) {
  return (
    <Layout title={title}>
      <NavBar />
      <div className="card-group">
        {animals.map((animal) => (
          <AnimalCard animal={animal} key={animal.id} />
        ))}
      </div>
    </Layout>
  );
};

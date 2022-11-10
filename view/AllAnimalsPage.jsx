const React = require("react");
const AnimalCard = require("./AnimalCard.jsx");
const Layout = require("./Layout.jsx");
const NavBar = require("./NavBar");

module.exports = function AllAnimalsPage({ animals, title, user }) {
  return (
    <Layout title={title}>
      <NavBar user={user} />
      <div className="card-group">
        {animals.map((animal) => (
          <AnimalCard user={user} animal={animal} key={animal.id} />
        ))}
      </div>
    </Layout>
  );
};

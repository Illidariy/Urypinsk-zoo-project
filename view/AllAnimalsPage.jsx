const React = require("react");
const AnimalCard = require("./AnimalCard.jsx");
const EmptyCard = require("./emptyCard.jsx");
const Layout = require("./Layout.jsx");
const NavBar = require("./NavBar");

module.exports = function AllAnimalsPage({ animals, title, user }) {
  return (
    <Layout title={title}>
      <NavBar user={user} />
      <div className="card-group">
        {user && <EmptyCard/>}
        {animals.map((animal) => (
          <AnimalCard user={user} animal={animal} key={animal.id} />
        ))}
      </div>
    </Layout>
  );
};

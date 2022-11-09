const React = require("react");
const AnimalCard = require("./AnimalCard.jsx");
const Layout = require("./Layout.jsx");

module.exports = function AllAnimalsPage({ animals, title }) {
  return (
    <Layout title={title}>
      {animals.map((animal) => (
        <AnimalCard animal={animal} key={animal.id} />
      ))}
    </Layout>
  );
};

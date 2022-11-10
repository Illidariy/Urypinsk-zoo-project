const React = require("react");
const NavBar = require("./NavBar");
const Layout = require("./Layout");

function AnimalPage({ galery, title, user }) {
  return (
    <Layout title={title}>
      <NavBar user={user} />
      <div className="card-group">
        {galery.map((photo) => (
          <div key={photo.id}>
            <img className="galery" src={photo.uri} alt="..." />
          </div>
        ))}
      </div>
    </Layout>
  );
}
module.exports = AnimalPage;

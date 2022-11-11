const React = require("react");
const NavBar = require("./NavBar");
const Layout = require("./Layout");

function AnimalPage({ galery, title, user, animalName }) {
  return (
    <Layout title={title}>
      <NavBar user={user} />
      <div className="card-group">
        <div className="galery blockAdd">
          <form method='POST' id="addNewAnimal" data-set={`${animalName.id}`}>
            <h2>{`Добавьте фотографии животного вида: "${animalName.name}"`}</h2>
            <input type="file" name="pic" multiple />
            <br></br>
            <button className="btn btn-primary m-3 addBtn" type='submit'>add</button>
          </form>
          <div className="otvet"></div>
        </div>
        {galery.map((photo) => (
          <div key={photo.id}>
            <img  className="galery" src={photo.uri} alt="..." />
          </div>
        ))}
      </div>

    </Layout>
  );
}
module.exports = AnimalPage;

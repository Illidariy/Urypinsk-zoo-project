const React = require("react");
const Layout = require("./Layout");
const NavBar = require("./NavBar");

module.exports = function Tariffs() {
  return (
    <Layout>
      <NavBar />
      <div className="container">
        <form action="/tarrifs" className="tarrifs">
          <br></br>
          <h3>Тариф в будние</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Для взрослых</th>
                <th scope="col">Для детей</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>700</td>
                <td>500</td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <h3>Тариф в выходные</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Для взрослых</th>
                <th scope="col">Для детей</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1000</td>
                <td>700</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </Layout>
  );
};

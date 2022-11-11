const React = require("react");
const Layout = require("./Layout");
const NavBar = require("./NavBar");

module.exports = function Tariffs({ user, myTar }) {
  const arr = [...myTar];
  arr.sort((a,b)=> b.id - a.id)
  return (
    <Layout>
      <NavBar user={user} />
      <div className="container js-tariffs">
          <br></br>
          <div className="tariffBlock">
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
                  <td>
                  <form id={arr[2].id} method="put">
                  <span className="new">{arr[2].price}</span>
                  <input name='price_adult' type="text" />
                  <button type="submit">Изменить</button>
                  </form>
                  </td>
                  
                    <td>
                    <form id={arr[3].id} method="put">
                    <span className="new">{arr[3].price}</span>
                    <input name='price_adult' type="text" />
                    <button type='submit'>Изменить</button>
                    </form>
                    </td>
                  
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
          <div className="tariffBlock">
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
                  <td>
                  <form id={arr[0].id} method="put">
                    <span className="new">{arr[0].price}</span>
                    <input name='price_adult' type="text" />
                    <button type='submit'>Изменить</button>
                    </form>
                    </td>
                  <td>
                  <form id={arr[1].id} method="put">
                    <span className="new">{arr[1].price}</span>
                    <input name='price_adult' type="text" />
                    <button type='submit'>Изменить</button>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      <script defer src='/js/editTariffs.js'></script>
      </div>
    </Layout>
  );
};

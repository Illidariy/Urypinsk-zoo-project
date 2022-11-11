const React = require("react");
const Layout = require("./Layout");
const NavBar = require("./NavBar");

module.exports = function Main({ user }) {
  return (
    <Layout>
      <NavBar user={user} />
      <div className="lemurImg">
        <h1 className="main-title">
          ДОБРО ПОЖАЛОВАТЬ <br></br> В УРЮПИНСКИЙ ЗООПАРК
        </h1>
      </div>
    </Layout>
  );
};

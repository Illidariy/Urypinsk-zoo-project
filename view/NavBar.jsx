const React = require("react");

module.exports = function NavBar({ user }) {
  return (
    <nav
      className="navbar navbar-dark bg-dark"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <a className="navbar-brand p-2" href="/">
        Главная
      </a>
      <a className="navbar-brand" href="/animals">
        Наши животные
      </a>
      <a className="navbar-brand" href="/tariffs">
        Тарифы
      </a>
      {user && (
        <a className="navbar-brand" href="/logout">
          Logout
        </a>
      )}
    </nav>
  );
};

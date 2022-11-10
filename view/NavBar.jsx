const React = require('react')

module.exports = function NavBar({ user }) {
  return (
    <nav className="navbar navbar-dark bg-dark">     
        <a className="navbar-brand" href="/">Zoo</a>
        <a className="navbar-brand" href="/animals">Animals</a>
        <a className="navbar-brand" href="/tariffs">Tariffs</a>
        {user && <a className="navbar-brand" href="/logout">Logout</a>}
    </nav>
  );
}
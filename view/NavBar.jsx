const React = require('react')

module.exports = function NavBar({ user }) {
  return (
    <nav className="navbar navbar-dark bg-dark" style={{ display: 'flex', justifyContent: 'space-around'}}>     
        <a className="navbar-brand p-2" href="/">Zoo</a>
        <a className="navbar-brand" href="/animals">Animals</a>
        <a className="navbar-brand" href="/tariffs">Tariffs</a>
        {user && <a className="navbar-brand" href="/logout">Logout</a>}
    </nav>
  );
}
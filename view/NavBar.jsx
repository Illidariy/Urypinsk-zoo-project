const React = require('react')

module.exports = function NavBar ({user}) {
return(
  (!user ? 
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/">Zoo</a>
      <a className="nav-item nav-link active" href="/animals">Animals</a>
      <a className="nav-item nav-link active" href="/tariffs">Tariffs</a>
    </div>
  </div>
</nav> :
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/">Zoo</a>
      <a className="nav-item nav-link active" href="/animals">Animals</a>
      <a className="nav-item nav-link active" href="/tariffs">Tariffs</a>
      <a className="nav-item nav-link active" href="/logout">Logout</a>
    </div>
  </div>
</nav> 
  )
)
}
const React = require('react')

module.exports = function NavBar () {
return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/">Zoo</a>
      <a class="nav-item nav-link active" href="/animals">Animals</a>
      <a class="nav-item nav-link active" href="/tariffs">Tariffs</a>
    </div>
  </div>
</nav>
)
}
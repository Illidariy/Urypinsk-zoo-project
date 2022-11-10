const React = require('react')
const Layout = require('./Layout')
const NavBar = require('./NavBar')

module.exports = function Loga() {
  return (
    <Layout>
      <NavBar />
      <div className='conteiner logBlock'>
        <form className='adminForm' action='/admin' method='post'>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Log in</label>
            <input name='login' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input name='password' type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className='infoBlock'></div>
      </div>
    </Layout>
  )
}
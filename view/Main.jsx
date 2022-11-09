const React = require('react');
const NavBar = require('./NavBar');
const Layout = require('./Layout')

module.exports = function Main ({user}) {
  return (
    <Layout>
      <NavBar admin={user}/>
      <div className='lemurImg'>
        <h1>ДОБРО ПОЖАЛОВАТЬ В УРЮПИНСКИЙ ЗООПАРК</h1>
      </div>
    </Layout>
  )
}
const React = require('react');
const Layout = require('./Layout')
const NavBar = require('./NavBar');

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
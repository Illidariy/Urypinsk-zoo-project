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
        {/* <div className="ourZoo">
          <p className="zooText">
            Зоопарк – уникальный дом живой природы для 900 видов млекопитающих,
            птиц, рыб и беспозвоночных из разных уголков Земли в самом сердце
            Урюпинска. Это просветительное, природоохранное учреждение, дающее
            возможность любому желающему познакомиться с биологическим
            разнообразием всей планеты, не покидая пределов города, расширить
            свой кругозор в области биологии, зоологии, экологии и, конечно,
            интересно и с пользой провести время!
          </p>
        </div> */}
      </div>
    </Layout>
  );
};

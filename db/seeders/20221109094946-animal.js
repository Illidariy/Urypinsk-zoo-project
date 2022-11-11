/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const animal = [
      { name: 'Слон', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/African_Bush_Elephant_Mikumi_cropped.jpg/640px-African_Bush_Elephant_Mikumi_cropped.jpg', describe: 'Слоны — самые крупные наземные животные на Земле. Обитают они в Юго-Восточной Азии и Африке в тропических лесах и саваннах. Самыми крупными являются африканские саванные слоны, их масса может превышать 6 тонн' },
      { name: 'Тупик', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Atlantic_puffin_055.jpg/220px-Atlantic_puffin_055.jpg', describe: 'Русское название «тупик» происходит от слова «тупой» и связано с массивной, округлой формой клюва птицы. Латинское название Fratercula arctica означает «арктический монашек», и было дано из-за того, что внешне птица напоминает монаха в рясе. Английское название puffin — «толстячок» связано с неуклюжим видом птицы' },
      { name: 'Обыкновенная тупайя', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stavenn_Tupaia_glis_00.jpg/275px-Stavenn_Tupaia_glis_00.jpg', describe: 'Широко распространены в тропических лесах, в горах доходя до 3000 м над уровнем моря; встречаются также на плантациях и в садах. Часто держатся вблизи человеческого жилья. Тупайи напоминают белок не только внешним видом, но и повадками. Как и белки, это дневные животные, устраивающие убежища в дуплах упавших деревьев, под корнями, в полостях бамбука и т. п.' },
      { name: 'Очковый медведь', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Urso_de_%C3%B3culos.jpg/275px-Urso_de_%C3%B3culos.jpg', describe: 'Очковый медведь (лат. Tremarctos ornatus), также называемый андским — хищное млекопитающее семейства медвежьих. Единственный выживший представитель подсемейства короткомордых медведей. ' },
      { name: 'Коала', uri: 'http://c.files.bbci.co.uk/11C76/production/_123222827_gettyimages-510169460.jpg', describe: 'Коáла (лат. Phascolarctos cinereus) — вид сумчатых, обитающий в Австралии. Единственный современный представитель семейства коаловых (Phascolarctidae) из отряда двурезцовых сумчатых (Diprotodontia).' },
      { name: '', uri: '', describe: '' },
      { name: '', uri: '', describe: '' },
      { name: '', uri: '', describe: '' },
    ];
    const data = animal.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Animals', data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Animals');
  },
};

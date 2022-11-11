/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const animal = [
      { name: 'Слон', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/African_Bush_Elephant_Mikumi_cropped.jpg/640px-African_Bush_Elephant_Mikumi_cropped.jpg', describe: 'Слоны — самые крупные наземные животные на Земле. Обитают они в Юго-Восточной Азии и Африке в тропических лесах и саваннах. Самыми крупными являются африканские саванные слоны, их масса может превышать 6 тонн.Характерным органом слона является хобот, образованный из носа и верхней губы и заканчивающийся одним или двумя отростками.' },
      { name: 'Тупик', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Atlantic_puffin_055.jpg/220px-Atlantic_puffin_055.jpg', describe: 'Русское название «тупик» происходит от слова «тупой» и связано с массивной, округлой формой клюва птицы. Латинское название Fratercula arctica означает «арктический монашек», и было дано из-за того, что внешне птица напоминает монаха в рясе. Английское название puffin — «толстячок» связано с неуклюжим видом птицы' },
      { name: 'Обыкновенная тупайя', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stavenn_Tupaia_glis_00.jpg/275px-Stavenn_Tupaia_glis_00.jpg', describe: 'Широко распространены в тропических лесах, в горах доходя до 3000 м над уровнем моря; встречаются также на плантациях и в садах. Часто держатся вблизи человеческого жилья. Тупайи напоминают белок не только внешним видом, но и повадками. Как и белки, это дневные животные, устраивающие убежища в дуплах упавших деревьев, под корнями, в полостях бамбука и т. п.' },
      { name: 'Очковый медведь', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Urso_de_%C3%B3culos.jpg/275px-Urso_de_%C3%B3culos.jpg', describe: 'Очковый медведь (лат. Tremarctos ornatus), также называемый андским — хищное млекопитающее семейства медвежьих. Единственный выживший представитель подсемейства короткомордых медведей. ' },
      { name: 'Коала', uri: 'http://c.files.bbci.co.uk/11C76/production/_123222827_gettyimages-510169460.jpg', describe: 'Коáла (лат. Phascolarctos cinereus) — вид сумчатых, обитающий в Австралии. Единственный современный представитель семейства коаловых (Phascolarctidae) из отряда двурезцовых сумчатых (Diprotodontia).' },
      { name: 'Байкальская нерпа', uri: 'https://webpulse.imgsmail.ru/imgpreview?mb=webpulse&key=pulse_cabinet-image-a790ce18-b7c6-49b7-8dab-8ea718422491&fu=1&kr=1&h=565&w=630', describe: 'Байка́льская не́рпа, или байкальский тюлень (лат. Pusa sibirica) — один из трёх пресноводных видов тюленя в мире, эндемик озера Байкал, реликт третичной фауны.Обитает в озере Байкал, особенно широко в северной и средней его частях. В июне на берегах Ушканьих островов можно наблюдать большое количество этих животных — острова являются их естественным лежбищем.' },
      { name: 'Выдра', uri: 'https://theanimalw.com/wp-content/uploads/2016/02/396.jpg', describe: 'Вы́дра, также речная выдра, или обыкновенная выдра (лат. Lutra lutra) — вид хищных млекопитающих из семейства куньих, ведущих полуводный образ жизни.Выдра — крупный зверь с вытянутым гибким телом обтекаемой формы. Длина тела — 55-95 см, масса — 6-10 кг' },
      { name: 'Сурок', uri: 'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/212/594/5.jpg', describe: 'Сурки образуют отчётливо выраженную группу из 14 или 15 видов, в рамках семейства беличьих. Это относительно крупные, весом в несколько килограммов, животные, обитающие в открытых ландшафтах, в сооружаемых самостоятельно норах.' },
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

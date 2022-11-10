/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const photo = [
      { animalId: '1', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfIHNq2BHkJe7B_1MJ5HCcMwMPQt1-mWOug&usqp=CAU' },
      { animalId: '1', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt06RcWb3gizA-A5N3Y8m_0CjgVNjs2EZk4Q&usqp=CAU' },
      { animalId: '1', uri: 'https://static6.depositphotos.com/1092937/587/i/450/depositphotos_5874398-stock-photo-single-walking-elephant.jpg' },
      { animalId: '1', uri: 'https://n1s1.hsmedia.ru/69/8a/de/698ade49d9229f45727f703c284847bc/2600x2600_0xac120003_19120395641663684302.jpeg' },
      { animalId: '1', uri: 'https://cs.pikabu.ru/post_img/2013/06/05/10/1370451026_269541045.jpg' },
      { animalId: '1', uri: 'https://faunistics.com/wp-content/uploads/2020/08/1.jpg' },
      { animalId: '2', uri: 'https://givnost.ru/wp-content/uploads/2019/07/tupik-ptitsa-opisanie-osobennosti-vidy-obraz-zhizni-i-sreda-obitaniya-tupika-16.jpg' },
      { animalId: '2', uri: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/1367F/production/_97978497_gettyimages-147096740.jpg' },
      { animalId: '2', uri: 'https://zooclub.ru/attach/1499.jpg' },
      { animalId: '2', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VLIAa7xbEyabDudPuG1duCaizuE3EKEP5ile4kUDuVWJi1t0Q7_ieKEsei-yYJTFi-8&usqp=CAU' },
      { animalId: '2', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD1a3ykoO3wLs5sqqTRUsiIC8SYVil8bRc21WjUxSVmsmLh3wPW-qrLV0es5dRPc62j8A&usqp=CAU' },
      { animalId: '2', uri: 'https://cdn.fishki.net/upload/post/2021/11/17/4003823/6d8a62205cf80b50826506ab0418a8c3.png' },
      { animalId: '3', uri: 'https://cdn.fishki.net/upload/post/2021/06/05/3785017/1-s1200.jpg' },
      { animalId: '3', uri: 'https://www.krasnouhie.ru/wp-content/uploads/2018/06/3654.jpg' },
      { animalId: '3', uri: 'https://www.zoo-ekzo.ru/sites/default/files/images/tupaia_javanica.jpg' },
      { animalId: '3', uri: 'https://media.izi.travel/263fc413-3ed9-44da-a34c-f86a9ffd0ac6/342fb940-22b7-4903-90c8-6ffbe0d7b7dc_800x600.jpg' },
      { animalId: '3', uri: 'https://cs6.pikabu.ru/post_img/2017/05/24/6/149561395462442352.png' },
      { animalId: '3', uri: 'https://wildfauna.ru/wp-content/uploads/2019/07/tupaia-2.jpg' },
      { animalId: '4', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyj3HM3uwziEcKW5Zmip2SsIMwq7fc3Jddgw&usqp=CAU' },
      { animalId: '4', uri: 'https://national-travel.ru/wp-content/uploads/wtt-images/2019/01/lyubimaya-poza-5960f5b82bb56.jpg' },
      { animalId: '4', uri: 'https://farm3.staticflickr.com/2459/3615668363_03d1959f73_b.jpg' },
      { animalId: '4', uri: 'https://mirplaneta.ru/images/2/387.jpg' },
      { animalId: '4', uri: 'https://www.peru.ru/upload/resize_cache/iblock/16b/550_500_1/sjrs3rqmoqnbjny465djyq2zohwj1f4j.jpg' },
      { animalId: '4', uri: 'https://colibris62bethune.org/wp-content/uploads/ee99aeff49a8bd12694ffe5118d2a18b.jpg' },
      { animalId: '5', uri: 'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/256/256/8.jpg' },
      { animalId: '5', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/President_Obama_holding_a_koala_3.jpg/300px-President_Obama_holding_a_koala_3.jpg' },
      { animalId: '5', uri: 'https://www.krasnouhie.ru/wp-content/uploads/2017/11/vse-o-koalah.jpg' },
      { animalId: '5', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnUGn1l6rOLKhR6RkvSSp8EWYjQ5ZN-XrSpIXfqomQEr0_JE9lzz6sYUTz7JZTNlr28M&usqp=CAU' },
      { animalId: '5', uri: 'https://im.kommersant.ru/Issues.photo/NAUKA_Online/2022/02/28/KPE_000053_00001_1_t218_151254.jpg' },
      { animalId: '5', uri: 'https://oir.mobi/uploads/posts/2021-05/1620871320_13-oir_mobi-p-lenivets-i-koala-zhivotnie-krasivo-foto-15.jpg' },
    ];
    const data = photo.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Photos', data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Photos');
  },
};

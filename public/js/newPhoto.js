const addPhoto = document.querySelector('#addNewAnimal');
console.log(addPhoto.dataset.set);

addPhoto.addEventListener('submit', async (event) => {
  event.preventDefault();
  const picFile = await event.target.pic.files;
  if (!picFile.length) {
    return document.querySelector('.otvet').innerHTML = 'Добавьте фото';
  }
  const newFile = new FormData();
  const array = [...picFile];
  array.forEach((el) => {
    newFile.append('homesImg', el);
  });
  console.log(newFile);
  const responseWithPic = await fetch(`/animals/${addPhoto.dataset.set}/arr`, {
    method: 'POST',
    body: newFile,
  });
  const dataWithPic = await responseWithPic.json();
  console.log(dataWithPic);

  dataWithPic.forEach(async (el) => {
    const response = await fetch(`/animals/${addPhoto.dataset.set}/test`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ pic: el }),
    });
    const data = await response.json();

    const bloackAdd = document.querySelector('.blockAdd');
    const html = `<div >
    <img  class="galery" src=${data.uri} alt="..." />
  </div>`;
    bloackAdd.insertAdjacentHTML('afterend', html);
  });
  addPhoto.reset();
});

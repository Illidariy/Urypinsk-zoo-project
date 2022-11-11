const addForm = document.querySelector('#addForm');

addForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { name, describe } = event.target;
  const picFile = await event.target.pic.files;
  const newFile = new FormData();
  const array = [...picFile];
  array.forEach((el) => {
    newFile.append('homesImg', el);
  });
  const responseWithPic = await fetch('/animals/test', {
    method: 'POST',
    body: newFile,
  });
  const dataWithPic = await responseWithPic.json();
  // console.log(dataWithPic);

  const response = await fetch('/animals', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ name: name.value, describe: describe.value, pic: dataWithPic.path }),
  });
  const data = await response.json();
  console.log(data);
  const cardConteiner = document.querySelector('.addForm');
  const html = `<div> <div data-id=${data.id} class="cardAnimal m-3">
    <img src=${data.uri} class="card-img-top" alt=${data.name} />

  <div class="card-body">
    <h5 class="card-title animalName">${data.name}</h5>
    <p class="card-text animalDescribe">${data.describe}</p>
  </div>
  <div class="card-body">
    <a href=/animals/${data.id} class="card-link">
      Галерея
    </a>
    <div>
    <button type="button" class="btn btn-primary deleteCard">delete</button>
    <button type="button" class="btn btn-primary editCard" data-toggle="modal" data-target="#exampleModalCenter">edit</button>
    <Modal animal=${data}/>
    </div>
  </div>
</div>
<div/>`;
  cardConteiner.insertAdjacentHTML('afterend', html);
});

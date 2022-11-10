const editBtn = document.querySelectorAll('.editCard');

editBtn.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const cardAnimal = event.target.closest('.cardAnimal');
    const animalId = cardAnimal.dataset.id;
    const modal = cardAnimal.querySelector('#myModal');
    const span = cardAnimal.getElementsByClassName('close')[0];
    modal.style.display = 'block';
    const editForm = cardAnimal.querySelector('#editForm');

    editForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const { name, describe } = e.target;

      const response = await fetch(`animals/${animalId}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ name: name.value, describe: describe.value }),
      });
      const data = await response.json();
      cardAnimal.querySelector('.animalName').innerHTML = data.name;
      cardAnimal.querySelector('.animalDescribe').innerHTML = data.describe;
    });

    span.onclick = function () {
      modal.style.display = 'none';
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (ev) {
      if (ev.target === modal) {
        modal.style.display = 'none';
      }
    };
  });
});

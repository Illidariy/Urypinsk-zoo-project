const editBtn = document.querySelectorAll('.editCard');

editBtn.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const cardAnimal = event.target.closest('.cardAnimal');
    const animalId = cardAnimal.dataset.id;
    const modal = document.querySelector('#myModal');
    const span = document.getElementsByClassName('close')[0];
    modal.style.display = 'block';

    span.onclick = function () {
      modal.style.display = 'none';
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  });
});

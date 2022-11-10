const deleteBtn = document.querySelectorAll('.deleteCard');

deleteBtn.forEach((button) => {
  button.addEventListener('click', async (event) => {
    const cardAnimal = event.target.closest('.cardAnimal');
    const animalId = cardAnimal.dataset.id;

    const response = await fetch(`animals/${animalId}`, {
      method: 'delete',
    });
    if (response.ok) {
      cardAnimal.remove();
    } else {
      console.log('error');
    }
  });
});

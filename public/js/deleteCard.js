// const deleteBtn = document.querySelectorAll('.deleteCard');
const cardGroup = document.querySelector('.card-group');

cardGroup.addEventListener('click', async (e) => {
  if (e.target.className.includes('deleteCard')) {
    const cardAnimal = e.target.closest('.cardAnimal');
    const animalId = cardAnimal.dataset.id;

    const response = await fetch(`animals/${animalId}`, {
      method: 'delete',
    });
    if (response.ok) {
      cardAnimal.remove();
    } else {
      console.log('error');
    }
  }
});

// deleteBtn.forEach((button) => {
//   button.addEventListener('click', async (event) => {
//     const cardAnimal = event.target.closest('.cardAnimal');
//     const animalId = cardAnimal.dataset.id;

//     const response = await fetch(`animals/${animalId}`, {
//       method: 'delete',
//     });
//     if (response.ok) {
//       cardAnimal.remove();
//     } else {
//       console.log('error');
//     }
//   });
// });

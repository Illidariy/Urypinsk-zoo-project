document.querySelector('.card-group').addEventListener('click', async (event) => {
  if (event.target.className.includes('DeleteAnimal')) {
    const photoCard = event.target.closest('.topCont');
    const photoId = photoCard.dataset.set;
    const response = await fetch(`animals/${photoId}`, {
      method: 'delete',
    });
    if (response.ok) {
      photoCard.remove();
    } else {
      console.log('error');
    }
  }
});

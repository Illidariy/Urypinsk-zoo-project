const formTariff = document.querySelector('.js-tariffs');
if (formTariff) {
  formTariff.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log(event.target);
    const {
      id, price_adult, price_child, action,
    } = event.target;

    const res = await fetch(`/tariffs/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        newPrice: price_adult.value,
      }),
    });
    const data = await res.json();
    const form = document.getElementById(`${id}`);
    const span = form.querySelector('.new').innerHTML = data.price;
  });
}

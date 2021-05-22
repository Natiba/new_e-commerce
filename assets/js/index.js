import products from './db.js';

const container = document.getElementById('container'); //cambio promo x container!!
const btnChocolate = document.getElementById('chocolate');
const btnchicle = document.getElementById('chicle');
const btnSnak = document.getElementById('snack');

btnChocolate.addEventListener('click', () => {
  getProducts('chocolate');
});
btnchicle.addEventListener('click', () => {
  getProducts('chicle');
});
btnSnak.addEventListener('click', () => {
  getProducts('snacks');
});

const getProducts = (categoria) => {

  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }

  products.forEach(product => {
    if (product.category === categoria) {
      let image = document.createElement('img');
      image.src = product.image;
      container.appendChild(image);

      let h2 = document.createElement('h2');
      h2.setAttribute('class', 'titulo');
      h2.textContent = product.name;
      container.appendChild(h2);

      let p1 = document.createElement('p');
      p1.textContent = product.price;
      container.appendChild(p1);

      if (product.stock > 0) {

        let count = document.createElement('input'); // Crea un input
        count.setAttribute('type', 'number'); // A ese input de asigna un atributo (type="number")
        count.setAttribute('id', `count_${product.id}`); // A ese input de doy un id (id="product_NUMERO")
        count.setAttribute('value', 1); // A ese input le asignamois el valor 1
        container.appendChild(count); // insertamos en el container ese input

        let cantidad = document.getElementById(`count_${product.id}`); // Capturamos ese input para manipularlo

        let btnPurchase = document.createElement('button'); // Crea un botón
        btnPurchase.setAttribute('id', `btn_${product.id}`); // Le da una ID
        btnPurchase.textContent = 'Agregar al carrito'; // Le da un contenido en forma de texto
        container.appendChild(btnPurchase); //insertamos en el container ese botón

        btnPurchase.addEventListener('click', () => { // Al botón le asignamos un evento de escucha
          const total = product.price * cantidad.value; // Cantidad * precio
          console.log(total);
          /*  */
        });

      } else {
        let p = document.createElement('p');
        p.textContent = 'No hay en stock';
        container.appendChild(p);
      }
    }
  });
};
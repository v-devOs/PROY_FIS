
// Seleccionar los botones de sabor, tamaño y hielo
const tamanoButtons = document.querySelectorAll('.btn-size-ch, .btn-size-md, .btn-size-g');
const hieloButtons = document.querySelectorAll('.btn-ice-yes, .btn-ice-no');


let tamano;
let hielo;




tamanoButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      tamano = event.target.innerText;
      console.log(`Tamaño seleccionado: ${tamano}`);
    });
  });
  
  

  hieloButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      hielo = event.target.innerText;
      console.log(`Hielo seleccionado: ${hielo}`);
    });
  });
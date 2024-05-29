
// Seleccionar los botones de sabor, tamaño y hielo
const tamanoButtons = document.querySelectorAll('.btn-size-ch, .btn-size-md, .btn-size-g');
const hieloButtons = document.querySelectorAll('.btn-ice-yes, .btn-ice-no');
const flavorButtons = document.querySelectorAll('.btn-flavor-lemon, .btn-flavor-jamaica, .btn-flavor-horchata');

const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const modalAccept = document.getElementById('modal-accept');
const modalCancel = document.getElementById('modal-cancel');

const bottle = document.getElementById('bottle');


let tamano;
let hielo;
let selectedHielo = '';
let selectedFlavor = '';

modalCancel.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});


document.addEventListener('DOMContentLoaded', () => {

  let selectedTamano = '';

  tamanoButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      selectedTamano = event.target.innerText;
      modalText.innerText = `Tamaño seleccionado: ${selectedTamano}`;
      modal.style.display = 'block';
    });
  });

  modalAccept.addEventListener('click', () => {
    modal.style.display = 'none';
    showBottleSize(selectedTamano, bottle)
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const iceContainer = document.getElementById('ice-container');

  hieloButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      selectedHielo = event.target.innerText;
      modalText.innerText = `Opción seleccionada: ${selectedHielo}`;
      modal.style.display = 'block';
    });
  });

  flavorButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
      selectedFlavor = event.target.innerText;
      modalText.innerText = `Sabor seleccionado: ${selectedFlavor}`;
      modal.style.display = 'block';
    })
  });

  modalAccept.addEventListener('click', () => {
    modal.style.display = 'none';

    iceContainer.style.display = 
      selectedHielo === 'Agregar hielo' ? 'flex' : 'none'

    if (selectedFlavor !== ''){
      setFlavor(selectedFlavor)
    }
  });

});


function showBottleSize(selectedTamano, componente){
  tamano = selectedTamano;
  switch(selectedTamano){
    case 'Chico 500ml':
      componente.className = 'small-bottle'
      break;
    case 'Mediano 750ml':
      componente.className = 'medium-bottle'
      break
    case 'Grande 1000ml':
      componente.className = 'glass'
      break

  }
}
  
function setFlavor(flavor){
  selectedFlavor = flavor;
}
  
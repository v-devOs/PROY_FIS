
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
      changeColorOfTheDrink(selectedFlavor)
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
  
function changeColorOfTheDrink(flavor){
    switch (flavor) {
      case 'Jamaica':
        bottle.style.background = 'var(--red-color)'
        break;
      case 'Horchata':
        bottle.style.background = 'var(--white)';
        break;
      case 'Limón':
        bottle.style.background = 'var(--green-color)';
        break;
    
      default:
        break;
  }
}


const finishButton = document.querySelector('.btn-finish');
const modalFinish = document.getElementById('modal_finish');
const modalFinishText = document.getElementById('modal-finish-text');
const modalFinishAccept = document.getElementById('modal-finish-accept');
const modalFinishCancel = document.getElementById('modal-finish-cancel');

finishButton.addEventListener('click', () => {
  modalFinishText.innerText = `¿Su pedido es correcto?\n
    Tamaño: ${tamano || 'No seleccionado'}, 
    Sabor: ${selectedFlavor || 'No seleccionado'}, 
    Hielo: ${selectedHielo || 'No seleccionado'}`;
  modalFinish.style.display = 'block';
});

modalFinishCancel.addEventListener('click', () => {
  modalFinish.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modalFinish) {
    modalFinish.style.display = 'none';
  }
});

modalFinishAccept.addEventListener('click', () => {
  // Aquí puedes agregar la lógica que deseas al aceptar el pedido
  modalFinish.style.display = 'none';
  alert('Pedido aceptado!');
});

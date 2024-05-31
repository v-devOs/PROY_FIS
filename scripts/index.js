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
let selectedTamano = '';

modalCancel.addEventListener('click', () => {
  modal.style.display = 'none';
  resetSelections();
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
    resetSelections();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  tamanoButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      selectedTamano = event.target.innerText;
      modalText.innerText = `Tamaño seleccionado: ${selectedTamano}`;
      modal.style.display = 'block';
      modalAccept.onclick = () => {
        tamano = selectedTamano;
        showBottleSize(tamano, bottle);
        modal.style.display = 'none';
      }
    });
  });

  hieloButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      selectedHielo = event.target.innerText;
      modalText.innerText = `Opción seleccionada: ${selectedHielo}`;
      modal.style.display = 'block';
      modalAccept.onclick = () => {
        hielo = selectedHielo;
        const iceContainer = document.getElementById('ice-container');
        iceContainer.style.display = 
          selectedHielo === 'Agregar hielo' ? 'flex' : 'none';
        modal.style.display = 'none';
      }
    });
  });

  flavorButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
      modalText.innerText = `Sabor seleccionado: ${event.target.innerText}`;
      modal.style.display = 'block';

      if(selectedFlavor != '' && selectedFlavor != null){
        const water = document.querySelector('.water.' + selectedFlavor);
        water.style.display = 'none'
        water.classList.remove('filled');
      }

      
      selectedFlavor = event.target.innerText;

      modalAccept.onclick = () => {
        setFlavor(selectedFlavor);
        modal.style.display = 'none';
      }
    });
  });
});

function showBottleSize(selectedTamano, componente){
  switch(selectedTamano){
    case 'Chico 500ml':
      componente.className = 'small-bottle';
      break;
    case 'Mediano 750ml':
      componente.className = 'medium-bottle';
      break;
    case 'Grande 1000ml':
      componente.className = 'glass';
      break;
  }
}

function setFlavor(flavor){
  selectedFlavor = flavor;
}

function resetSelections() {
  selectedTamano = '';
  selectedHielo = '';
  selectedFlavor = '';
}

const finishButton = document.querySelector('.btn-finish');
const modalFinish = document.getElementById('modal_finish');
const modalFinishText = document.getElementById('modal-finish-text');
const modalFinishAccept = document.getElementById('modal-finish-accept');
const modalFinishCancel = document.getElementById('modal-finish-cancel');

finishButton.addEventListener('click', () => {
  modalFinishText.innerText = `¿Su pedido es correcto?\n
    Tamaño: ${tamano || 'No seleccionado'} 
    Sabor: ${selectedFlavor || 'No seleccionado'} 
    Hielo: ${hielo || 'No seleccionado'}`;
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
  modalFinish.style.display = 'none';


  if(selectedFlavor == '' || selectedHielo == '' || selectedTamano == ''){
    alert('¡Se debe de completar el formulario para finalizar!');

  }
  else{
    alert('¡Pedido aceptado!');

  
    const water = document.querySelector('.water.' + selectedFlavor);
    if (water) {
      water.style.display = 'inline-block'
      water.classList.add('filled');
    }

  }

  console.log(water)
});

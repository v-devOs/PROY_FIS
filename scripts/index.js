
// Seleccionar los botones de sabor, tamaño y hielo
const tamanoButtons = document.querySelectorAll('.btn-size-ch, .btn-size-md, .btn-size-g');
const hieloButtons = document.querySelectorAll('.btn-ice-yes, .btn-ice-no');


let tamano;
let hielo;




// tamanoButtons.forEach(button => {
//     button.addEventListener('click', (event) => {
//       tamano = event.target.innerText;
//       console.log(`Tamaño seleccionado: ${tamano}`);
//     });
//   });
  
  

  // hieloButtons.forEach(button => {
  //   button.addEventListener('click', (event) => {
  //     hielo = event.target.innerText;
  //     console.log(`Hielo seleccionado: ${hielo}`);
  //   });
  // });


  document.addEventListener('DOMContentLoaded', () => {
    const tamanoButtons = document.querySelectorAll('.btn-size-ch, .btn-size-md, .btn-size-g');
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const modalAccept = document.getElementById('modal-accept');
    const modalCancel = document.getElementById('modal-cancel');
    const bottle = document.getElementById('bottle');
  
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
  
    modalCancel.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target == modal) {
        modal.style.display = 'none';
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
  
//  MODAL LOGIN
const modal_boton = document.getElementById('showModal');
const modal_contenido = document.getElementById('modal');
const modal_cerrar = document.getElementById('cerrar_modal');

const checkbox = document.getElementById('accepto');

// Escuchando click checkbox
checkbox.addEventListener('click', (event)=>{

    if(checkbox.value === 'Aceptar'){

        modal_boton.removeAttribute('disabled');
        checkbox.value = 'No acepto';
    }else{

        modal_boton.setAttribute('disabled', '');
        checkbox.value = 'Aceptar';
    }
});

/* Escuchando click MODAL LOGIN
-------------------------------------------------------------------------- */
modal_boton.addEventListener('click', ()=>{
    modal_contenido.classList.remove('modal-ocultar');
})
modal_cerrar.addEventListener('click', ()=>{
    modal_contenido.classList.add('modal-ocultar');
});

const formularioEnviado = document.querySelector('.formulario')
const inputForm = document.querySelectorAll('.input')
const msgObrigatoria = document.querySelectorAll('.msgObrigatoria')

formularioEnviado.addEventListener('submit', (event) => {
  event.preventDefault()
  inputForm.forEach(input => {

    const campoObrigatorio = input.nextElementSibling;

    if (input.value == "") {
      input.classList.add('dados-invalidos');
      campoObrigatorio.classList.add('msgMostrar')


    } else {
      input.classList.add('dados-validos');

    }
  }
  );
});



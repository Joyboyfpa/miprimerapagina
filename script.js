//alert("Hola este es mi Javascript");
//let nombre = "Flavio";
//console.log(nombre);

//CONDICIONALES
//let test = document.querySelector('.bienvenido');
//test.innerHTML = "Hola";

//let test2 = test.innerText;
//console.log(test2);

//if (test2 == "Hola"){
//    test.innerHTML = "TEST";
//}

//function cambiarTexto(nombre, ciudad, gusto) {
//    let contenido = `Me llamo ${nombre}, nací en ${ciudad} y me gusta el ${gusto}`;
//   return contenido;
//}

//let parrafo = document.querySelector(".parrafo2")
//parrafo.innerText = cambiarTexto('Flavio','Perú','helado') 

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
  };

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");
  
  function validarFormulario() {
    let warnings = "";
    let valido = true;
    parrafo.innerHTML = "";
  
    if (nombre.value.length < 4) {
      warnings += `El nombre debe contener más de 4 carcateres`;
      valido = false;
    }
  
    if (!valido) {
      parrafo.innerHTML = warnings;
    } else {
      parrafo.innerHTML = "Enviado";
    }
    return valido;
  }
  
  form.addEventListener("submit", (e) => {
    if (validarFormulario()) {
      // Si la validación es exitosa, puedes enviar el formulario
      formulario.submit();
    } else {
      e.preventDefault(); // Evita que el formulario se envíe automáticamente
    }
  });
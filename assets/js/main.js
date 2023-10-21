const nav = document.querySelector ("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");



open.addEventListener ("click",() => {
  nav.classList.add("visible");
})

close.addEventListener ("click",() => {
  nav.classList.remove("visible")
})

// Obtén una referencia al botón y al elemento de texto oculto
const botonMostrar = document.getElementById("mostrarTexto");
const textoOculto = document.getElementById("textoOculto");
// Agrega un controlador de eventos al botón
botonMostrar.addEventListener("click", function() {
  // Cambia el estilo del elemento de texto para mostrarlo
  textoOculto.style.display = "block";
});
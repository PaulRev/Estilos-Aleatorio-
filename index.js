let menu = document.getElementById("menu");

let navGat = document.getElementById("navGat");

menu.addEventListener("click", function () {
  navGat.classList.toggle("nav1EfectoToogle");
});

// ---------------------------------------------->

// ESTILOS A LLAMAR **MAIN**!
const toogle = document.getElementById("toogle");

const main = document.getElementById("main");

toogle.addEventListener("click", function () {
  // alert('h')
  // main.style.backgroundColor='black';
  main.classList.toggle("main2");
});

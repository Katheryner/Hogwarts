const nombre = document.querySelector("#name");
const edad = document.querySelector("#edad");
const familia = document.querySelector("#familia");
const linaje = document.querySelector("#linaje");
const cualidades = document.querySelector("#cualidades");

const boton = document.querySelector("#registrar");
const boton2 = document.querySelector("#casa");

const valores = document.querySelector(".seleValores");
const inicio = document.querySelector(".estudiante");
const bienvenida = document.querySelector(".bienvenida");

const bienvenidaTitulo = bienvenida.firstChild.nextSibling;
const cargando = document.querySelector(".cargando");

const musica = document.querySelector("#harry");
musica.play();

const aplausos = document.querySelector("#aplausos");



let person = {
  nombre: "",
  edad: "",
  familia: "",
  linaje: "",
  casa: "",
  animalp: "",
  cualidades: "",
};

boton.addEventListener("click", (e) => {
  e.preventDefault();
  person.nombre = nombre.value;
  person.edad = edad.value;
  person.familia = familia.value;
  person.linaje = linaje.value;

  console.log(linaje.value);

  inicio.style.display = "none";
  valores.style.display = "flex";
});

boton2.addEventListener("click", (e) => {
  e.preventDefault();
  
  setTimeout(() => {
    cargando.style.display = "none";
    bienvenidaTitulo.style.display = "flex";
    aplausos.play();
  }, 6000);

  person.cualidades = cualidades.value;
  console.log(person.cualidades);
  seleccionarCasa();

  valores.style.display = "none";
  bienvenida.style.display = "flex";
  console.log(person.casa);

});

function seleccionarCasa() {
  if (
    person.cualidades === "Valor,Fuerza,Audacia" &&
    (person.linaje === "muggle" ||
      person.linaje === "mestizo" ||
      person.linaje === "sangre pura")
  ) {
    person.casa = "Gryffindor";
  } else if (
    person.cualidades === "Justicia, Lealtad, Paciencia" &&
    (person.linaje === "muggle" || person.linaje === "mestizo")
  ) {
    person.casa = "Hufflepuff";
  } else if (
    person.cualidades === "Creatividad, Erudición, Inteligencia" &&
    (person.linaje === "muggle" || person.linaje === "mestizo")
  ) {
    person.casa = "Ravenclaw";
  } else if (
    person.cualidades === "Ambición, Determinación, Astucia" &&
    person.linaje === "sangre pura"
  ) {
    person.casa = "Slytherin";
  } else {
    person.casa = "Gryffindor";
  }
  bienvenidaTitulo.innerHTML = ` ${person.nombre}, ¡Bienvenido a ${person.casa}!`;
}

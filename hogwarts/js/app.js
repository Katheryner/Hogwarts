let persona = {
  nombre: "",
  edad: "",
  familia: "",
  linaje: "",
  casa: "",
  animalp: "",
  cualidades: "valor,fuerza,audacia",
};

persona.nombre = prompt("Ingresa tu nombre");
persona.edad = prompt("Ingresa tu edad");
persona["familia"] = prompt("Ingresa tu familia (Apellido)");
("");

const opcion = prompt(`
Ingrese su linaje: 
1.muggle
2.mestizo
3.sangre pura
`);

if (opcion == "1") {
  persona.linaje = "muggle";
} else if (opcion == "2") {
  persona.linaje = "mestizo";
} else if (opcion == "3") {
  persona.linaje = "sangre pura";
} else {
  console.log("opcion no vàlida");
}

function mostrarDatos() {
  let mensaje = "";
  for (const key in persona) {
    console.log(persona[key]);
    mensaje += `
    ${key}: ${persona[key]}`;
  }

  alert(mensaje);
}

function seleccionarCasa() {
  if (
    (persona.cualidades === "valor,fuerza,audacia" &&
      persona.linaje === "muggle") ||
    persona.linaje === "mestizo" ||
    persona.linaje === "sangre pura"
  ) {
    console.log("Perteneces a Gryffindor");
    persona.casa = "Gryffindor";
  } else if (
    (persona.cualidades === "Justicia, Lealtad, Paciencia" &&
      persona.linaje === "muggle") ||
    persona.linaje === "mestizo"
  ) {
    console.log("Perteneces a Hufflepuff");
    persona.casa = "Hufflepuff";
  } else if (
    (persona.cualidades === "Creatividad, Erudición, Inteligencia" &&
      persona.linaje === "muggle") ||
    persona.linaje === "mestizo"
  ) {
    console.log("Perteneces a Ravenclaw");
    persona.casa = "Ravenclaw";
  } else if (
    persona.cualidades === "Ambición, Determinación, Astucia" &&
    persona.linaje === "sangre pura"
  ) {
    console.log("Perteneces a Slytherin");
    persona.casa = "Slytherin";
  }
}
seleccionarCasa();
mostrarDatos();
const profesores = {
  transformaciones: "Kevin Slughorn",
  herbologia: "Maria Umbridge",
  pociones: "Liliana McGonagall",
  encantamientos: "Jackie",
  defensaContraLasArtesOscuras: "Robinson Snape",
  animalesMagicos: "David Flich",
  historiaDeMagia: "Ronald Sprout",
  mostrarProfesores: function () {
    let mensaje = "lista de profesores:";
    for (const key in profesores) {
      if (key == "mostrarProfesores" || key == "cambiarProfesor") {
        break;
      } else {
        mensaje += `
                ${key}, profesor: ${profesores[key]}
                `;
      }
    }
    mostrarMensaje(mensaje);
  },
  cambiarProfesor: function (profesor1) {
    mostrarMensaje(`Estas cambiando el profesor ${profesor1}`);
    const cambio = profesores.animalesMagicos;
    mostrarMensaje(
      `Has seleccionado cambiar el profesor ${profesor1} por ${cambio}`
    );
    for (const key in profesores) {
      if (profesores[key] === cambio) {
        profesores[key] = profesor1;
        console.log(profesores[key]);
      }
    }
    for (const key in profesores) {
      if (profesores[key] === profesor1) {
        profesores[key] = cambio;
        console.log(profesores[key]);
      }
    }
    mensajeExitoso("Se cambiaron los profesores exitosamente!!");
    this.mostrarProfesores();
  },
};

function mostrarMensaje(mensaje = "Digite su mensaje") {
  alert(mensaje);
}

function mensajeExitoso(mensaje = "Exitoso!!") {
  alert(mensaje);
}

function claseTransformaciones() {
  mostrarMensaje("Entraste a clase de transformaciones");
  const transformaciones = {
    nombreProfesor: "Kevin Slughorn",
    horario: "15:00",
    rastrearTransformacion: false,
    hechizoRiddikulus: function () {
      if (this.rastrearTransformacion) {
        mostrarMensaje(`Realizando el hechizo Riddikulus...`);
      } else {
        mostrarMensaje("No hay boggart presente");
      }
    },
    enfrentarBoggart: function (boggart) {
      mostrarMensaje(`Enfrentando al boggart
      El estado del boggart es: ${boggart}`);
      mostrarMensaje(`Realizamos el hechizo riddikulus`);
      this.hechizoRiddikulus();
      boggart = "boggart transformado";
      mostrarMensaje(`el resultado de la transformacion es ${boggart}`);
      mostrarMensaje("Has vencido al boggart");
    },
  };
  let boggartEjemplo = "boggart original";
  mostrarMensaje("Un boggart ha aparecido");
  transformaciones.rastrearTransformacion = true;
  transformaciones.enfrentarBoggart(boggartEjemplo);
  mostrarMensaje("Termino la clase de transformaciones");
}

claseTransformaciones();

function claseDefensaArtesOscuras() {
  mostrarMensaje("Entraste a clase de artes oscuras");
  const defensaContraLasArtesOscuras = {
    nombreProfesor: "Robinson Snape",
    horario: "17:00",
    generarAnimalPatronus: function () {
      mostrarMensaje("Seleccionando animal de patronus...");
      const animal = Math.floor(Math.random() * 8);

      switch (animal) {
        case 0:
          persona.animalPatronus = "Murcielago";
          mensajeExitoso();
          break;
        case 1:
          persona.animalPatronus = "Toro";
          mensajeExitoso();
          break;
        case 2:
          persona.animalPatronus = "Gato";
          mensajeExitoso();
          break;
        case 3:
          persona.animalPatronus = "Cabra";
          mensajeExitoso();
          break;
        case 4:
          persona.animalPatronus = "Caballo";
          mensajeExitoso();
          break;
        case 5:
          persona.animalPatronus = "Conejo";
          mensajeExitoso();
          break;
        case 6:
          persona.animalPatronus = "Escorpion";
          mensajeExitoso();
          break;
        case 7:
          persona.animalPatronus = "Serpiente";
          mensajeExitoso();
          break;
        default:
          mostrarMensaje("Opcion no valida");
          break;
      }
    },
  };
  defensaContraLasArtesOscuras.generarAnimalPatronus();
  mostrarMensaje("Termino la clase de defensa de artes oscuras");
}

claseDefensaArtesOscuras();

function dementores() {
  mostrarMensaje(
    "En tu camino te has encontrado un dementor y solo puedes defenderte si tienes un animal patronus"
  );
  alert(persona.animalPatronus);
  if (persona.animalPatronus.length > 0) {
    mostrarMensaje("Te has defendido con tu animal patronus");
  } else {
    mostrarMensaje(
      "No tienes animal patronus no te puedes defender contra los dementores"
    );
  }
}
dementores();

function clasePociones() {
  mostrarMensaje("Entraste a clase de pociones");
  const pociones = {
    nombreProfesor: "Liliana McGonagall",
    horario: "19:00",
    crisopos: 2,
    talloDeDescurainiaSophia: 1,
    tiempoPreparacion: 5, //minutos
    pocionFelixFelicis: 0,
    verMateriales: function () {
      mostrarMensaje(`Materiales:
      Crisopos = ${this.crisopos}
      Tallo de descurainia sophia ${this.talloDeDescurainiaSophia}`);
    },
    prepararPocion: function (
      crisopos,
      talloDeDescurainiaSophia,
      tiempoPreparacion
    ) {
      if (crisopos >= 2 && talloDeDescurainiaSophia >= 1) {
        if (tiempoPreparacion == this.tiempoPreparacion) {
          mostrarMensaje(`Has preparado correctamente "Pocion Felix Felicis"`);
          this.pocionFelixFelicis += 1;
        } else {
          mostrarMensaje(`El tiempo de preparacion debe ser de 5 minutos`);
          mostrarMensaje(`la pocion ha fallado y te has hecho danio`);
        }
      } else {
        mostrarMensaje(`No tienes los suficientes ingredientes para realizar la pocion
        Materiales necesarios:
        Crisopos x2
        Tallo de descurainia sophia x1
        Materiales en inventario:
        Crisopos = ${crisopos}
        Tallo de descurainia sophia = ${talloDeDescurainiaSophia}`);
        mostrarMensaje(`la pocion ha fallado y te has hecho danio`);
      }
      this.crisopos -= crisopos;
      this.talloDeDescurainiaSophia -= talloDeDescurainiaSophia;
    },
    usarPocionFelixFelicis: function () {
      if (this.pocionFelixFelicis >= 1) {
        const profesor1 = profesores.pociones;
        profesores.cambiarProfesor(profesor1);
        this.pocionFelixFelicis -= 1;
        mostrarMensaje("Cambiaste el profesor con una pocion de Felix Felicis");
      } else {
        mostrarMensaje(`No tienes suficientes pociones.
        Inventario de pociones:
        Pocion Felix Felicis = ${this.pocionFelixFelicis}`);
      }
    },
  };
  pociones.verMateriales();
  pociones.prepararPocion(
    pociones.crisopos,
    pociones.talloDeDescurainiaSophia,
    pociones.tiempoPreparacion
  );
  pociones.usarPocionFelixFelicis();
  mostrarMensaje("Has terminado la clase de pociones");
}

clasePociones();
mostrarDatos();
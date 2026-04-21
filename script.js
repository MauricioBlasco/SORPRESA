const imagenes = [
  "20251007_171014.jpg",
  "20251025_234013.jpg",
  "20251121_201820.jpg",
  "20251121_202114.jpg",
  "20260119_112057.jpg",
  "20260121_213956.jpg",
  "20260202_022327.jpg",
  "20260205_185817.jpg",
  "20260205_234028.jpg",
  "20260205_234041.jpg",
  "20260216_182005.jpg",
  "20260217_145215.jpg",
  "IMG-20251114-WA0048.jpg",
  "IMG-20251115-WA0112.jpg",
  "IMG-20251115-WA0139.jpg",
  "IMG-20251214-WA0001.jpg",
  "IMG-20251214-WA0067.jpg",
  "IMG-20251214-WA0104.jpg",
  "IMG-20260116-WA0029.jpg",
  "IMG-20260117-WA0017.jpeg",
  "IMG-20260118-WA0008.jpg",
  "IMG-20260119-WA0008.jpg",
  "IMG-20260119-WA0012.jpg",
  "IMG-20260129-WA0077.jpg",
  "IMG-20260206-WA0014.jpeg",
  "IMG-20260206-WA0044.jpeg",
  "IMG-20260208-WA0011.jpeg",
  "IMG-20260214-WA0067.jpeg",
  "IMG-20260215-WA0009.jpg",
  "IMG-20260216-WA0058.jpeg",
  "IMG-20260219-WA0040.jpg",
  "IMG-20260221-WA0029.jpg",
  "holi.jpeg",
  "TE AMO.jpeg",
  "Rocambole.jpeg",
  "Helado.jpeg",
  "MERIENDA.jpeg",
  "Sombra.jpeg",
  "Ñam ñam.jpeg",
  "Guitarra.jpeg",
  "CINE.jpeg",
  "Huevos.jpeg"
];

const carpetaImagenes = "drive-download-20260221T183607Z-1-001/";
const mensajesPorImagen = {
  "20251007_171014.jpg": "IMPATRQ",
  "20251025_234013.jpg": "Top juntadas",
  "20251121_201820.jpg": "NOVIOOOOOOOOOOOOOOOOOOOOOOOOOS",
  "20251121_202114.jpg": "NOVIOOOOOOOOOOOOOOOOOOOOOOOOOS",
  "20260119_112057.jpg": "ZZZZZZZZZZZ",
  "20260121_213956.jpg": "Te tengo que enseñar a tocar",
  "20260202_022327.jpg": "VIAJE A SAN BERNAAAAARDOOOOOOOOO",
  "20260205_185817.jpg": "lluvia AYUDA",
  "20260205_234028.jpg": "QUEEEEE que lindos",
  "20260205_234041.jpg": "Las olas y el viento sucundum sucundum",
  "20260216_182005.jpg": "QUE LINDOOOOOOOOOOOOOOOOOOS",
  "20260217_145215.jpg": "Que lindo dia amooooor",
  "IMG-20251114-WA0048.jpg": "PLEPER ENERGIA BAJO TUS PIES",
  "IMG-20251115-WA0112.jpg": "JAJAJAJJAJA QUE DURO QUE ESTA LOPA",
  "IMG-20251115-WA0139.jpg": "Que lindos nos vemos juntos",
  "IMG-20251214-WA0001.jpg": "JAJAJAJAJAJAJAJAJAJAJAJAJAJAJ PREDICT",
  "IMG-20251214-WA0067.jpg": "VAAAAAMOOOOOOOOOOOOOS",
  "IMG-20260116-WA0029.jpg": "Dia de cine, top cosas",
  "IMG-20260117-WA0017.jpeg": "QUE LINDA FOTO",
  "IMG-20260118-WA0008.jpg": "Amor porque te multiiplicaste en el cielo",
  "IMG-20260119-WA0008.jpg": "top spots",
  "IMG-20260129-WA0077.jpg": "pobrecita barbarita",
  "IMG-20260206-WA0044.jpeg": "AYUDA ME QUEME AAAAAAAAAAAAAAAAAAAAAA",
  "IMG-20260208-WA0011.jpeg": "que rica milanesa ñam ñam",
  "IMG-20260214-WA0067.jpeg": "EL 14 DE FEBRERO SIIIIIIIII",
  "IMG-20260216-WA0058.jpeg": "Casa capital",
  "IMG-20260219-WA0040.jpg": "Que linda pareja que son",
  "IMG-20260221-WA0029.jpg": "JAJASJASJASJSAJJSAJASJSAJSAJSA",
  "holi.jpeg": "holi",
  "TE AMO.jpeg": "TE AMO",
  "Rocambole.jpeg": "EL MUSEO DE ROCAMBOLE QUEEEEEEEE",
  "Helado.jpeg": "Esta foto me gusta mucho",
  "MERIENDA.jpeg": "Top dias de mi vida",
  "Sombra.jpeg": "tortuga",
  "Ñam ñam.jpeg": "QUEEEEEEEEEEE",
  "Guitarra.jpeg": "QUE ES ESTA FOTO AYUDA",
  "CINE.jpeg": "Que linda mi amorcito",
  "Huevos.jpeg": "HUEVOS DE PASUCUA QUE"
};

const btnAbrir = document.getElementById("btnAbrir");
const pantallaInicio = document.getElementById("inicio");
const pantallaGaleria = document.getElementById("galeria");
const museo = document.getElementById("museo");
const musica = document.getElementById("musica");
const corazones = document.getElementById("hearts");
const btnJugar = document.getElementById("btnJugar");
const btnVof = document.getElementById("btnVof");
const juegoCrucigrama = document.getElementById("juegoCrucigrama");
const crucigramaGrid = document.getElementById("crucigramaGrid");
const listaPistas = document.getElementById("listaPistas");
const juegoVof = document.getElementById("juegoVof");
const vofLista = document.getElementById("vofLista");
const vofEstado = document.getElementById("vofEstado");

const tamanioCrucigrama = 12;
const palabrasCrucigrama = [
  { palabra: "AMOR", pista: "Lo que siento por vos" },
  { palabra: "PLEPER", pista: "Energia bajo tus pies" },
  { palabra: "FLORES", pista: "Mi regalo cuando nos hizimos novios" },
  { palabra: "SUPERLOGICO", pista: "la banda que vimos 67 veces" },
  { palabra: "MILANESA", pista: "Lo que comimos el 14 de febrero" },
  { palabra: "ROCAMBOLE", pista: "La razon por la que pise un centro cultural" },
  { palabra: "CHIMUELO", pista: "Tu gato echo personaje (No es Hitler)" },
  { palabra: "MATE", pista: "Lo que te obligamos a llevar en el impa" }
];

const ubicacionesCrucigrama = [
  { palabra: "SUPERLOGICO", fila: 0, col: 1, pasoFila: 0, pasoCol: 1 },
  { palabra: "ROCAMBOLE", fila: 2, col: 0, pasoFila: 1, pasoCol: 0 },
  { palabra: "MILANESA", fila: 3, col: 3, pasoFila: 1, pasoCol: 1 },
  { palabra: "PLEPER", fila: 2, col: 11, pasoFila: 1, pasoCol: -1 },
  { palabra: "FLORES", fila: 8, col: 2, pasoFila: 0, pasoCol: 1 },
  { palabra: "AMOR", fila: 1, col: 5, pasoFila: 1, pasoCol: 0 },
  { palabra: "CHIMUELO", fila: 11, col: 0, pasoFila: 0, pasoCol: 1 },
  { palabra: "MATE", fila: 5, col: 11, pasoFila: 1, pasoCol: 0 }
];

let matrizCrucigrama = [];
const celdasSeleccionadas = new Set();
const celdasEncontradas = new Set();
const palabrasEncontradas = new Set();
let palabrasConCeldas = [];
let vofCompleto = false;
let respuestasVof = [];

const preguntasVof = [
  { pregunta: "TE AMO", correcta: "V" },
  { pregunta: "Cumplimos mes el 23", correcta: "F" },
  { pregunta: "Vamos a durar mucho tiempo mas", correcta: "V" },
  { pregunta: "Soy fan de las medialunas de grasa", correcta: "F" },
  { pregunta: "Mi disco favorito general es After Chabon", correcta: "F" },
  { pregunta: "TE AMO", correcta: "V" },
  { pregunta: "Cuanto nos pusimos de novios, te lleve a tomar mates a la plaza", correcta: "F" },
  { pregunta: "Nuestro primer beso fue el 21", correcta: "V" }
];

const frasesMauri = [
  "Te amo",
  "Baza aqui",
  "Pleper, energia bajo tus pies",
  "Que linda que sos",
  "Hola amorchi",
  "VICTORIA",
  "Love you",
  "Eu te amo",
  "AYUDAAAAAAAAAAAA",
  "holi"
];

const frasesVicky = [
  "Voy aqui",
  "BLACKY",
  "我爱你",
  "Je t'aime",
  "AMORCHIIIIII"
];

const personajeMauri = {
  elemento: null,
  activo: false,
  timeout: null,
  esquinaActual: 0,
  src: `${carpetaImagenes}Mauri.png`,
  alt: "Mauri",
  frases: frasesMauri,
  fraseClick: "AYUDAAAAAAA",
  claseExtra: "personaje-mauri"
};

const personajeVicky = {
  elemento: null,
  activo: false,
  timeout: null,
  esquinaActual: 0,
  src: `${carpetaImagenes}Vicky.png`,
  alt: "Vicky",
  frases: frasesVicky,
  fraseClick: "Voy aqui",
  claseExtra: "personaje-vicky"
};

let parejaModo = false;
let parejaTimeout = null;
let parejaEsquinaActual = 0;
let parejaCorazonesActivos = false;
let parejaCorazonesContenedor = null;

function keyCelda(fila, col) {
  return `${fila}-${col}`;
}

function obtenerCeldasPalabra(ubicacion) {
  const celdas = [];
  for (let i = 0; i < ubicacion.palabra.length; i++) {
    celdas.push({
      fila: ubicacion.fila + i * ubicacion.pasoFila,
      col: ubicacion.col + i * ubicacion.pasoCol
    });
  }
  return celdas;
}

function crearGaleria() {
  imagenes.forEach((nombreImagen) => {
    const cuadro = document.createElement("figure");
    cuadro.className = "cuadro";

    const img = document.createElement("img");
    img.src = `${carpetaImagenes}${nombreImagen}`;
    img.alt = "Recuerdo especial";
    img.loading = "lazy";
    img.onerror = () => cuadro.remove();

    let mensaje = null;
    const textoMensaje = mensajesPorImagen[nombreImagen];
    if (textoMensaje) {
      mensaje = document.createElement("figcaption");
      mensaje.className = "mensaje-click";
      mensaje.textContent = textoMensaje;

      const mostrarMensaje = () => cuadro.classList.add("mostrar-mensaje");
      const ocultarMensaje = () => cuadro.classList.remove("mostrar-mensaje");

      img.addEventListener("pointerdown", (event) => {
        mostrarMensaje();
        if (typeof img.setPointerCapture === "function") {
          img.setPointerCapture(event.pointerId);
        }
      });

      img.addEventListener("pointerup", ocultarMensaje);
      img.addEventListener("pointercancel", ocultarMensaje);
      img.addEventListener("lostpointercapture", ocultarMensaje);
      img.addEventListener("pointerleave", (event) => {
        if (event.pointerType === "mouse") {
          ocultarMensaje();
        }
      });
    }

    cuadro.appendChild(img);
    if (mensaje) {
      cuadro.appendChild(mensaje);
    }
    museo.appendChild(cuadro);
  });
}

function crearCorazones(cantidad = 30) {
  for (let i = 0; i < cantidad; i++) {
    const corazon = document.createElement("span");
    corazon.className = "heart";
    corazon.textContent = "❤";
    corazon.style.left = `${Math.random() * 100}%`;
    corazon.style.animationDuration = `${5 + Math.random() * 8}s`;
    corazon.style.animationDelay = `${Math.random() * 6}s`;
    corazon.style.fontSize = `${14 + Math.random() * 24}px`;
    corazones.appendChild(corazon);
  }
}

function crearMatrizCrucigrama() {
  const matriz = Array.from({ length: tamanioCrucigrama }, () =>
    Array.from({ length: tamanioCrucigrama }, () => "")
  );

  ubicacionesCrucigrama.forEach(({ palabra, fila, col, pasoFila, pasoCol }) => {
    for (let i = 0; i < palabra.length; i++) {
      const f = fila + i * pasoFila;
      const c = col + i * pasoCol;
      const letra = palabra[i];

      if (f < 0 || f >= tamanioCrucigrama || c < 0 || c >= tamanioCrucigrama) {
        console.warn(`La palabra ${palabra} se sale del crucigrama.`);
        return;
      }

      if (matriz[f][c] !== "" && matriz[f][c] !== letra) {
        console.warn(`Cruce invalido en ${f},${c} para la palabra ${palabra}.`);
        return;
      }

      matriz[f][c] = letra;
    }
  });

  const letrasRelleno = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let fila = 0; fila < tamanioCrucigrama; fila++) {
    for (let col = 0; col < tamanioCrucigrama; col++) {
      if (matriz[fila][col] === "") {
        const indice = Math.floor(Math.random() * letrasRelleno.length);
        matriz[fila][col] = letrasRelleno[indice];
      }
    }
  }

  return matriz;
}

function construirPalabrasConCeldas() {
  return palabrasCrucigrama.map(({ palabra, pista }) => {
    const ubicacion = ubicacionesCrucigrama.find((item) => item.palabra === palabra);
    return {
      palabra,
      pista,
      celdas: obtenerCeldasPalabra(ubicacion)
    };
  });
}

function actualizarEstadoVisualCeldas() {
  const celdas = crucigramaGrid.querySelectorAll(".celda-crucigrama");
  celdas.forEach((celda) => {
    const fila = Number(celda.dataset.fila);
    const col = Number(celda.dataset.col);
    const key = keyCelda(fila, col);

    celda.classList.toggle("celda-encontrada", celdasEncontradas.has(key));
    celda.classList.toggle(
      "celda-seleccionada",
      celdasSeleccionadas.has(key) && !celdasEncontradas.has(key)
    );
  });
}

function actualizarListaPistas() {
  if (!listaPistas) {
    return;
  }

  listaPistas.innerHTML = "";
  const lista = document.createElement("ol");

  palabrasCrucigrama.forEach(({ palabra, pista }) => {
    const item = document.createElement("li");
    const estaEncontrada = palabrasEncontradas.has(palabra);
    const textoPalabra = estaEncontrada ? palabra : "";
    item.innerHTML = `<span class="pista">${pista}</span><span class="palabra">${textoPalabra}</span>`;
    lista.appendChild(item);
  });

  listaPistas.appendChild(lista);
}

function actualizarEstadoVof() {
  if (!vofLista || !vofEstado) {
    return;
  }

  const items = vofLista.querySelectorAll(".vof-item");
  let respuestasCompletas = true;
  let todoCorrecto = true;

  items.forEach((item, index) => {
    const respuesta = respuestasVof[index];
    const correcta = preguntasVof[index].correcta;
    item.classList.remove("correcta", "incorrecta");

    if (!respuesta) {
      respuestasCompletas = false;
      return;
    }

    if (respuesta === correcta) {
      item.classList.add("correcta");
    } else {
      item.classList.add("incorrecta");
      todoCorrecto = false;
    }
  });

  if (!respuestasCompletas) {
    vofEstado.textContent = "Responde todas las preguntas para desbloquear a VICKY.";
    vofCompleto = false;
    return;
  }

  if (todoCorrecto) {
    vofEstado.textContent = "VOF completado. Ya podes desbloquear a VICKY.";
    vofCompleto = true;
    evaluarDesbloqueos();
  } else {
    vofEstado.textContent = "Hay respuestas incorrectas, segui intentando.";
    vofCompleto = false;
  }
}

function responderVof(indice, valor) {
  respuestasVof[indice] = valor;
  actualizarEstadoVof();
}

function renderizarVof() {
  if (!vofLista || !vofEstado) {
    return;
  }

  respuestasVof = Array(preguntasVof.length).fill(null);
  vofCompleto = false;
  vofLista.innerHTML = "";
  vofEstado.textContent = "Responde todas las preguntas para desbloquear a VICKY.";

  const lista = document.createElement("ol");
  lista.className = "vof-preguntas";

  preguntasVof.forEach(({ pregunta }, indice) => {
    const item = document.createElement("li");
    item.className = "vof-item";

    const texto = document.createElement("span");
    texto.className = "vof-texto";
    texto.textContent = pregunta;

    const acciones = document.createElement("div");
    acciones.className = "vof-acciones";

    const botonV = document.createElement("button");
    botonV.type = "button";
    botonV.className = "vof-btn";
    botonV.textContent = "V";
    botonV.addEventListener("click", () => responderVof(indice, "V"));

    const botonF = document.createElement("button");
    botonF.type = "button";
    botonF.className = "vof-btn";
    botonF.textContent = "F";
    botonF.addEventListener("click", () => responderVof(indice, "F"));

    acciones.appendChild(botonV);
    acciones.appendChild(botonF);
    item.appendChild(texto);
    item.appendChild(acciones);
    lista.appendChild(item);
  });

  vofLista.appendChild(lista);
}

function palabraCompletada(celdasPalabra) {
  return celdasPalabra.every(({ fila, col }) => {
    const key = keyCelda(fila, col);
    return celdasSeleccionadas.has(key) || celdasEncontradas.has(key);
  });
}

function seleccionCompatibleConAlgunaPalabra() {
  if (celdasSeleccionadas.size === 0) {
    return true;
  }

  const noEncontradas = palabrasConCeldas.filter(
    ({ palabra }) => !palabrasEncontradas.has(palabra)
  );

  return noEncontradas.some(({ celdas }) => {
    return Array.from(celdasSeleccionadas).every((key) => {
      return celdas.some(({ fila, col }) => keyCelda(fila, col) === key);
    });
  });
}

function marcarSeleccionError() {
  const keysError = Array.from(celdasSeleccionadas);
  keysError.forEach((key) => {
    const celda = crucigramaGrid.querySelector(`.celda-crucigrama[data-key="${key}"]`);
    if (celda) {
      celda.classList.add("celda-error");
    }
  });

  setTimeout(() => {
    keysError.forEach((key) => {
      const celda = crucigramaGrid.querySelector(`.celda-crucigrama[data-key="${key}"]`);
      if (celda) {
        celda.classList.remove("celda-error");
      }
    });
  }, 2000);

  celdasSeleccionadas.clear();
  actualizarEstadoVisualCeldas();
}

function validarSeleccion() {
  let encontroNueva = false;

  palabrasConCeldas.forEach(({ palabra, celdas }) => {
    if (palabrasEncontradas.has(palabra)) {
      return;
    }

    if (palabraCompletada(celdas)) {
      palabrasEncontradas.add(palabra);
      celdas.forEach(({ fila, col }) => {
        const key = keyCelda(fila, col);
        celdasEncontradas.add(key);
        celdasSeleccionadas.delete(key);
      });
      encontroNueva = true;
    }
  });

  if (encontroNueva) {
    actualizarListaPistas();
    actualizarEstadoVisualCeldas();
    evaluarDesbloqueos();
    return;
  }

  if (celdasSeleccionadas.size > 3 && !seleccionCompatibleConAlgunaPalabra()) {
    marcarSeleccionError();
    return;
  }

  actualizarEstadoVisualCeldas();
}

function alternarCelda(fila, col) {
  const key = keyCelda(fila, col);
  if (celdasEncontradas.has(key)) {
    return;
  }

  if (celdasSeleccionadas.has(key)) {
    celdasSeleccionadas.delete(key);
  } else {
    celdasSeleccionadas.add(key);
  }

  validarSeleccion();
}

function obtenerMedidasPersonaje(personaje) {
  const fallback = { ancho: 300, alto: 420 };
  if (!personaje.elemento) {
    return fallback;
  }

  const marco = personaje.elemento.querySelector(".personaje-marco");
  if (marco) {
    return {
      ancho: marco.offsetWidth || fallback.ancho,
      alto: marco.offsetHeight || fallback.alto
    };
  }

  const imagen = personaje.elemento.querySelector(".personaje-imagen");
  if (!imagen) {
    return fallback;
  }

  return {
    ancho: imagen.offsetWidth || fallback.ancho,
    alto: imagen.offsetHeight || fallback.alto
  };
}

function setMirandoIzquierda(personaje, mirandoIzquierda) {
  if (!personaje.elemento) {
    return;
  }

  const imagen = personaje.elemento.querySelector(".personaje-imagen");
  if (!imagen) {
    return;
  }

  imagen.classList.toggle("mirando-izquierda", mirandoIzquierda);
}

function decirFrasePersonaje(personaje, fraseFija = null) {
  if (!personaje.elemento || parejaCorazonesActivos) {
    return;
  }

  const globo = personaje.elemento.querySelector(".personaje-globo");
  if (!globo) {
    return;
  }

  const frase = fraseFija || personaje.frases[Math.floor(Math.random() * personaje.frases.length)];
  globo.textContent = frase;
  globo.classList.add("visible");

  setTimeout(() => {
    globo.classList.remove("visible");
  }, 2000);
}

function moverPersonajeAleatorio(personaje) {
  if (!personaje.elemento || !personaje.activo || parejaModo) {
    return;
  }

  const margenX = 120;
  const margenY = 130;
  const medidas = obtenerMedidasPersonaje(personaje);
  const xActual = parseFloat(personaje.elemento.style.left || String(margenX));
  const maxX = Math.max(window.innerWidth - medidas.ancho - margenX, margenX);
  const maxY = Math.max(window.innerHeight - medidas.alto - margenY, margenY);
  const rangoX = Math.max(maxX - margenX, 0);
  const rangoY = Math.max(maxY - margenY, 0);
  const x = margenX + Math.floor(Math.random() * (rangoX + 1));
  const y = margenY + Math.floor(Math.random() * (rangoY + 1));

  if (x < xActual) {
    setMirandoIzquierda(personaje, true);
  } else if (x > xActual) {
    setMirandoIzquierda(personaje, false);
  }

  personaje.elemento.style.left = `${x}px`;
  personaje.elemento.style.top = `${y}px`;

  if (Math.random() < 0.45) {
    decirFrasePersonaje(personaje);
  }

  const duracionMovimiento = 1400 + Math.random() * 1600;
  const pausa = 700 + Math.random() * 1500;
  personaje.timeout = setTimeout(() => {
    moverPersonajeAleatorio(personaje);
  }, duracionMovimiento + pausa);
}

function moverPersonajeAEsquina(personaje) {
  if (!personaje.elemento) {
    return;
  }

  if (parejaModo && personajeMauri.elemento && personajeVicky.elemento) {
    moverParejaAEsquina(personaje);
    return;
  }

  const margenX = 120;
  const margenY = 130;
  const medidas = obtenerMedidasPersonaje(personaje);
  const xActual = parseFloat(personaje.elemento.style.left || String(margenX));
  const maxX = Math.max(window.innerWidth - medidas.ancho - margenX, margenX);
  const maxY = Math.max(window.innerHeight - medidas.alto - margenY, margenY);
  const esquinas = [
    { x: margenX, y: margenY },
    { x: maxX, y: margenY },
    { x: margenX, y: maxY },
    { x: maxX, y: maxY }
  ];

  const opciones = [0, 1, 2, 3].filter((indice) => indice !== personaje.esquinaActual);
  personaje.esquinaActual = opciones[Math.floor(Math.random() * opciones.length)];
  const destino = esquinas[personaje.esquinaActual];

  if (destino.x < xActual) {
    setMirandoIzquierda(personaje, true);
  } else if (destino.x > xActual) {
    setMirandoIzquierda(personaje, false);
  }

  personaje.elemento.style.left = `${destino.x}px`;
  personaje.elemento.style.top = `${destino.y}px`;
  decirFrasePersonaje(personaje, personaje.fraseClick);

  if (personaje.timeout) {
    clearTimeout(personaje.timeout);
    personaje.timeout = null;
  }

  personaje.timeout = setTimeout(() => {
    if (personaje.activo) {
      moverPersonajeAleatorio(personaje);
    }
  }, 1400);
}

function limpiarCorazonesPareja() {
  if (parejaCorazonesContenedor) {
    parejaCorazonesContenedor.remove();
    parejaCorazonesContenedor = null;
  }
}

function orientarPareja(seMiranEntreEllos = false) {
  if (!personajeMauri.elemento || !personajeVicky.elemento) {
    return;
  }

  if (seMiranEntreEllos) {
    setMirandoIzquierda(personajeMauri, false);
    setMirandoIzquierda(personajeVicky, true);
  } else {
    setMirandoIzquierda(personajeMauri, true);
    setMirandoIzquierda(personajeVicky, false);
  }
}

function posicionarPareja(baseX, baseY) {
  if (!personajeMauri.elemento || !personajeVicky.elemento) {
    return;
  }

  const medidasMauri = obtenerMedidasPersonaje(personajeMauri);
  const separacion = 22;
  personajeMauri.elemento.style.left = `${baseX}px`;
  personajeMauri.elemento.style.top = `${baseY}px`;
  personajeVicky.elemento.style.left = `${baseX + medidasMauri.ancho + separacion}px`;
  personajeVicky.elemento.style.top = `${baseY}px`;
}

function lanzarCorazonesPareja() {
  if (!personajeMauri.elemento || !personajeVicky.elemento) {
    return Promise.resolve();
  }

  parejaCorazonesActivos = true;
  orientarPareja(true);
  limpiarCorazonesPareja();

  const rectMauri = personajeMauri.elemento.getBoundingClientRect();
  const rectVicky = personajeVicky.elemento.getBoundingClientRect();
  const centroX = (rectMauri.right + rectVicky.left) / 2;
  const baseY = Math.max(Math.min(rectMauri.top, rectVicky.top) - 10, 10);

  parejaCorazonesContenedor = document.createElement("div");
  parejaCorazonesContenedor.className = "pareja-corazones";
  pantallaGaleria.appendChild(parejaCorazonesContenedor);

  for (let i = 0; i < 16; i++) {
    const heart = document.createElement("span");
    heart.className = "pareja-heart";
    heart.textContent = "❤";
    heart.style.left = `${centroX + (Math.random() * 90 - 45)}px`;
    heart.style.top = `${baseY + (Math.random() * 18 - 9)}px`;
    heart.style.animationDelay = `${Math.random() * 1.6}s`;
    heart.style.fontSize = `${16 + Math.random() * 20}px`;
    parejaCorazonesContenedor.appendChild(heart);
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      parejaCorazonesActivos = false;
      limpiarCorazonesPareja();
      orientarPareja(false);
      resolve();
    }, 5000);
  });
}

function moverParejaAleatorio() {
  if (!parejaModo || !personajeMauri.elemento || !personajeVicky.elemento) {
    return;
  }

  const margenX = 120;
  const margenY = 130;
  const medidasMauri = obtenerMedidasPersonaje(personajeMauri);
  const medidasVicky = obtenerMedidasPersonaje(personajeVicky);
  const separacion = 22;
  const anchoTotal = medidasMauri.ancho + separacion + medidasVicky.ancho;
  const altoMaximo = Math.max(medidasMauri.alto, medidasVicky.alto);

  const maxX = Math.max(window.innerWidth - anchoTotal - margenX, margenX);
  const maxY = Math.max(window.innerHeight - altoMaximo - margenY, margenY);
  const rangoX = Math.max(maxX - margenX, 0);
  const rangoY = Math.max(maxY - margenY, 0);
  const baseX = margenX + Math.floor(Math.random() * (rangoX + 1));
  const baseY = margenY + Math.floor(Math.random() * (rangoY + 1));

  posicionarPareja(baseX, baseY);
  orientarPareja(false);

  if (Math.random() < 0.35) {
    const hablante = Math.random() < 0.5 ? personajeMauri : personajeVicky;
    decirFrasePersonaje(hablante);
  }

  const duracionMovimiento = 1400 + Math.random() * 1600;
  const pausa = 800 + Math.random() * 1600;
  parejaTimeout = setTimeout(async () => {
    if (!parejaModo) {
      return;
    }

    if (Math.random() < 0.34) {
      await lanzarCorazonesPareja();
    }
    moverParejaAleatorio();
  }, duracionMovimiento + pausa);
}

function moverParejaAEsquina(personajeClick) {
  if (!personajeMauri.elemento || !personajeVicky.elemento) {
    return;
  }

  const margenX = 120;
  const margenY = 130;
  const medidasMauri = obtenerMedidasPersonaje(personajeMauri);
  const medidasVicky = obtenerMedidasPersonaje(personajeVicky);
  const separacion = 22;
  const anchoTotal = medidasMauri.ancho + separacion + medidasVicky.ancho;
  const altoMaximo = Math.max(medidasMauri.alto, medidasVicky.alto);
  const maxX = Math.max(window.innerWidth - anchoTotal - margenX, margenX);
  const maxY = Math.max(window.innerHeight - altoMaximo - margenY, margenY);
  const esquinas = [
    { x: margenX, y: margenY },
    { x: maxX, y: margenY },
    { x: margenX, y: maxY },
    { x: maxX, y: maxY }
  ];

  const opciones = [0, 1, 2, 3].filter((indice) => indice !== parejaEsquinaActual);
  parejaEsquinaActual = opciones[Math.floor(Math.random() * opciones.length)];
  const destino = esquinas[parejaEsquinaActual];

  posicionarPareja(destino.x, destino.y);
  orientarPareja(false);
  decirFrasePersonaje(personajeClick, personajeClick.fraseClick);

  if (parejaTimeout) {
    clearTimeout(parejaTimeout);
    parejaTimeout = null;
  }

  parejaTimeout = setTimeout(() => {
    if (parejaModo) {
      moverParejaAleatorio();
    }
  }, 1400);
}

function activarModoPareja() {
  if (parejaModo || !personajeMauri.elemento || !personajeVicky.elemento) {
    return;
  }

  parejaModo = true;
  [personajeMauri, personajeVicky].forEach((personaje) => {
    if (personaje.timeout) {
      clearTimeout(personaje.timeout);
      personaje.timeout = null;
    }
  });
  moverParejaAleatorio();
}

function desactivarModoPareja() {
  parejaModo = false;
  parejaCorazonesActivos = false;
  limpiarCorazonesPareja();

  if (parejaTimeout) {
    clearTimeout(parejaTimeout);
    parejaTimeout = null;
  }
}

function mostrarPersonaje(personaje) {
  if (personaje.elemento) {
    return;
  }

  personaje.elemento = document.createElement("div");
  personaje.elemento.className = `personaje-rulos ${personaje.claseExtra}`;
  personaje.elemento.innerHTML = `<span class="personaje-marco"><img class="personaje-imagen" src="${personaje.src}" alt="${personaje.alt}" /></span><span class="personaje-globo"></span>`;
  personaje.elemento.setAttribute("role", "button");
  personaje.elemento.setAttribute("aria-label", `${personaje.alt} que se mueve por la pantalla`);
  personaje.elemento.tabIndex = 0;
  personaje.elemento.addEventListener("click", () => moverPersonajeAEsquina(personaje));
  personaje.elemento.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      moverPersonajeAEsquina(personaje);
    }
  });
  pantallaGaleria.appendChild(personaje.elemento);

  personaje.activo = true;
  const inicioX = personaje === personajeMauri ? 140 : 500;
  const inicioY = 180;
  personaje.elemento.style.left = `${inicioX}px`;
  personaje.elemento.style.top = `${inicioY}px`;
  if (!parejaModo) {
    moverPersonajeAleatorio(personaje);
  }
}

function evaluarDesbloqueos() {
  const crucigramaCompleto = palabrasEncontradas.size === palabrasCrucigrama.length;
  if (crucigramaCompleto) {
    mostrarPersonaje(personajeMauri);
  }

  if (vofCompleto) {
    mostrarPersonaje(personajeVicky);
  }

  if (personajeMauri.elemento && personajeVicky.elemento) {
    activarModoPareja();
  } else {
    desactivarModoPareja();
  }
}

function renderizarCrucigrama() {
  if (!crucigramaGrid || !listaPistas) {
    return;
  }

  desactivarModoPareja();

  matrizCrucigrama = crearMatrizCrucigrama();
  palabrasConCeldas = construirPalabrasConCeldas();
  celdasSeleccionadas.clear();
  celdasEncontradas.clear();
  palabrasEncontradas.clear();

  [personajeMauri, personajeVicky].forEach((personaje) => {
    if (personaje.timeout) {
      clearTimeout(personaje.timeout);
      personaje.timeout = null;
    }
    if (personaje.elemento) {
      personaje.elemento.remove();
      personaje.elemento = null;
    }
    personaje.activo = false;
    personaje.esquinaActual = 0;
  });
  parejaEsquinaActual = 0;

  crucigramaGrid.innerHTML = "";

  matrizCrucigrama.forEach((fila, filaIndex) => {
    fila.forEach((letra, colIndex) => {
      const key = keyCelda(filaIndex, colIndex);
      const celda = document.createElement("div");
      celda.className = "celda-crucigrama";
      celda.textContent = letra;
      celda.dataset.fila = String(filaIndex);
      celda.dataset.col = String(colIndex);
      celda.dataset.key = key;
      celda.setAttribute("role", "gridcell");
      celda.addEventListener("click", () => alternarCelda(filaIndex, colIndex));
      crucigramaGrid.appendChild(celda);
    });
  });

  actualizarListaPistas();
  actualizarEstadoVisualCeldas();
}

function actualizarLayoutJuegos() {
  if (!juegosSuperiores || !juegoCrucigrama || !juegoVof) {
    return;
  }

  const visibles = [juegoCrucigrama, juegoVof].filter(
    (juego) => !juego.classList.contains("oculta")
  );

  juegosSuperiores.classList.toggle("uno-activo", visibles.length === 1);
  juegoCrucigrama.classList.remove("activo-unico");
  juegoVof.classList.remove("activo-unico");

  if (visibles.length === 1) {
    visibles[0].classList.add("activo-unico");
  }
}

if (btnJugar && juegoCrucigrama) {
  btnJugar.addEventListener("click", () => {
    juegoCrucigrama.classList.toggle("oculta");
    actualizarLayoutJuegos();
  });
}

if (btnVof && juegoVof) {
  btnVof.addEventListener("click", () => {
    juegoVof.classList.toggle("oculta");
    actualizarLayoutJuegos();
  });
}

btnAbrir.addEventListener("click", async () => {
  pantallaInicio.classList.add("oculta");
  pantallaGaleria.classList.remove("oculta");
  pantallaGaleria.classList.add("activa");

  try {
    await musica.play();
  } catch (error) {
    console.warn("No se pudo reproducir el audio automáticamente:", error);
  }
});

crearGaleria();
crearCorazones();
renderizarCrucigrama();
renderizarVof();
actualizarLayoutJuegos();
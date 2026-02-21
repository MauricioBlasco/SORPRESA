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
  "IMG-20260221-WA0029.jpg"
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
  "IMG-20260221-WA0029.jpg": "JAJASJASJASJSAJJSAJASJSAJSAJSA"
};

const btnAbrir = document.getElementById("btnAbrir");
const pantallaInicio = document.getElementById("inicio");
const pantallaGaleria = document.getElementById("galeria");
const museo = document.getElementById("museo");
const musica = document.getElementById("musica");
const corazones = document.getElementById("hearts");

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

      img.addEventListener("click", (event) => {
        event.preventDefault();
        const estabaAbierto = cuadro.classList.contains("mostrar-mensaje");

        document
          .querySelectorAll(".cuadro.mostrar-mensaje")
          .forEach((item) => item.classList.remove("mostrar-mensaje"));

        if (!estabaAbierto) {
          cuadro.classList.add("mostrar-mensaje");
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
function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let noencontro = document.getElementById("noencontro");
  let regex = /^[a-zñ\s]+$/i; // Permite letras minúsculas y espacios y ñ
  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")
    .replace(/ñ/gi, "ener");


  if (texto.length != 0 && regex.test(texto)) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    noencontro.src = "./image/robot.png";
  } else {
    noencontro.src = "./image/noencontro.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Recuerda ingresar un texto válido");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let noencontro = document.getElementById("noencontro");
  let regex = /^[a-zñ\s]+$/i; // Permite letras minúsculas y espacios y ñ

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")
    .replace(/ener/gi, "ñ");

  if (texto.length != 0 && regex.test(texto)) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    noencontro.src = "./image/ia.png";
  } else {
    noencontro.src = "./image/noencontro.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Recuerda ingresar un texto válido");
  }
}

function copiarTexto() {
  let texto = document.getElementById("texto");

  // Verificar si el campo de texto está vacío
  if (texto.value.trim() === "") {
    alert("No se puede copiar texto vacío");
    return;
  }

  texto.select();
  document.execCommand("copy");

  let tituloMensaje = document.getElementById("titulo-mensaje");
  tituloMensaje.textContent = "Texto copiado con éxito";

  let noencontro = document.getElementById("noencontro");
  noencontro.src = "./image/robot.png";

  alert("Texto copiado al portapapeles");
}

function limpiarCampo() {
  let texto = document.getElementById("texto");
  texto.value = "";
  
  let tituloMensaje = document.getElementById("titulo-mensaje");
  tituloMensaje.textContent = "";

  let parrafo = document.getElementById("parrafo");
  parrafo.textContent = "";

  let noencontro = document.getElementById("noencontro");
  noencontro.src = "./image/robot.png"; // o cualquier imagen que quieras mostrar cuando el campo está vacío
  tituloMensaje.textContent = "Ingrese un nuevo mensaje";
}
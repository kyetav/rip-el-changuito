var h1Element = document.getElementById("zueira");

if (h1Element) {
  var textoOriginal = h1Element.innerText;

  var textoEmMaiusculo = textoOriginal.toUpperCase();

  h1Element.innerText = textoEmMaiusculo;
}
var audio = document.getElementById("meuAudio");
function pararAudio() {
  console.log("dasdasdsdasd");
  audio.pause();
}

function audioPlay() {
  console.log("casdasdasd");
  audio.play();
}

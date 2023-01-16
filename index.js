function calculate() {
  const nome = document.getElementsByTagName("input")[0].value;

  const altura = document.getElementsByTagName("input")[1].value;
  const alturaQuadrado = Math.pow(altura, 2);

  const peso = document.getElementsByTagName("input")[2].value;
  const imc = peso / alturaQuadrado;
  const imcInteiro = Math.round(imc);
  let msg;
  if (imcInteiro <= 18.5) {
    msg = "você está abaixo do peso ideal.";
  } else if (imcInteiro > 18.5 && imcInteiro < 24.9) {
    msg = "seu peso está normal.";
  } else if (imcInteiro > 25 && imcInteiro < 29.9) {
    msg = "você está com sobrepeso.";
  } else if (imcInteiro > 30 && imcInteiro < 34.9) {
    msg = "você está com obesidade grau |.";
  } else if (imcInteiro > 35 && imcInteiro < 39.9) {
    msg = "você está com obesidade grau | | .";
  } else if (imcInteiro >= 40) {
    msg = "você está com obesidade grau | | | .";
  } else {
    msg = "prencha os campos corretamente!";
  }

  console.log(imcInteiro);

  document.getElementsByTagName(
    "section"
  )[0].innerHTML = `<p>${nome} seu IMC é ${imcInteiro} ${msg}</p>`;
}

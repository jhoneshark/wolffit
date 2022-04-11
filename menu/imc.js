setInterval(function(){
  const clock = document.querySelector(".display");
  let time = new Date();
  let sec = time.getSeconds();
  let min = time.getMinutes();
  let hr = time.getHours();
  let day = 'WF';
  if(hr > 24){
    day = 'WF';
    hr = hr - 24;
  }
  if(hr == 0){
    hr = 12;
  }
  if(sec < 10){
    sec = '0' + sec;
  }
  if(min < 10){
    min = '0' + min;
  }
  if(hr < 10){
    hr = '0' + hr;
  }
  clock.textContent = hr + ':' + min + ':' + sec + " " + day;
});




const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorIMC = (peso / (altura * altura)).toFixed(2);

    let classificacao = "";

    if (valorIMC < 18.5) {
      classificacao = "abaixo do peso.";
    } else if (valorIMC < 25) {
      classificacao = "com peso ideal. Parabéns!!!";
    } else if (valorIMC < 30) {
      classificacao = "levemente acima do peso.";
    } else if (valorIMC < 35) {
      classificacao = "com obesidade grau I.";
    } else if (valorIMC < 40) {
      classificacao = "com obesidade grau II";
    } else {
      classificacao = "com obesidade grau III. Cuidado!!";
    }

    resultado.innerText = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
  } else {
    resultado.innerText = "Preencha todos os campos!!!";
  }
}


  calcular.addEventListener("click", imc);


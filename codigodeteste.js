function calcularValorImpressao() {
  var tempo = parseFloat(document.getElementById("tempo-impressao").value);
  var gramas = parseFloat(document.getElementById("gramas-utilizadas").value);
  var valorFilamento = parseFloat(document.getElementById("valor-filamento").value);

  if (isNaN(tempo) || isNaN(gramas) || isNaN(valorFilamento)) {
    document.getElementById("resultado-impressao").innerHTML = "Preencha todos os campos corretamente.";
    return;
  }

  var valorImpressao = (tempo * 0.1 + gramas * 0.01) * valorFilamento;

  document.getElementById("resultado-impressao").innerHTML = "Valor da Impressão: R$ " + valorImpressao.toFixed(2);

  if (document.getElementById("kwh-utilizado").value !== "") {
    calcularValorTotal();
  }
}

function calcularValorEnergia() {
  var valorConta = parseFloat(document.getElementById("valor-conta-luz").value);
  var kwhUtilizado = parseFloat(document.getElementById("kwh-utilizado").value);

  if (isNaN(valorConta) || isNaN(kwhUtilizado)) {
    document.getElementById("resultado-energia").innerHTML = "Preencha todos os campos corretamente.";
    return;
  }

  var valorKwh = valorConta / kwhUtilizado;

  document.getElementById("resultado-energia").innerHTML = "Valor do kWh: R$ " + valorKwh.toFixed(2);

  if (document.getElementById("tempo-impressao").value !== "" && document.getElementById("gramas-utilizadas").value !== "" && document.getElementById("valor-filamento").value !== "") {
    calcularValorTotal();
  }
}

function calcularValorTotal() {
  var valorImpressao = parseFloat(document.getElementById("resultado-impressao").textContent.split("R$ ")[1]);
  var valorKwh = parseFloat(document.getElementById("resultado-energia").textContent.split("R$ ")[1]);
  var horasImpressao = parseFloat(document.getElementById("horas-impressao").value);

  if (isNaN(valorImpressao) || isNaN(valorKwh) || isNaN(horasImpressao)) {
    document.getElementById("resultado-total").innerHTML = "Preencha todos os campos corretamente.";
    return;
  }

  var valorCobrado = valorImpressao + (valorKwh + horasImpressao * 3);

  document.getElementById("resultado-total").innerHTML = "Valor Total: <strong>R$ " + valorCobrado.toFixed(2) + "</strong>";
}

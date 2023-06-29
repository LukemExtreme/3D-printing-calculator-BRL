function calcularValorImpressao() {
  const tempoImpressao = parseFloat(document.getElementById("tempoImpressao").value);
  const gramasFilamento = parseFloat(document.getElementById("gramasFilamento").value);
  const valorFilamento = parseFloat(document.getElementById("valorFilamento").value);

  if (isNaN(tempoImpressao) || isNaN(gramasFilamento) || isNaN(valorFilamento)) {
    document.getElementById("resultadoValorImpressao").innerHTML = "Por favor, preencha todos os campos.";
    return;
  }

  const valorImpressao = (tempoImpressao * gramasFilamento * valorFilamento) / 1000;

  document.getElementById("resultadoValorImpressao").innerHTML = `Valor da Impressão: R$ ${valorImpressao.toFixed(2)}`;
}

function calcularValorEnergia() {
  const valorContaLuz = parseFloat(document.getElementById("valorContaLuz").value);
  const consumoKwh = parseFloat(document.getElementById("consumoKwh").value);

  if (isNaN(valorContaLuz) || isNaN(consumoKwh)) {
    document.getElementById("resultadoValorEnergia").innerHTML = "Por favor, preencha todos os campos.";
    return;
  }

  const valorKwh = valorContaLuz / consumoKwh;

  document.getElementById("resultadoValorEnergia").innerHTML = `Valor do kWh (R$/kWh): ${valorKwh.toFixed(2)}`;
}

function calcularGastoEnergiaImpressora() {
  const consumoKwhImpressora = parseFloat(document.getElementById("consumoKwhImpressora").value);

  if (isNaN(consumoKwhImpressora)) {
    document.getElementById("resultadoGastoEnergiaImpressora").innerHTML = "Por favor, preencha o campo.";
    return;
  }

  const horasImpressao = parseFloat(document.getElementById("tempoImpressao").value) || 0;
  const valorKwh = parseFloat(document.getElementById("resultadoValorEnergia").innerHTML.split(":")[1]);

  const gastoEnergiaImpressora = consumoKwhImpressora * horasImpressao * valorKwh;

  document.getElementById("resultadoGastoEnergiaImpressora").innerHTML = `Gasto de Energia da Impressora: R$ ${gastoEnergiaImpressora.toFixed(2)}`;
}

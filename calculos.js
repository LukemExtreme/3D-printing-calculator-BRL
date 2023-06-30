function calculatePrintCost() {
  var printTime = parseFloat(document.getElementById("print-time").value);
  var filamentUsage = parseFloat(document.getElementById("filament-usage").value);
  var filamentCost = parseFloat(document.getElementById("filament-cost").value);

  if (isNaN(printTime) || isNaN(filamentUsage) || isNaN(filamentCost)) {
    document.getElementById("print-cost-result").innerHTML = "Por favor, preencha todos os campos corretamente.";
    return;
  }

  var printCost = printTime + filamentUsage + filamentCost;
  document.getElementById("print-cost-result").innerHTML = "Valor da Impressão: R$ " + printCost.toFixed(2);

  if (document.getElementById("energy-cost").value !== "" && document.getElementById("energy-usage").value !== "") {
    calculateTotalCost();
  }
}

function calculateEnergyCost() {
  var energyCost = parseFloat(document.getElementById("energy-cost").value);
  var energyUsage = parseFloat(document.getElementById("energy-usage").value);

  if (isNaN(energyCost) || isNaN(energyUsage)) {
    document.getElementById("energy-cost-result").innerHTML = "Por favor, preencha todos os campos corretamente.";
    return;
  }

  var energyCostResult = energyCost * energyUsage;
  document.getElementById("energy-cost-result").innerHTML = "Custo da Energia: R$ " + energyCostResult.toFixed(2);

  if (document.getElementById("print-time").value !== "" && document.getElementById("filament-usage").value !== "" && document.getElementById("filament-cost").value !== "") {
    calculateTotalCost();
  }
}

function calculatePrinterConsumption() {
  var printerPower = parseFloat(document.getElementById("printer-power").value);
  var printerUsageTime = parseFloat(document.getElementById("printer-usage-time").value);

  if (isNaN(printerPower) || isNaN(printerUsageTime)) {
    document.getElementById("printer-consumption-result").innerHTML = "Por favor, preencha todos os campos corretamente.";
    return;
  }

  var printerConsumption = printerPower * printerUsageTime;
  document.getElementById("printer-consumption-result").innerHTML = "Consumo da Impressora: " + printerConsumption.toFixed(2) + " Watts";
}

function calculateTotalCost() {
  var printCost = parseFloat(document.getElementById("print-cost-result").textContent.split("R$ ")[1]);
  var energyCost = parseFloat(document.getElementById("energy-cost-result").textContent.split("R$ ")[1]);

  if (isNaN(printCost) || isNaN(energyCost)) {
    document.getElementById("total-cost-result").innerHTML = "Preencha todos os campos corretamente.";
    return;
  }

  var totalCost = printCost + energyCost;
  document.getElementById("total-cost-result").innerHTML = "Custo Total: R$ " + totalCost.toFixed(2);
}

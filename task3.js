const convertButton = document.getElementById('convertButton');
const temperatureInput = document.getElementById('temperatureInput');
const unitSelector = document.getElementById('unitSelector');
const resultElement = document.getElementById('result');

convertButton.addEventListener('click', () => {
  const temperature = parseFloat(temperatureInput.value);
  const selectedUnit = unitSelector.value;
  let convertedTemperature;
  let convertedUnit;

  if (selectedUnit === 'celsius') {
    convertedTemperature = (temperature - 32) * 5/9;
    convertedUnit = 'Celsius';
  } else if (selectedUnit === 'fahrenheit') {
    convertedTemperature = (temperature * 9/5) + 32;
    convertedUnit = 'Fahrenheit';
  } else if (selectedUnit === 'kelvin') {
    convertedTemperature = temperature + 273.15;
    convertedUnit = 'Kelvin';
  }

  resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
});

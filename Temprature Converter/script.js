function convertTemperature() {
	const inputTemp = parseFloat(document.getElementById("inputTemp").value);
	const inputUnit = document.getElementById("inputUnit").value;
	const outputUnit = document.getElementById("outputUnit").value;
	let outputTemp;

	if (inputUnit === "celsius") {
		if (outputUnit === "celsius") {
			outputTemp = inputTemp;
		} else if (outputUnit === "fahrenheit") {
			outputTemp = (inputTemp * 9/5) + 32;
		} else if (outputUnit === "kelvin") {
			outputTemp = inputTemp + 273.15;
		}
	} else if (inputUnit === "fahrenheit") {
		if (outputUnit === "celsius") {
			outputTemp = (inputTemp - 32) * 5/9;
		} else if (outputUnit === "fahrenheit") {
			outputTemp = inputTemp;
		} else if (outputUnit === "kelvin") {
			outputTemp = (inputTemp + 459.67) * 5/9;
		}
	} else if (inputUnit === "kelvin") {
		if (outputUnit === "celsius") {
			outputTemp = inputTemp - 273.15;
		} else if (outputUnit === "fahrenheit") {
			outputTemp = (inputTemp * 9/5) - 459.67;
		} else if (outputUnit === "kelvin") {
			outputTemp = inputTemp;
		}
	}

	document.getElementById("outputTemp").value = outputTemp.toFixed(2);
}

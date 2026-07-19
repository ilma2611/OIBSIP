const input = document.getElementById("temperature");

const unit = document.getElementById("unit");

const convertBtn = document.getElementById("convertBtn");

const error = document.getElementById("error");

const celsiusResult = document.getElementById("celsiusResult");

const fahrenheitResult = document.getElementById("fahrenheitResult");

const kelvinResult = document.getElementById("kelvinResult");

convertBtn.addEventListener("click", convertTemperature);

function convertTemperature() {

    error.textContent = "";

    let value = input.value.trim();

    if (value === "") {

        error.textContent = "Please enter a temperature.";

        return;
    }

    if (isNaN(value)) {

        error.textContent = "Only numeric values are allowed.";

        return;
    }

    value = parseFloat(value);

    let celsius;
    let fahrenheit;
    let kelvin;

    if (unit.value === "celsius") {

        if (value < -273.15) {

            error.textContent =
                "Temperature cannot be below Absolute Zero (-273.15°C).";

            return;
        }

        celsius = value;

        fahrenheit = (value * 9 / 5) + 32;

        kelvin = value + 273.15;

    }

    else if (unit.value === "fahrenheit") {

        if (value < -459.67) {

            error.textContent =
                "Temperature cannot be below Absolute Zero (-459.67°F).";

            return;
        }

        celsius = (value - 32) * 5 / 9;

        fahrenheit = value;

        kelvin = celsius + 273.15;

    }

    else {

        if (value < 0) {

            error.textContent =
                "Temperature cannot be below Absolute Zero (0 K).";

            return;
        }

        kelvin = value;

        celsius = value - 273.15;

        fahrenheit = (celsius * 9 / 5) + 32;

    }

    celsiusResult.textContent =
        "Celsius : " + celsius.toFixed(2) + " °C";

    fahrenheitResult.textContent =
        "Fahrenheit : " + fahrenheit.toFixed(2) + " °F";

    kelvinResult.textContent =
        "Kelvin : " + kelvin.toFixed(2) + " K";

}
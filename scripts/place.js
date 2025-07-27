let temperature = 29; //temperature in Celsius
let windSpeed = 3; //wind speed in km/h


function calculateWindChill(tempC, windKmh) {
    return Math.round(13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16));
}

let windChill = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed) + " °C";
}
document.getElementById("windChill").textContent = windChill;
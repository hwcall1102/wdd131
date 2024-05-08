// get current date
const today = new Date();

const year = document.querySelector("#currentyear");
year.innerHTML = `<span>${today.getFullYear()}</span>`;

const modified = document.querySelector("#lastModified");
modified.innerHTML = `Last Modification <span>${document.lastModified}</span>`;
//

function calculateWindChill(temperature, windSpeed) {
    if (temperature < 10 && windSpeed > 4.8) {
        return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    } else {
        return null;
    }
}

const temp = 20;
const wind = 16;

const windChill = calculateWindChill(temp, wind);

if (windChill !== null) {
    const windchillvalue = document.querySelector("#windchillvalue");
    windchillvalue.innerHTML = `<span>${windChill}</span>`;
}
else {
    const windchillvalue = document.querySelector("#windchillvalue");
    windchillvalue.innerHTML = `<span>N/A<span>`;
}

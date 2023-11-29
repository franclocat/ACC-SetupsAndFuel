function calculateFuel() {
    var TR = parseInt(document.getElementById("raceLength").value);
    var minutesInSeconds = parseInt(document.getElementById("minutes").value) * 60;
    var seconds = parseInt(document.getElementById("seconds").value);
    var FL = parseFloat(document.getElementById("fuelPerLap").value);
    var result = parseInt(((TR * 60) / (minutesInSeconds + seconds) ) * FL + (2 * FL));

    document.getElementById("res").innerHTML = result + " L";
}
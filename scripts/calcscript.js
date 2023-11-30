if (lapsSelect.checked) {
    document.getElementById("changeableLengthType").innerHTML = "Racing Laps";
}

function calculateFuel() {

    var TR = parseInt(document.getElementById("raceLength").value);
    var minutesInSeconds = parseInt(document.getElementById("minutes").value) * 60;
    var seconds = parseInt(document.getElementById("seconds").value);
    var FL = parseFloat(document.getElementById("fuelPerLap").value);
    var result = parseInt(((TR * 60) / (minutesInSeconds + seconds) ) * FL + (2 * FL));

    var timeSelect = document.getElementById("timeSelect");
    var lapsSelect = document.getElementById("laps");

    if (timeSelect.checked) {
        var result = parseInt(((TR * 60) / (minutesInSeconds + seconds) ) * FL + (2 * FL));
    } else if (lapsSelect.checked) {
        var result = parseInt(TR * FL);
    }
    

    if (isNaN(result)) {
        document.getElementById("res").innerHTML = "0 L";  
    } else {
        document.getElementById("res").innerHTML = result + " L";
    }
}
function getChangeableElement() {
    var timeSelect = document.getElementById("timeSelect");
    var lapsSelect = document.getElementById("laps");
    if (timeSelect.checked) {
        document.getElementById("changeableLengthType").innerHTML = "Racing time in minutes";
    } else if (lapsSelect.checked) {
        document.getElementById("changeableLengthType").innerHTML = "Racing Laps";
    } else {
        document.getElementById("changeableLengthType").innerHTML = "Select a length method";
    }
}
setInterval(getChangeableElement,0);


function calculateFuel() {
    var raceLength = parseInt(document.getElementById("raceLength").value);
    var fuelPerLap = parseFloat(document.getElementById("fuelPerLap").value);

    var timeSelect = document.getElementById("timeSelect");
    var lapsSelect = document.getElementById("laps");
    var resElement = document.getElementById("res");

    if (timeSelect.checked) {
        lapsSelect.checked = false; // Uncheck lapsSelect if timeSelect is checked
        // Rest of the calculation remains the same...
        var minutesInSeconds = parseInt(document.getElementById("minutes").value) * 60;
        var seconds = parseInt(document.getElementById("seconds").value);
        var totalTimeInSeconds = minutesInSeconds + seconds;
        var resultTime = parseInt(((raceLength * 60) / totalTimeInSeconds) * fuelPerLap + 2 * fuelPerLap);
        resElement.innerHTML = isNaN(resultTime) ? "0 L" : resultTime + " L";
    } else if (lapsSelect.checked) {
        timeSelect.checked = false; // Uncheck timeSelect if lapsSelect is checked
        // Rest of the calculation for lapsSelect...
        var racingLaps = raceLength; // Assuming raceLength represents number of laps
        // Calculate fuel based on laps logic
        var resultLaps = parseInt(racingLaps * fuelPerLap);
        resElement.innerHTML = isNaN(resultLaps) ? "0 L" : resultLaps + " L";
    }
}
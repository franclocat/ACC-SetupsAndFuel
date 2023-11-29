// List of track names
const accTracks = [
    'Zandvoort',
    'Misano',
    'Brands Hatch',
    'Silverstone',
    'Circuit de Barcelona-Catalunya',
    'Paul Ricard',
    'Hungaroring',
    'Nürburgring',
    'Spa-Francorchamps',
    'Monza',
    'Circuit de Nevers Magny-Cours',
    'Circuit Zolder',
    'Circuit de Spa-Francorchamps 24H',
    'Suzuka Circuit',
    'Circuit de Barcelona-Catalunya 2019',
    'Laguna Seca',
    'Kyalami Grand Prix Circuit',
    'Mount Panorama Circuit',
    'Suzuka Circuit East Course',
    'Suzuka Circuit West Course'
  ];
const buttonContainer = document.getElementById('tracks');

// Create buttons for each track
accTracks.forEach(track => {
  const button = document.createElement('button');
  button.id = track; // Set the button ID to the track name
  button.innerText = track; // Display the track name on the button
  buttonContainer.appendChild(button); // Append button to the container

  // Set background image for each button (assuming images are named accordingly)
  button.style.backgroundImage = `url('imgs/${track}.jpg')`;
});
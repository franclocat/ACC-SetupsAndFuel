document.addEventListener("DOMContentLoaded", function () {
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
      'Suzuka Circuit',
      'Laguna Seca',
      'Kyalami Grand Prix Circuit',
      'Mount Panorama Circuit'
    ];
  
    const tracksContainer = document.getElementById('tracks');
  
    // Create buttons for each track and append them to the 'tracks' div
    accTracks.forEach(track => {
      const button = document.createElement('button');
      button.id = track; // Set the button ID to the track name
      button.innerText = track; // Display the track name on the button
      tracksContainer.appendChild(button); // Append button to the 'tracks' div
  
      // Set background image for each button (images are named accordingly)
      button.style.backgroundImage = `url('imgs/${track}.jpg')`;
      button.style.backgroundSize = 'cover'; // Adjust background size to cover the button
      button.style.backgroundPosition = 'center'; // Center the background image
      button.style.backgroundRepeat = 'no-repeat'; // Prevent background image from repeating
    });
  });
  
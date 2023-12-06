// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = '22f21ffb2bc24569eb4bfbee1472e28909db72b1';

// API endpoint for Bandung
const apiUrl = `https://api.waqi.info/feed/geo:-6.888268;107.611394/?token=${apiKey}`;

// Fetch AQI data
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Assume the AQI value is available in the 'aqi' property
        window.bandungAqi = data.data.aqi;
    })
    .catch(error => console.error('Error fetching AQI:', error));
// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = '22f21ffb2bc24569eb4bfbee1472e28909db72b1';

// API endpoint for Jakarta
const apiUrl = `https://api.waqi.info/feed/geo:-6.2088;106.8456/?token=${apiKey}`;

// Fetch AQI data
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Assume the AQI value is available in the 'aqi' property
        window.jakartaAqi = data.data.aqi;
    })
    .catch(error => console.error('Error fetching AQI:', error));

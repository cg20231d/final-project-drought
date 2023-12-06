// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = '22f21ffb2bc24569eb4bfbee1472e28909db72b1';

// API endpoint for Surabaya
const apiUrl = `https://api.waqi.info/feed/geo:-7.2575;112.7521/?token=${apiKey}`;

// Fetch AQI data
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Assume the AQI value is available in the 'aqi' property
        window.surabayaAqi = data.data.aqi;
    })
    .catch(error => console.error('Error fetching AQI:', error));

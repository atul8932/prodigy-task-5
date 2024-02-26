function fetchWeather() {
    const apiKey = 'a66be628d8ecb73bb854a9a3012307a1'; // Replace 'YOUR_API_KEY' with your actual API key
    const locationInput = document.getElementById('locationInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Weather Data:', data); // Log the API response for debugging
            // Update the DOM with weather information
            if (data && data.main && data.main.temp !== undefined) {
                document.getElementById('location').textContent = data.name;
                document.getElementById('temperature').textContent = `${data.main.temp} °C`;
                document.getElementById('conditions').textContent = data.weather[0].description;
            } else {
                throw new Error('Invalid data format received from API');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            // Display an error message to the user
            document.getElementById('location').textContent = 'Error fetching weather';
            document.getElementById('temperature').textContent = '';
            document.getElementById('conditions').textContent = '';
        });
}

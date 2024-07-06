document.getElementById('locationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let locationInput = document.getElementById('locationInput').value;

    let apiKey = 'YOUR_API_KEY';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {

            displayWeather(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            alert('Unable to fetch weather data. Please try again.');
        });
});

function displayWeather(data) {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const weatherDescription = weather[0].description;

    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <h2>Current Weather in ${name}</h2>
        <p><strong>Temperature:</strong> ${temperature}°C</p>
        <p><strong>Condition:</strong> ${weatherDescription}</p>
    `;
}

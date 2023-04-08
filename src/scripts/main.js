'use strict';

import autosizeInput from 'autosize-input';
import '../styles/index.scss';
import getWeatherData from './weatherData';
import getIcon from './iconMapper';

const locationForm = document.getElementById('location-form');
const locationInput = document.getElementById('location-input');

// third-party library function to make text input resize to content
autosizeInput(locationInput);
locationInput.focus();

locationForm.addEventListener('submit', (e) => {
	e.preventDefault();
	locationInput.blur();
});

locationInput.addEventListener('focusout', () => updateData(locationInput.value));
locationInput.addEventListener('input', clearError);

function updateData(location) {
	if (!location) {
		return;
	}

	getWeatherData(location.toLowerCase().trim())
		.then((data) => {
			displayData(data);
		})
		.catch((error) => {
			console.error(`Failed to update data: ${error}`);
			showError();
		});
}

function displayData(data) {
	console.log(data);
	updateLocationDetails(data.location);
	updateCurrentWeatherInfo(data.current);
	updateCurrentWeatherDetails(data.current);
}

function showError() {
	clearError();
	locationInput.classList.add('invalid');
}

function clearError() {
	locationInput.classList.remove('invalid');
}

function updateLocationDetails(locationData) {
	const locationDetailsLabel = document.getElementById('location-details');

	let locationDetails = '';

	if (locationData.region) {
		locationDetails += locationData.region + ', ';
	}
	locationDetails += locationData.country;

	locationDetailsLabel.textContent = locationDetails;
}

function updateCurrentWeatherInfo(weatherData) {
	const currentTemperatureLabel = document.getElementById('current-temperature-label');
	const feelsLikeLabel = document.getElementById('feels-like-label');
	const conditionLabel = document.getElementById('current-condition-label');
	const conditionIcon = document.getElementById('current-condition-icon');

	currentTemperatureLabel.innerText = weatherData.temp_c;
	feelsLikeLabel.textContent = weatherData.feelslike_c;
	conditionLabel.textContent = weatherData.condition.text;
	conditionIcon.innerHTML = getIcon(weatherData.condition.text);
}

const aqiStatus = {
	1: 'Good',
	2: 'Moderate',
	3: 'Unhealthy for sensitive group',
	4: 'Unhealthy',
	5: 'Very unhealthy',
	6: 'Hazardous',
};

function updateCurrentWeatherDetails(weatherData) {
	const windSpeedLabel = document.getElementById('details-wind-speed');
	const windDirLabel = document.getElementById('details-wind-dir');
	const humidityLabel = document.getElementById('details-humidity');
	const cloudLabel = document.getElementById('details-cloud');
	const pressureLabel = document.getElementById('details-pressure');
	const aqiLabel = document.getElementById('details-aqi');

	windSpeedLabel.textContent = `${weatherData.wind_kph}kph`;
	windDirLabel.textContent = `${weatherData.wind_dir} (${weatherData.wind_degree}\xBA)`;
	humidityLabel.textContent = `${weatherData.humidity}%`;
	cloudLabel.textContent = `${weatherData.cloud}%`;
	pressureLabel.textContent = `${weatherData.pressure_mb}mb`;
	aqiLabel.textContent = aqiStatus[weatherData.air_quality['us-epa-index']];
}

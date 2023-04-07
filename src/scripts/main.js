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
	updateData(locationInput.value.toLowerCase().trim());
});

locationInput.addEventListener('focusout', () => updateData(locationInput.value));
locationInput.addEventListener('input', clearError);

function updateData(location) {
	if (!location) {
		return;
	}

	getWeatherData(location)
		.then((data) => {
			displayData(data);
			locationInput.blur();
		})
		.catch((error) => {
			console.error(`Failed to update data: ${error}`);
			showError();
		});
}

function displayData(data) {
	updateLocationDetails(data.location);
	updateCurrentWeatherInfo(data.current);
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

'use strict';

import autosizeInput from 'autosize-input';
import '../styles/index.scss';
import getWeatherData from './weatherData';

const locationForm = document.getElementById('location-form');
const locationInput = document.getElementById('location-input');
const locationDetailsLabel = document.getElementById('location-details');

// third-party library function to make text input resize to content
autosizeInput(locationInput);

locationInput.focus();

locationForm.addEventListener('submit', (e) => {
	e.preventDefault();
	updateData(locationInput.value);
});

locationInput.addEventListener('focusout', () => updateData(locationInput.value));

function updateData(location) {
	clearError();

	if (!location) {
		return;
	}

	getWeatherData(location)
		.then(displayData)
		.catch((error) => {
			console.error(`Failed to update data: ${error}`);
			showError();
		});
}

function displayData(data) {
	console.log(data);
}

function showError() {
	locationInput.classList.add('invalid');
}

function clearError() {
	locationInput.classList.remove('invalid');
}

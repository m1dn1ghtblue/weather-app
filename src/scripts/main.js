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
	console.log(data);
	updateLocationDetails(data.location);
}

function showError() {
	clearError();
	locationInput.classList.add('invalid');
}

function clearError() {
	locationInput.classList.remove('invalid');
}

function updateLocationDetails(locationData) {
	let locationDetails = '';

	if (locationData.region) {
		locationDetails += locationData.region + ', ';
	}
	locationDetails += locationData.country;

	locationDetailsLabel.textContent = locationDetails;
}

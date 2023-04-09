'use strict';

import autosizeInput from 'autosize-input';
import '../styles/index.scss';
import getWeatherData from './weatherData';
import getIcon from './iconMapper';
import sunriseSvg from '../resources/weather-icons/sunrise.svg';
import sunsetSvg from '../resources/weather-icons/sunset.svg';

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
	updateLocationDetails(data);
	updateCurrentWeatherInfo(data);
	updateCurrentWeatherDetails(data);
	updateForecast(data);
}

function showError() {
	clearError();
	locationInput.classList.add('invalid');
}

function clearError() {
	locationInput.classList.remove('invalid');
}

function updateLocationDetails(weatherData) {
	const locationData = weatherData.location;
	const locationDetailsLabel = document.getElementById('location-details');

	let locationDetails = '';

	if (locationData.region) {
		locationDetails += locationData.region + ', ';
	}
	locationDetails += locationData.country;

	locationDetailsLabel.textContent = locationDetails;
}

function updateCurrentWeatherInfo(weatherData) {
	const currentData = weatherData.current;

	const currentTemperatureLabel = document.getElementById('current-temperature-label');
	const feelsLikeLabel = document.getElementById('feels-like-label');
	const conditionLabel = document.getElementById('current-condition-label');
	const conditionIcon = document.getElementById('current-condition-icon');

	currentTemperatureLabel.textContent = `${currentData.temp_c}\u2103`;
	feelsLikeLabel.textContent = `Feels like ${currentData.feelslike_c}\u2103`;
	conditionLabel.textContent = currentData.condition.text;
	conditionIcon.innerHTML = getIcon(currentData.condition.text);
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
	const currentData = weatherData.current;
	const windSpeedLabel = document.getElementById('details-wind-speed');
	const windDirLabel = document.getElementById('details-wind-dir');
	const humidityLabel = document.getElementById('details-humidity');
	const cloudLabel = document.getElementById('details-cloud');
	const pressureLabel = document.getElementById('details-pressure');
	const aqiLabel = document.getElementById('details-aqi');

	windSpeedLabel.textContent = `${currentData.wind_kph}kph`;
	windDirLabel.textContent = `${currentData.wind_dir} (${currentData.wind_degree}\xBA)`;
	humidityLabel.textContent = `${currentData.humidity}%`;
	cloudLabel.textContent = `${currentData.cloud}%`;
	pressureLabel.textContent = `${currentData.pressure_mb}mb`;
	aqiLabel.textContent = aqiStatus[currentData.air_quality['us-epa-index']];
}

function updateForecast(weatherData) {
	const dayData = weatherData.forecast.forecastday[0];
	console.log(dayData);

	const sunriseIcon = document.getElementById('sunrise-icon');
	const sunsetIcon = document.getElementById('sunset-icon');
	const sunriseTimeLabel = document.getElementById('sunrise-time-label');
	const sunsetTimeLabel = document.getElementById('sunset-time-label');

	sunriseIcon.innerHTML = sunriseSvg;
	sunsetIcon.innerHTML = sunsetSvg;
	sunriseTimeLabel.textContent = dayData.astro.sunrise;
	sunsetTimeLabel.textContent = dayData.astro.sunset;

	const forecastContainer = document.getElementById('forecast-container');
	while (forecastContainer.firstChild) {
		forecastContainer.removeChild(forecastContainer.firstChild);
	}

	let scrollHeight = 0;

	for (let i = 0; i < 24; ++i) {
		const hourData = dayData.hour[i];
		const element = makeForecastElement(hourData);
		forecastContainer.appendChild(element);

		if (getHour(hourData.time) == getHour(weatherData.current.last_updated)) {
			element.classList.add('currentHour');
			scrollHeight = element.offsetHeight * i;
		}
	}

	forecastContainer.scrollTo(0, scrollHeight);
}

function makeForecastElement(hourData) {
	const element = document.createElement('div');
	element.classList.add('forecast-element');

	const hourLabel = document.createElement('h3');
	hourLabel.textContent = hourData.time.split(' ')[1];
	hourLabel.classList.add('forecast-time');
	element.appendChild(hourLabel);

	const tempLabel = document.createElement('span');
	tempLabel.textContent = hourData.temp_c + '\u2103';
	tempLabel.classList.add('forecast-temp');
	element.appendChild(tempLabel);

	const conditionIcon = document.createElement('svg');
	conditionIcon.innerHTML = getIcon(hourData.condition.text);
	element.appendChild(conditionIcon);
	return element;
}

function getHour(timeString) {
	return timeString.split(' ')[1].split(':')[0];
}

'use strict';

const API_KEY = '18d0a9f1ed314c8e8cc120921230304';

export default async function getWeatherData(location) {
	try {
		const response = await fetch(
			`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=1&aqi=yes&alerts=no`
		);
		if (!response.ok) {
			throw Error(`Response status: ${response.status}`);
		}

		const jsonData = await response.json();

		return Promise.resolve(jsonData);
	} catch (error) {
		return Promise.reject(`Failed to get data for location '${location}': ${error}`);
	}
}

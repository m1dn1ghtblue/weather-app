import autosizeInput from 'autosize-input';
import '../styles/index.scss';

const locationInput = document.getElementById('location-input');

autosizeInput(locationInput);
locationInput.focus();

import axios from 'axios';
import { Constants } from '../constants';

export function fetchWeather(city) {
	const url = Constants.ROOT_URL + Constants.API_KEY + '&q=' + city + ',in';
	const request = axios.get(url);
	return {
		type : Constants.actions.FETCH_WEATHER,
		payload : request
	}
}

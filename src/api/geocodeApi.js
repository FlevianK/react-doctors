import axios from 'axios';

const API_URL = 'https://api.opencagedata.com/geocode/v1/';
const KEY = process.env.OPEN_CAGE_DATA_KEY;

export const fetchLocationGeocode = location =>
  axios.get(`${API_URL}/json?q=${location}&key=${KEY}`);

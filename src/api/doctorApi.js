import axios from 'axios';

const API_URL = 'https://api.betterdoctor.com/2016-03-01';
const USER_KEY = process.env.BETTER_DOCTORS_USER_KEY;

export const fetchCurrentLocationDoctors = (long, lat, limit, offset, radius) =>
  axios.get(
    // eslint-disable-next-line max-len
    `${API_URL}/doctors?location=${lat}%2C${long}%2C${radius}&user_location${lat}%2C${long}&skip=${offset}&limit=${limit}&user_key=${USER_KEY}`
  );

export const fetchSearchedLocationDoctors = (long, lat, limit, offset, radius) =>
  axios.get(
    `${API_URL}/doctors?location=${lat}%2C${long}%2C${radius}&skip=${offset}&limit=${limit}&user_key=${USER_KEY}`
  );

import toastr from 'toastr';

import {
  fetchCurrentLocationDoctors,
  fetchSearchedLocationDoctors
} from '../api/doctorApi';
import { fetchLocationGeocode } from '../api/geocodeApi';
import { filterData } from './helpers/dataFormater';

export const FETCH_DOCTORS = 'FETCH_DOCTORS';

const getCurrentLocationLatLng = async () =>
  navigator.geolocation ?
    // eslint-disable-next-line no-undef
    await new Promise((resolve, reject) => {
      return navigator.geolocation.getCurrentPosition(
        position => {
          resolve([position.coords.longitude, position.coords.latitude]);
        },
        error => {
          reject(error);
        }
      );
    }) :
    toastr.error('Geolocation is not supported by this browser.');

const getSearchedLocationLatLng = async location => {
  try {
    const response = await fetchLocationGeocode(location);
    return [
      response.data.results[0].geometry.lng,
      response.data.results[0].geometry.lat
    ];
  } catch (e) {
    toastr.error('Location not registered on the map');
  }
};

export const getDoctors = (location, limit, offset, radius) => {
  /**
   * getDoctors method
   * @params data - search value, limit and offset
   * @return all doctors depending on the loation and specified range
   *
   */
  return async dispatch => {
    try {
      const coordinates =
        location === 'my-current-location' ?
          await getCurrentLocationLatLng() :
          await getSearchedLocationLatLng(location);
      const response =
        location === 'my-current-location' ?
          await fetchCurrentLocationDoctors(
            coordinates[0],
            coordinates[1],
            limit,
            offset,
            radius
          ) :
          await fetchSearchedLocationDoctors(
            coordinates[0],
            coordinates[1],
            limit,
            offset,
            radius
          );
      dispatch({
        type: FETCH_DOCTORS,
        payload: filterData(response.data)
      });
    } catch (error) {
      console.log(error);
    }
  };
};

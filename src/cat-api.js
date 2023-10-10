import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_z8dVYuBtoOtSSnZZycuCAFGX1i48r9Am8iHB4fmcs58mMy9XAdgrrOv14O95nLt0';

const baseUrl = 'https://api.thecatapi.com/v1';

export const fetchBreeds = () => {
  return axios.get(`${baseUrl}/breeds`)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
};

export const fetchCatByBreed = (breedId) => {
  return axios.get(`${baseUrl}/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
};
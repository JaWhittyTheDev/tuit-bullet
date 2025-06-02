import axios from "axios";

export function getLatestPublication() {
  return axios.get('http://localhost:5000/api/latest-publication') // Впишите тут URL бэкенда
    .then(response => response.data)
    .catch(error => {
      console.error('Error: ', error, ' try again later.');
      throw error;
    });
}
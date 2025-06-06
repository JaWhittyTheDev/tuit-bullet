import axios from "axios";
import type { RefObject } from "react";

export function getLatestPublication() {
  return axios.get('http://localhost:5000/api/latest-publication') // Впишите тут URL бэкенда
    .then(response => response.data)
    .catch(error => {
      console.error('Error: ', error, ' try again later.');
      throw error;
    });
}

export function getMostReadPapers() {
  return axios.get('http://localhost:5000/api/papers/most-read')
  .then(response => response.data)
}

export function getLastPaper() {
  return axios.get('http://localhost:5000/api/papers/last-paper')
  .then (response => response.data)
}

export function register(first_name: RefObject<HTMLInputElement>, last_name: RefObject<HTMLInputElement>, date: RefObject<HTMLInputElement>, email: RefObject<HTMLInputElement>, organization: RefObject<HTMLInputElement>, login: RefObject<HTMLInputElement>, password: RefObject<HTMLInputElement>, scientific_degree: RefObject<HTMLInputElement>, another_information: RefObject<HTMLInputElement>, avatarurl: string, errorsRef: RefObject<HTMLParagraphElement>) {
  if (first_name.current && last_name.current && date.current && email.current && organization.current && login.current && password.current && scientific_degree.current && another_information.current) {
    return axios.post('http://localhost:5000/api/register', {
      "firstname": first_name.current.value,
      "last_name": last_name.current.value,
      "date": date.current.value,
      "email": email.current.value,
      "organization": organization.current.value,
      "login": login.current.value,
      "password": password.current.value,
      "scientificdegree": scientific_degree.current.value,
      "anotherinformation": another_information.current.value,
      "avatarurl": avatarurl
    })
    .then (response => {
      if (errorsRef.current) {
        errorsRef.current.textContent = response.data;
      }
    })
  }
}

export function Publications() {
  return axios.get('http://localhost:5000/api/publications')
    .then(response => response.data)
    .catch(error => {
      console.error('Error: ', error, ' try again later.');
      throw error;
    });
}
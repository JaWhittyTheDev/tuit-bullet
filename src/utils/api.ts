import axios from "axios";
import type { RefObject } from "react";

export function getLatestPublication() {
  return axios.get('http://localhost:5000/api/latest-publication')
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

export function Publications() {
  return axios.get('http://localhost:5000/api/publications')
    .then(response => response.data)
    .catch(error => {
      console.error('Error: ', error, ' try again later.');
      throw error;
    });
}

export function Papers() {
  return axios.get('http://localhost:5000/api/papers')
    .then(response => response.data)
    .catch(error => {
      console.error('Error: ', error, ' try again later.');
      throw error;
    });
}

export function GetPublication() {
  return axios.get('http://localhost:5000/api/publication')
    .then(response => response.data)
}

export async function GetPaper() {
  const { data } = await axios.get('http://localhost:5000/api/paper');
  return data;
}

export function SendContactsData(
  firstname: RefObject<HTMLInputElement>,
  email: RefObject<HTMLInputElement>,
  message: RefObject<HTMLTextAreaElement>
) {
  if (firstname.current && email.current && message.current) {
    return axios.post('http://localhost:5000/api/contacts', {
      firstname: firstname.current.value,
      email: email.current.value,
      message: message.current.value
    })
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.error('POST request failed:', error);
      throw error;
    });
  } else {
    console.error("Missing arguments!");
    return Promise.reject("One or more input references are missing.");
  }
}

export const register = async (formData: FormData): Promise<string> => {
  try {
    const response = await axios.post("http://localhost:5000/api/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.message;
  } catch (error: any) {
    console.error("Error when uploading: ", error);
    throw error.response?.data?.message || error.message || "Unknown error";
  }
};
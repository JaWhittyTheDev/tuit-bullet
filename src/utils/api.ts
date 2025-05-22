import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.tuit.uz',
  headers: {
    'Content-Type': 'application/json',
  },
});

const Api = {
  get: (url: string, params?: any) => api.get(url, { params }),
  post: (url: string, data?: any) => api.post(url, data),
  put: (url: string, data?: any) => api.put(url, data),
  delete: (url: string) => api.delete(url),
};

function getPublications() {
    return Api.get('/publications');
}

export default Api;
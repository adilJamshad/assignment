import axios from 'axios';

class Http {
  constructor() {
    const service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        common: {
          Accept: 'application/json',
        },
      },
    });

    service.interceptors.request.use(
      (config) => {
        const { token } = JSON.parse(localStorage.getItem('user'));
        // eslint-disable-next-line no-param-reassign
        if (token) {
          config.headers.common.Authorization = `Bearer ${token}`;
        }

        if (['/users/upload', '/users'].includes(config.url)) {
          // eslint-disable-next-line no-param-reassign
          config.headers.post['Content-Type'] = 'multipart/form-data';
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    service.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        console.log(err);
        return Promise.reject(err);
      }
    );
    this.service = service;
  }

  get(path) {
    return this.service.get(path);
  }

  post(path, payload) {
    return this.service.post(path, payload);
  }

  put(path, payload) {
    return this.service.put(path, payload);
  }

  delete(path, payload) {
    return this.service.delete(path, payload);
  }
}
export default new Http();

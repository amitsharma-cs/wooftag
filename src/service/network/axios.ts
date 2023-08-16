import axios from 'axios';
import Config from 'react-native-config';
import {getData} from '../../asyncstorage';

const axiosTokenInstance = axios.create({
  baseURL: Config.BASE_URL,
});

axiosTokenInstance.interceptors.request.use(
  async config => {
    const token = await getData('ACCESS_TOKEN');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosTokenInstance.interceptors.response.use(response => {
  console.warn(response?.data);
  // Check if response timeout
  if (response?.data?.exception?.code === '408') {
    throw {
      data: response?.data?.exception?.message ?? 'Request Timeout',
      status: 408,
    };
  } else if (response?.data?.DATA?.errorCode === '408') {
    throw {
      data: response?.data?.DATA?.errorMessage ?? 'Request Timeout',
      status: 408,
    };
  } else if (response?.data?.DATA?.errorCode === '500') {
    throw {
      data: response?.data?.DATA?.errorMessage ?? 'Bad Request',
      status: 408,
    };
  } else if (response?.data?.errorCode === '500') {
    throw {
      data: response?.data?.errorMessage ?? 'Bad Request',
      status: 408,
    };
  }

  return response;
});

export default axiosTokenInstance;

import axios from 'axios';

const $http = axios.create();

$http.interceptors.request.use(async config => {
  let headers = {};
  let configWithCredentialHeaders = {};
  try {
    if (window.StAuth) {
      headers = await window.StAuth.getOrRefreshBearer();
      configWithCredentialHeaders = {
        credentials: 'include',
        headers
      };
    }
  } catch (err) {
    // console.error(err); // eslint-disable-line no-console
  }

  return Object.assign(config, configWithCredentialHeaders);
});

$http.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response.data || error.response));

export default $http;

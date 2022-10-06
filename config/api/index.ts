import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

interface callAPIProps extends AxiosRequestConfig {
  token?: boolean;
  serverToken?: string;
}
export default async function callAPI({ url, method, data, token }: callAPIProps) {
  let headers = {};
  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
    const tokenCookies = Cookies.get('token');
    console.log(tokenCookies);
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }
  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }
  const res = {
    error: false,
    message: 'success login',
    data: response.data.data,
  };
  return res;
}

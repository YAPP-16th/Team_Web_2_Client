import axios, { AxiosRequestConfig } from "axios";

interface option {
  url: string;
  headers?: object;
  data?: object | string;
}

const SERVER_END_POINT = process.env.REACT_APP_SERVER;
const basicRequest = (type: AxiosRequestConfig["method"], { url, headers, data }: option) => {
  let config: AxiosRequestConfig = {
    method: type,
    url: SERVER_END_POINT + url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (type === "GET") config.params = data;
  else config.data = data;

  return axios(config)
    .then((res) => res)
    .catch((err) => {
      throw err.response;
    });
};

export const get = ({ url, headers, data }: option) => {
  return basicRequest("GET", { url, headers, data });
};

export const post = ({ url, headers, data }: option) => {
  return basicRequest("POST", { url, headers, data });
};

export const del = ({ url, headers, data }: option) => {
  return basicRequest("DELETE", { url, headers, data });
};

export const put = ({ url, headers, data }: option) => {
  return basicRequest("PUT", { url, headers, data });
};

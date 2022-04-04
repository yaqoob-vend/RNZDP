import httpClient from './client';
import {AxiosResponse, AxiosError} from 'axios';
export async function getDataService(APIURL, params) {
  try {
    console.log('url ' + APIURL);
    return await httpClient.get(APIURL);
  } catch (error) {
    if (error.response) {
      return {error: error.response};
    } else {
      return {error: error};
    }
  }
}

/* export async function deleteRequest(APIURL, params) {
  const status = await checkInternetStatus();
  if (status) {
    // var httpClient = axios.create();
    if (params?.token != null) {
      httpClient.defaults.headers.common.Authorization =
        'Bearer ' + params.token;
    }

    return httpClient
      .delete(APIURL)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        logCrashlytics(error);
        if (error.response) {
          return {error: error.response};
        } else {
          return {error: error};
        }
      });
  } else {
    return false;
  }
} */

export async function postDataService(
  APIURL: string,
  params: any,
): Promise<AxiosResponse<{token: string}> | AxiosError<any>> {
  try {
    const response = await httpClient.post(APIURL, params);

    return response;
  } catch (error) {
    if (error.response) {
      return {error: error.response};
    } else {
      return {error: error};
    }
  }
}

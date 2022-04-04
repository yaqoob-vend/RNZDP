import {getDataService, postDataService} from './';
import {AxiosResponse, AxiosError} from 'axios';
import {Token, UserData, UserDataRequest, UserLogin} from './login.types';
export function login(params: UserLogin) {
  return new Promise(async (resolve, reject) => {
    try {
      const response: AxiosResponse<Token> | AxiosError<any> =
        await postDataService('login', params);
      if (response.data) {
        resolve(response.data);
      } else {
        //  console.log(response.error.data.error)
        reject(response.error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function getUser(params: UserDataRequest) {
  return new Promise(async (resolve, reject) => {
    try {
      const response: AxiosResponse<UserData> | AxiosError<any> =
        await getDataService('users/' + params.id, params);
      if (response.data) {
        resolve(response.data);
      } else {
        //  console.log(response.error.data.error)
        reject(response.error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

import {getDataService} from '.';
import {UserDataRequest} from './login.types';
export function getUsers() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await getDataService('users', null);
      if (response) {
        resolve(response?.data);
      } else {
        reject('Something went wrong');
      }
    } catch (error) {
      reject(error);
    }
  });
}

export async function getSingleUser(params: UserDataRequest) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await getDataService('users/' + params.id, params);
      if (response) {
        resolve(response);
      } else {
        reject('Something went wrong');
      }
    } catch (error) {
      reject(error);
    }
  });
}

import axios from './client';
import {getUsers} from './userService';

jest.mock('./client');

describe('success', () => {
  test('should successfull call get user API', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {name: 'usman', id: '123'},
      }),
    );

    const response = await getUsers();
    expect(response).toEqual({name: 'usman', id: '123'});
  });

  test('throw error ', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject({
        response: {data: 'Something went wrong'},
      }),
    );
    try {
      await getUsers();
    } catch (error) {
      expect(error).toEqual('Something went wrong');
    }
  });
});

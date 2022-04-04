import {Action} from 'redux';
export const types = {
  LOGIN: 'login',
  LOGIN_SUCCESS: 'login_success',
  LOGIN_FAILURE: 'login_failure',
};

const INITIAL_STATE = {};

export default function reducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case types.LOGIN:
      return state;

    case types.LOGIN_SUCCESS:
      return {...state, responseData: action.payload};

    case types.LOGIN_FAILURE:
      return {...state, responseData: action.payload};

    default:
      return state; //state does not change
  }
}

export const login = (requestParams: any) => {
  return {
    type: types.LOGIN,
    requestParams,
  };
};

import LoginScreen from '.';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigatorParamList} from '../../navigators';
type LoginNavigatorScreenProps = StackNavigationProp<
  NavigatorParamList,
  'login'
>;
describe('Test for Login Component', () => {
  let navigation: Partial<LoginNavigatorScreenProps>;
  beforeEach(() => {
    navigation = {
      navigate: jest.fn(),
    };
  });
  test('successfully login', async () => {
    const {getByTestId, getByText, toJSON} = render(
      <LoginScreen
        navigation={navigation as LoginNavigatorScreenProps}
        route={null}
      />,
    );
    const emailAddress = 'eve.holt@reqres.in';
    const pass = 'cityslicka';
    const email = getByTestId('email');
    const password = getByTestId('password');
    fireEvent.changeText(email, emailAddress);
    fireEvent.changeText(password, pass);
    const button = getByText('Login');
    fireEvent.press(button);
    waitFor(() => expect(navigation.navigate).toBeCalled());
    expect(toJSON()).toMatchSnapshot();
  });
});

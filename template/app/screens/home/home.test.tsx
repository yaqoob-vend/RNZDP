import {HomeScreen} from '.';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {BottmTabNavigatorParamList} from '../../navigators';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

type HomeScreenProps = BottomTabNavigationProp<
  BottmTabNavigatorParamList,
  'Home'
>;
describe('Logout & navigate to login screen', () => {
  let navigation: Partial<HomeScreenProps>;
  beforeEach(() => {
    navigation = {
      navigate: jest.fn(),
    };
  });
  test('successfully logout', async () => {
    const {getByText, toJSON} = render(
      <SafeAreaProvider
        initialSafeAreaInsets={{top: 1, left: 2, right: 3, bottom: 4}}>
        <HomeScreen navigation={navigation as HomeScreenProps} route={null} />,
      </SafeAreaProvider>,
    );
    const button = getByText('Logout');
    fireEvent.press(button);

    waitFor(() => expect(navigation.navigate).toBeCalled());
    expect(toJSON()).toMatchSnapshot();
  });
});

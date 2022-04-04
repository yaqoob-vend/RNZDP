/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
import './i18n';
import './utils/ignore-warnings';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {initFonts} from './theme/fonts'; // expo
import * as storage from './utils/storage';
import {AppNavigator, useNavigationPersistence} from './navigators';
import {RootStore, RootStoreProvider, setupRootStore} from './models';
import {ErrorBoundary} from './screens/error/error-boundary';
import {Provider} from 'react-redux';
import configureStore from './redux/store';
import SplashScreen from 'react-native-splash-screen';
import messaging from '@react-native-firebase/messaging';
import analytics from '@react-native-firebase/analytics';
import {Alert, Text} from 'react-native';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

/**
 * This is the root component of our app.
 */
function App() {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);

  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  // Logging event using analytics
  const logOpenAppEvent = async () => {
    await analytics().logEvent('basket', {
      online: true,
      screen: 'Start app',
    });
  };

  // Notification Permission for IOS
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    requestUserPermission();
    logOpenAppEvent();
    GoogleSignin.configure({
      webClientId:
        '989036069-b7gds7783cu67vqs1lo4t1j7pbs5ihgh.apps.googleusercontent.com',
    });
    // GoogleSignin.configure({
    //   webClientId:
    //     '989036069-b7gds7783cu67vqs1lo4t1j7pbs5ihgh.apps.googleusercontent.com',
    // })
    (async () => {
      await initFonts(); // expo
      //setupRootStore().then(setRootStore);
    })();
  }, []);
  React.useEffect(() => {
    SplashScreen.hide();
  });

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color.
  // In iOS: application:didFinishLaunchingWithOptions:
  // In Android: https://stackoverflow.com/a/45838109/204044
  // You can replace with your own loading component if you wish.
  // if (!rootStore || !isNavigationStateRestored) {
  //   return null;
  // }
  const store = configureStore();
  // otherwise, we're ready to render the app

  return (
    // <ToggleStorybook>
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ErrorBoundary catchErrors={'always'}>
          <AppNavigator
            initialState={initialNavigationState}
            onStateChange={onNavigationStateChange}
          />
        </ErrorBoundary>
      </SafeAreaProvider>
    </Provider>
    // </ToggleStorybook>
  );
}

export default App;

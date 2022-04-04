import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
export const useGoogleLogin = () => {
  const onGoogleButtonPress = async () => {
    return new Promise(async (resolve, reject) => {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      try {
        const {idToken} = await GoogleSignin.signIn();
        resolve(idToken);
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
          reject(new Error('user cancelled the login flow'));
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
          reject(new Error('operation (e.g. sign in) is in progress already'));
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
          reject(new Error('play services not available or outdated'));
        } else {
          // some other error happened
          reject(new Error('Something went wrong.try again.'));
        }
      }
    });
  };
  return {
    onGoogleButtonPress,
  };
};

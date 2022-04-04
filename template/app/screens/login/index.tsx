import React, {useEffect} from 'react';
import {ImageStyle, TextStyle, View, ViewStyle} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import _ from 'lodash';
import {TextField, Text, Button, AutoImage as Image} from '../../components';
import {login} from '../../services/services/loginService';
import ICONS from '../../../assets/images';
import {NavigatorParamList} from '../../navigators';
import {StackScreenProps} from '@react-navigation/stack';
import {UserLogin} from '../../services/services/login.types';
import {appleAuth} from '@invertase/react-native-apple-authentication';
// import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin"
import {useGoogleLogin} from '../../hooks/googleLogin';
import {AppleButton} from '@invertase/react-native-apple-authentication';
import {color} from '../../theme';
const loginSchema = Yup.object().shape({
  username: Yup.string().email().required('Email address is required.'),
  password: Yup.string()
    .min(8, 'Your password must contain at least 8 characters')
    .required('Password cannot be left blank'),
});
const ROOT: ViewStyle = {flex: 1};
const FORM_ROOT: ViewStyle = {flex: 1, justifyContent: 'center'};
const TEXTFIELD = {padding: 10};
const INPUT_STYLE = {color: 'black'};
const IMAGE: ImageStyle = {alignSelf: 'center'};
const BUTTON_TEXT: TextStyle = {fontSize: 15};
const BUTTON_STYLE: ViewStyle = {marginHorizontal: 10};
type LoginScreenProps = StackScreenProps<NavigatorParamList, 'login'>;
const APPLE_SIGN_IN: ViewStyle = {
  width: 160, // You must specify a width
  height: 45, // You must specify a height
  marginVertical: 20,
  shadowRadius: 3,
  shadowColor: color.storybookDarkBg,
  shadowOpacity: 0.3,
  shadowOffset: {height: 3, width: 0},
  elevation: 3,
};
const LoginScreen: React.FC<LoginScreenProps> = ({
  navigation,
  route,
}: LoginScreenProps) => {
  const {onGoogleButtonPress} = useGoogleLogin();
  const signInButtonPress = (email: string, password: string): void => {
    login({email, password} as UserLogin)
      .then(res => {
        console.log('err', res);
        navigation.navigate('welcome');
      })
      .catch(err => {
        console.log('err', err);
      });
  };
  async function onAppleButtonPress() {
    // performs login request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // get current authentication state for user
    // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user,
    );

    // use credentialState response to ensure the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {
      // user is authenticated
    }
  }
  const loginGoogle = async () => {
    try {
      const token = await onGoogleButtonPress();
      console.log('Google token:', token);
      navigation.navigate('welcome');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={ROOT}>
      <>
        <Formik
          initialValues={{
            username: 'eve.holt@reqres.in',
            password: 'cityslicka',
          }}
          validationSchema={loginSchema}
          onSubmit={values => {
            signInButtonPress(values.username, values.password);
          }}>
          {props => {
            return (
              <View style={FORM_ROOT}>
                <Image style={IMAGE} source={ICONS.VD_LOGO} />
                <TextField
                  testID="email"
                  label={'Email'}
                  defaultValue="eve.holt@reqres.in"
                  placeholder={'Enter Email'}
                  onChangeText={props.handleChange('username')}
                  style={TEXTFIELD}
                  inputStyle={INPUT_STYLE}
                />
                <Text style={INPUT_STYLE} text={props.errors.username} />

                <TextField
                  testID="password"
                  defaultValue="cityslicka"
                  label={'Password'}
                  placeholder={'Enter Password'}
                  style={TEXTFIELD}
                  onChangeText={props.handleChange('password')}
                  inputStyle={INPUT_STYLE}
                />
                <Text style={INPUT_STYLE} text={props.errors.password} />

                <Button
                  testID="login"
                  text="Login"
                  textStyle={BUTTON_TEXT}
                  style={BUTTON_STYLE}
                  onPress={() => {
                    props.handleSubmit();
                  }}
                />

                <Button
                  testID="login"
                  text="Login with Google"
                  textStyle={BUTTON_TEXT}
                  style={[BUTTON_STYLE, {marginTop: 10}]}
                  onPress={loginGoogle}
                />
                <AppleButton
                  buttonStyle={AppleButton.Style.WHITE}
                  buttonType={AppleButton.Type.SIGN_IN}
                  style={APPLE_SIGN_IN}
                  onPress={() => onAppleButtonPress()}
                />
              </View>
            );
          }}
        </Formik>
      </>
    </View>
  );
};

export default LoginScreen;

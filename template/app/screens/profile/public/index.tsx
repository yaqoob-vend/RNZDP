import React, {FC, useEffect, useState} from 'react';
import {
  View,
  ViewStyle,
  TextStyle,
  ImageStyle,
  SafeAreaView,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Button,
  Header,
  Screen,
  Text,
  GradientBackground,
  AutoImage as Image,
} from '../../../components';
import {color, spacing, typography} from '../../../theme';
import {NavigatorParamList} from '../../../navigators';
import {getSingleUser} from '../../../services/services/userService';
import {UserDataRequest, User} from '../../../services/services/login.types';

// const bowserLogo = require("./bowser.png")

const FULL: ViewStyle = {
  flex: 1,

  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
};
const CONTAINER: ViewStyle = {
  paddingHorizontal: spacing[4],
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
};
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
};
const BOLD: TextStyle = {fontWeight: 'bold'};
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
};
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: 'center',
  letterSpacing: 1.5,
};

const TEXT_TITLE: TextStyle = {
  ...TEXT,
  fontSize: 16,
  lineHeight: 23,
  color: 'black',
  textAlign: 'left',
  letterSpacing: 1.5,
};

const TITLE_WRAPPER: TextStyle = {
  ...TEXT,
  textAlign: 'center',
};
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: 'center',
  color: 'black',
};
const ALMOST: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 26,
  fontStyle: 'italic',
};
const BOWSER: ImageStyle = {
  alignSelf: 'center',
  marginVertical: spacing[5],
  maxWidth: '100%',
  width: 343,
  height: 230,
};
const CONTENT: TextStyle = {
  ...TEXT,
  color: '#BAB6C8',
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[5],
};
const CONTINUE: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.deepPurple,
};
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
};
const FOOTER: ViewStyle = {backgroundColor: '#20162D'};
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
};

export const PublicProfile: FC<
  StackScreenProps<NavigatorParamList, 'publicProfile'>
> = ({navigation}) => {
  //const userData: UserData =
  const [userData, setUserData] = useState({first_name: 'sdf'} as User);

  const getUserDetails = (): void => {
    getSingleUser({id: 4} as UserDataRequest)
      .then(res => {
        setUserData(res.data.data as User);
        console.log('user data', res.data.data);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const nextScreen = () => navigation.navigate('demo');

  return (
    <View testID="HomeScreen" style={FULL}>
      <Screen
        style={CONTAINER}
        preset="scroll"
        backgroundColor={color.transparent}>
        <Text style={TITLE_WRAPPER}>
          <Text style={TITLE} tx={'profileScreen.public.msg'} />
        </Text>
        <View style={{flexDirection: 'column', marginTop: 20}}>
          <Text
            style={TEXT_TITLE}
            text={'First name: ' + userData.first_name}
          />
          <Text style={TEXT_TITLE} text={'Last name: ' + userData.last_name} />
          <Text style={TEXT_TITLE} text={'Email: ' + userData.email} />
        </View>
      </Screen>
    </View>
  );
};

import React, {FC} from 'react';
import {View, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {Screen, Text, AutoImage as Image, Button} from '../../components';
import {color, spacing, typography} from '../../theme';
import {BottmTabNavigatorParamList} from '../../navigators';
import ICONS from '../../../assets/images';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
const FULL: ViewStyle = {
  flex: 1,
};
const CONTAINER: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing[4],
  alignItems: 'center',
  justifyContent: 'center',
};
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
};
const BOLD: TextStyle = {fontWeight: 'bold'};
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: 'center',
  color: 'black',
};

const IMAGE: ImageStyle = {alignSelf: 'center'};
const BUTTON_TEXT: TextStyle = {fontSize: 15};
const BUTTON_STYLE: ViewStyle = {marginHorizontal: 10};

type HomeScreenProps = BottomTabScreenProps<BottmTabNavigatorParamList, 'Home'>;
export const HomeScreen: FC<HomeScreenProps> = ({
  route,
  navigation,
}: HomeScreenProps) => {
  return (
    <View testID="HomeScreen" style={FULL}>
      <Screen
        style={CONTAINER}
        preset="scroll"
        backgroundColor={color.background}>
        <Image style={IMAGE} source={ICONS.VD_LOGO} />
        <Text style={TITLE} preset="header" tx="welcomeScreen.readyForLaunch" />

        <Button
          testID="Logout"
          text="Logout"
          textStyle={BUTTON_TEXT}
          style={BUTTON_STYLE}
          onPress={() => {
            signOut(navigation);
          }}
        />
      </Screen>
    </View>
  );
};

const signOut = async navigation => {
  try {
    await GoogleSignin.signOut();
    navigation.goBack();
  } catch (error) {
    console.error(error);
  }
};

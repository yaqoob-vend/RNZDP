import React, {FC} from 'react';
import {View, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Screen, Text, AutoImage as Image} from '../../../components';
import {color, spacing, typography} from '../../../theme';
import {NavigatorParamList} from '../../../navigators';

// const bowserLogo = require("./bowser.png")

const FULL: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
};
const CONTAINER: ViewStyle = {
  // paddingHorizontal: spacing[4],
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

interface PrivateProfileProps {}

export const PrivateProfile: FC<
  StackScreenProps<NavigatorParamList, 'privateProfile'>
> = (props: PrivateProfileProps) => {
  return (
    <View testID="HomeScreen" style={FULL}>
      <Screen
        style={CONTAINER}
        preset="scroll"
        backgroundColor={color.transparent}>
        <Text style={TITLE_WRAPPER}>
          <Text style={TITLE} tx={'profileScreen.private.msg'} />
        </Text>
      </Screen>
    </View>
  );
};

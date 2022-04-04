import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  arrowBtnStyle: {
    alignSelf: "center",
    height: wp("10%"),
    marginBottom: wp("2%"),
    marginTop: wp("2%"),
    width: wp("10%"),
  },
  container: {
    // paddingVertical:-hp(15),
    // backgroundColor: 'rgba(0, 0, 0, .2)',
    // borderTopLeftRadius: wp('10%'),
    // borderTopRightRadius: wp('10%'),
  },
  conturyContainer: {
    flexDirection: "row",
    flex: 1,
  },
  countryRoot: {
    alignItems: "center",
    backgroundColor: "white",
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
    flexDirection: "row",
    height: wp(9.5),
    marginTop: 10,
    paddingLeft: 5,
  },
  dontHaveAccount: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: wp(10),
  },
  downArrowCountry: {
    height: wp("5%"),
    marginLeft: wp("2%"),
    marginRight: wp("2%"),
    resizeMode: "contain",
    width: wp("5%"),
  },
  downArrowImage: {
    alignSelf: "center",
    height: wp("5%"),
    resizeMode: "contain",
    width: wp("5%"),
  },
  errorStyle: {
    color: "red",
    marginBottom: wp("2%"),
  },
  fontStyle: {
    color: "white",
    fontFamily: Constants.NunitoRegular,
    fontSize: wp("3.5%"),
  },
  formContainer: {
    marginHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  formRoot: {
    // flex:1,
    paddingLeft: wp("5%"),
    paddingRight: wp("5%"),

    // backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: "center",
  },
  inputPhoneStyle: {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    height: wp(9.5),
  },
  keepMeLoginView: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: wp("2%"),
  },
  keepMeLoginlabel: {
    flex: 1,
    marginLeft: wp("1.5%"),
  },
  keepmeloginImg: {
    height: wp("6%"),
    resizeMode: "contain",
    width: wp("6%"),
  },

  lineStyle: {
    backgroundColor: "#D2D2D2",
    height: wp(9.5),
    width: wp(".2%"),
  },
  lineView: {
    backgroundColor: "white",
    flex: 1,
    height: wp(".3%"),
  },
  loaderView: {
    alignItems: "center",
    height: 45,
    justifyContent: "center",
    marginTop: wp("5%"),
    width: "100%",
  },
  orView: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: wp("5%"),
    marginTop: wp("5%"),
  },
  showPassword: {
    alignItems: "center",
    height: wp("10%"),
    justifyContent: "center",
    position: "absolute",
    right: wp("4%"),
    width: wp("10%"),
  },
  signinwithemail: {
    fontFamily: Constants.NunitoBold,
    textDecorationLine: "underline",
  },
  signinwithmobile: {
    fontFamily: Constants.NunitoBold,
    textDecorationLine: "underline",
  },
  typeSelectionBtn: {
    alignItems: "center",
    flex: 1,
  },
  uaePassImage: {
    height: wp("15%"),
    resizeMode: "contain",
    width: wp("15%"),
  },
  uaePassView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: wp("5%"),
  },
  wouldLikeStyle: {
    fontSize: wp("5%"),
    fontWeight: "bold",
    marginBottom: wp("3%"),
  },
})
export default styles

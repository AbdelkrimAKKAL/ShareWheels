import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";
import TopBar from "../components/TopBar";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.login, styles.loginFlexBox]}>
      <TopBar/>
      <View style={styles.loginpage}>
        <Text style={styles.login1}>Login</Text>
        <View style={styles.main}>
          <View style={styles.inputs}>
            <View style={[styles.input, styles.inputShadowBox]}>
              <View style={styles.dz}>
                <Text style={[styles.text, styles.textTypo]}>+213</Text>
                <Image
                  style={styles.flagForFlagAlgeriaSvgrepoIcon}
                  contentFit="cover"
                  source={require("../assets/flagforflagalgeria-svgrepocom3.png")}
                />
              </View>
              <Text style={[styles.number, styles.numberTypo]}>
                Numero de Telephone
              </Text>
            </View>
            <View style={[styles.input1, styles.inputShadowBox]}>
              <Image
                style={styles.iconlylightlock}
                contentFit="cover"
                source={require("../assets/iconlylightlock.png")}
              />
              <Text style={[styles.number1, styles.numberTypo]}>
                mot de passe
              </Text>
            </View>
          </View>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
          <Pressable
            style={[styles.buttonfirst, styles.buttonfirstFlexBox]}
            onPress={() => navigation.navigate("MonProfil")}
          >
            <Text style={[styles.signUp, styles.textTypo]}>Login</Text>
          </Pressable>
          <Pressable
            style={styles.dontYouHaveContainer}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.text1}>
              <Text style={styles.dontYouHave}>Don’t you have an account?</Text>
              <Text style={styles.text2}>{` `}</Text>
              <Text style={styles.signUp1}>Sign Up</Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginFlexBox: {
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
  },
  textPosition: {
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  inputShadowBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    width: 292,
    borderWidth: 1,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    left: 0,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  textTypo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  numberTypo: {
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
  },
  buttonfirstFlexBox: {
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    alignItems: "center",
  },
  search1Typo: {
    marginTop: 5,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
  },
  searchLayout: {
    height: 64,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },

  login1: {
    fontSize: FontSize.size_13xl,
    color: Color.colorDarkslategray_100,
    width: 359,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  text: {
    lineHeight: 24,
    textAlign: "right",
    color: Color.colorGray_100,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  flagForFlagAlgeriaSvgrepoIcon: {
    height: "96%",
    width: "33.33%",
    top: "0.4%",
    right: "59.42%",
    bottom: "3.6%",
    left: "7.25%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  dz: {
    width: 69,
    height: 25,
  },
  number: {
    width: 179,
  },
  input: {
    top: 0,
    borderColor: "#e5e5e5",
  },
  iconlylightlock: {
    width: 22,
    height: 22,
  },
  number1: {
    width: 227,
  },
  input1: {
    top: 71,
    borderColor: Color.colorGray_300,
  },
  inputs: {
    width: 291,
    height: 125,
  },
  forgotPassword: {
    width: 299,
    marginTop: 25,
    lineHeight: 22,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  signUp: {
    lineHeight: 24,
    color: Color.neutralWhite,
    width: 235,
    textAlign: "center",
  },
  buttonfirst: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorRoyalblue_100,
    shadowColor: "rgba(236, 95, 95, 0.25)",
    shadowRadius: 14,
    elevation: 14,
    width: 317,
    height: 58,
    marginTop: 25,
    justifyContent: "center",
  },
  dontYouHave: {
    color: Color.colorGray_100,
  },
  text2: {
    color: Color.colorBlack,
  },
  signUp1: {
    color: Color.colorRoyalblue_100,
  },
  text1: {
    textAlign: "justify",
    width: 260,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  dontYouHaveContainer: {
    marginTop: 25,
  },
  main: {
    width: 321,
    height: 290,
    marginTop: 100,
    alignItems: "center",
  },
  loginpage: {
    height: 742,
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  search1: {
    color: Color.colorDarkgray_200,
  },
  yourRides: {
    padding: Padding.p_3xs,
  },
  profile1: {
    color: Color.colorRoyalblue_100,
  },
  footerprofile: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 20,
    elevation: 20,
    width: 375,
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
  },
  login: {
    flex: 1,
    height: 834,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    justifyContent: "space-between",
  },
});

export default Login;

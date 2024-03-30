import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ForgotPwd from "./ForgotPwd";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginpage}>
      <Text style={styles.login1}>Login</Text>
      <View style={[styles.input]}>
        <Image
          style={styles.iconlylightlock}
          contentFit="cover"
          source={require("../assets/stylestroke.png")}
        />
        <TextInput placeholder="Email" />
      </View>
      <View style={[styles.input]}>
        <Image
          style={styles.iconlylightlock}
          contentFit="cover"
          source={require("../assets/iconlylightlock.png")}
        />
        <TextInput placeholder="Password" />
      </View>
      <Pressable  onPress={() => navigation.navigate("ForgotPwd")}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </Pressable>
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
          <Text style={styles.dontYouHave}>Don't you have an account? </Text>

          <Text style={styles.signUp1}>Sign Up</Text>
        </Text>
      </Pressable>
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
  inputShadowBox: {},
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

  number: {
    width: 179,
  },
  input: {
    paddingVertical: 16,
    paddingHorizontal: 15,
    width: "75%",
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderColor: "#e5e5e5",
  },
  iconlylightlock: {
    width: 22,
    height: 22,
    marginRight: 15,
  },
  number1: {
    width: 227,
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
  signUp1: {
    color: Color.colorRoyalblue_100,
  },
  text1: {
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

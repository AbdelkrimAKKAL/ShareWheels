import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FooterSearch from "../components/FooterSearch";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={styles.bar}>
        <View style={[styles.rectangle, styles.textPosition]} />
      </View>
      <View style={styles.loginpage}>
        <Text style={styles.login1}>Login</Text>
        <View style={styles.main}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
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
          <Pressable
            style={styles.buttonfirst}
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
      <FooterSearch
        dimensionCode={require("../assets/search.png")}
        dimensionCodeText={require("../assets/format-list-bulleted.png")}
        dimensionCodeIdentifier={require("../assets/add-circle-outline.png")}
        dimensionCodeIdentifierTe={require("../assets/sharecircle-svgrepocom4.png")}
        dimensionCodeIdentifierTe2={require("../assets/profile.png")}
        propColor="#9d9fa0"
        propColor1="#9d9fa0"
        propColor2="#9d9fa0"
        propColor3="#9d9fa0"
        propColor4="#0075fd"
        onSearchPress={() => navigation.navigate("Recherche")}
        onYourRidesPress={() => navigation.navigate("YourRides")}
        onPublishPress={() => navigation.navigate("AjouterAnnonce")}
        onCarpoolPress={() => navigation.navigate("CarpoolVenir")}
        onProfilePress={() => navigation.navigate("MonProfil")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "left",
    color: Color.colorGray_100,
    lineHeight: 22,
    fontSize: FontSize.size_mini,
  },
  rectangle: {
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.neutralWhite,
    top: "0%",
    height: "100%",
  },
  bar: {
    width: 375,
    height: 33,
    overflow: "hidden",
  },
  login1: {
    fontSize: FontSize.size_13xl,
    color: Color.colorDarkslategray_100,
    width: 359,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  forgotPassword: {
    width: 127,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
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
    borderColor: Color.colorGray_200,
  },
  inputs: {
    width: 291,
    height: 125,
    marginTop: 35,
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
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    marginTop: 35,
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 35,
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
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.neutralWhite,
  },
});

export default Login;

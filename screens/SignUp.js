import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import GenreInputContainer from "../components/GenreInputContainer";
import FooterSearch from "../components/FooterSearch";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <View style={styles.bar}>
        <View style={[styles.rectangle, styles.textPosition]} />
      </View>
      <Text style={styles.createAccount}>Create Account</Text>
      <View style={styles.main}>
        <View style={styles.inputShadowBox}>
          <Image
            style={styles.userIcon}
            contentFit="cover"
            source={require("../assets/user.png")}
          />
          <Text style={[styles.number, styles.numberTypo]}>Nom</Text>
        </View>
        <View style={[styles.input1, styles.inputShadowBox]}>
          <Image
            style={styles.stylestrokeIcon}
            contentFit="cover"
            source={require("../assets/stylestroke.png")}
          />
          <Text style={[styles.number, styles.numberTypo]}>Mail</Text>
        </View>
        <View style={[styles.input2, styles.inputShadowBox]}>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo]}>+213</Text>
            <Image
              style={styles.flagForFlagAlgeriaSvgrepoIcon}
              contentFit="cover"
              source={require("../assets/flagforflagalgeria-svgrepocom2.png")}
            />
          </View>
          <Text style={[styles.number2, styles.numberTypo]}>
            Numero de Telephone
          </Text>
        </View>
        <GenreInputContainer
          dimensionCode={require("../assets/group4.png")}
          categoryOrPassword="Genre"
          specificDimensions={require("../assets/down-arrow.png")}
        />
        <GenreInputContainer
          dimensionCode={require("../assets/password.png")}
          categoryOrPassword="mot de passe"
          specificDimensions={require("../assets/hidden.png")}
          propWidth={22}
          propHeight={22}
          propWidth1={24}
        />
        <Pressable
          style={styles.buttonfirst}
          onPress={() => navigation.navigate("MonProfil")}
        >
          <Text style={[styles.signUp1, styles.textTypo]}>Sign up</Text>
        </Pressable>
        <Pressable
          style={styles.alreadyHaveAnContainer}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.text1}>
            <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
            <Text style={styles.text2}>{` `}</Text>
            <Text style={styles.signIn}>Sign In</Text>
          </Text>
        </Pressable>
      </View>
      <FooterSearch
        dimensionCode={require("../assets/search.png")}
        dimensionCodeText={require("../assets/format-list-bulleted.png")}
        dimensionCodeIdentifier={require("../assets/add-circle-outline.png")}
        dimensionCodeIdentifierTe={require("../assets/sharecircle-svgrepocom.png")}
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
  numberTypo: {
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
  },
  inputShadowBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    width: 292,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  textTypo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    fontSize: FontSize.subheadLgSHLgMedium_size,
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
  createAccount: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslategray_100,
    width: 359,
    textAlign: "center",
  },
  userIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  number: {
    width: 227,
  },
  stylestrokeIcon: {
    width: 23,
    height: 23,
  },
  input1: {
    marginTop: 23,
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
  parent: {
    width: 69,
    height: 25,
  },
  number2: {
    width: 181,
  },
  input2: {
    marginTop: 23,
  },
  signUp1: {
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
    marginTop: 23,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    justifyContent: "center",
    alignItems: "center",
  },
  alreadyHaveAn: {
    color: Color.colorGray_100,
  },
  text2: {
    color: Color.colorBlack,
  },
  signIn: {
    color: Color.colorRoyalblue_100,
  },
  text1: {
    width: 260,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "center",
  },
  alreadyHaveAnContainer: {
    marginTop: 23,
  },
  main: {
    height: 558,
    justifyContent: "center",
    alignItems: "center",
  },
  signUp: {
    flex: 1,
    height: 834,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    overflow: "hidden",
    backgroundColor: Color.neutralWhite,
  },
});

export default SignUp;

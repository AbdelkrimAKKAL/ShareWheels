import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signUp, styles.signUpFlexBox]}>
      <View style={styles.bar}>
        <View style={[styles.rectangle, styles.textPosition]} />
      </View>
      <Text style={styles.createAccount}>Create Account</Text>
      <View style={styles.main}>
        <View style={styles.inputShadowBox1}>
          <Image
            style={[styles.userIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/user.png")}
          />
          <Text style={[styles.number, styles.numberTypo]}>Nom</Text>
        </View>
        <View style={[styles.input1, styles.inputShadowBox1]}>
          <Image
            style={styles.stylestrokeIcon}
            contentFit="cover"
            source={require("../assets/stylestroke.png")}
          />
          <Text style={[styles.number, styles.numberTypo]}>Mail</Text>
        </View>
        <View style={[styles.input2, styles.inputShadowBox1]}>
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
        <View style={[styles.input3, styles.inputShadowBox1]}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group1.png")}
          />
          <Text style={[styles.number3, styles.numberTypo]}>Genre</Text>
          <Image
            style={styles.downArrowIcon}
            contentFit="cover"
            source={require("../assets/down-arrow2.png")}
          />
        </View>
        <View style={[styles.input4, styles.inputShadowBox1]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/password.png")}
          />
          <Text style={[styles.number3, styles.numberTypo]}>mot de passe</Text>
          <Image
            style={[styles.hiddenIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/hidden.png")}
          />
        </View>
        <Pressable
          style={styles.inputShadowBox}
          onPress={() => navigation.navigate("Voiture")}
        >
          <Image
            style={[styles.mapPinIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/mappin6.png")}
          />
          <Text style={[styles.number5, styles.numberTypo]}>
            Voiture (optionnel)
          </Text>
        </Pressable>
        <Pressable
          style={styles.inputShadowBox}
          onPress={() => navigation.navigate("DatailsAjouter")}
        >
          <Image
            style={[styles.userIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/addellipse-svgrepocom.png")}
          />
          <Text style={[styles.number6, styles.numberTypo]}>
            Details a ajouter (optionnel)
          </Text>
        </Pressable>
        <Pressable
          style={[styles.buttonfirst, styles.buttonfirstFlexBox]}
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
      <View style={[styles.footerprofile, styles.buttonfirstFlexBox]}>
        <Pressable
          style={styles.searchLayout}
          onPress={() => navigation.navigate("Recherche")}
        >
          <Image
            style={[styles.userIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/search1.png")}
          />
          <Text style={[styles.search1, styles.search1Typo]}>Search</Text>
        </Pressable>
        <Pressable
          style={[styles.yourRides, styles.searchLayout]}
          onPress={() => navigation.navigate("YourRides")}
        >
          <Image
            style={[styles.userIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/format-list-bulleted.png")}
          />
          <Text style={[styles.search1, styles.search1Typo]}>Your rides</Text>
        </Pressable>
        <Pressable
          style={styles.searchLayout}
          onPress={() => navigation.navigate("AjouterAnnonce")}
        >
          <Image
            style={[styles.userIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/add-circle-outline.png")}
          />
          <Text style={[styles.search1, styles.search1Typo]}>Publish</Text>
        </Pressable>
        <Pressable
          style={styles.searchLayout}
          onPress={() => navigation.navigate("CarpoolVenir")}
        >
          <Image
            style={[styles.userIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/sharecircle-svgrepocom5.png")}
          />
          <Text style={[styles.search1, styles.search1Typo]}>Carpool</Text>
        </Pressable>
        <Pressable
          style={styles.searchLayout}
          onPress={() => navigation.navigate("MonProfil")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/profile1.png")}
          />
          <Text style={[styles.profile1, styles.search1Typo]}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpFlexBox: {
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
  iconLayout1: {
    width: 24,
    height: 24,
  },
  numberTypo: {
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
  },
  inputShadowBox1: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    width: 292,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
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
  iconLayout: {
    height: 22,
    width: 22,
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
  rectangle: {
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.neutralWhite,
    top: "0%",
    height: "100%",
  },
  bar: {
    height: 33,
    width: 375,
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
    marginTop: 20,
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
    marginTop: 20,
  },
  groupIcon: {
    width: 21,
    height: 24,
  },
  number3: {
    width: 198,
  },
  downArrowIcon: {
    width: 22,
    height: 24,
  },
  input3: {
    marginTop: 20,
  },
  hiddenIcon: {
    height: 24,
  },
  input4: {
    marginTop: 20,
  },
  mapPinIcon: {
    overflow: "hidden",
  },
  number5: {
    width: 223,
  },
  inputShadowBox: {
    height: 57,
    marginTop: 20,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 292,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  number6: {
    width: 224,
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
    marginTop: 20,
    justifyContent: "center",
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
    marginTop: 20,
  },
  main: {
    height: 647,
    justifyContent: "center",
    alignItems: "center",
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
  signUp: {
    flex: 1,
    height: 834,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    justifyContent: "space-between",
  },
});

export default SignUp;

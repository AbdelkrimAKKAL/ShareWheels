import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FooterSearch from "../components/FooterSearch";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile1}>
      <View style={styles.bar}>
        <View style={styles.rectangle} />
      </View>
      <View style={styles.main}>
        <Text style={[styles.sharewheels, styles.sharewheelsFlexBox]}>
          ShareWheels
        </Text>
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <View style={styles.introtext}>
          <Text
            style={[styles.protgezLenvironnement, styles.sharewheelsFlexBox]}
          >
            Protégez l'environnement
          </Text>
          <Text style={styles.profitezDunTrajet}>
            Profitez d'un trajet sans stress grâce au suivi en temps réel du
            covoiturage
          </Text>
        </View>
        <View style={styles.buttons}>
          <Pressable
            style={[styles.buttonfirst, styles.buttonfirstShadowBox]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.signUp, styles.signTypo]}>Login</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonsecondary, styles.buttonfirstShadowBox]}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={[styles.signUp1, styles.signTypo]}>Sign up</Text>
          </Pressable>
        </View>
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
  sharewheelsFlexBox: {
    textAlign: "center",
    color: Color.colorRoyalblue_100,
  },
  buttonfirstShadowBox: {
    flexDirection: "row",
    elevation: 14,
    shadowRadius: 14,
    shadowColor: "rgba(236, 95, 95, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    justifyContent: "center",
    alignItems: "center",
  },
  signTypo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    textAlign: "center",
  },
  rectangle: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
  bar: {
    width: 375,
    height: 33,
    overflow: "hidden",
  },
  sharewheels: {
    fontSize: 44,
    fontWeight: "800",
    fontFamily: FontFamily.nunitoExtraBold,
    width: 286,
  },
  imageIcon: {
    width: 274,
    height: 248,
    marginTop: 15,
  },
  protgezLenvironnement: {
    fontSize: 25,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    width: 281,
  },
  profitezDunTrajet: {
    lineHeight: 22,
    fontFamily: FontFamily.nunitoRegular,
    color: Color.colorGray_100,
    marginTop: 6,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    width: 302,
    textAlign: "center",
  },
  introtext: {
    height: 114,
    width: 302,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  signUp: {
    color: Color.neutralWhite,
    width: 235,
  },
  buttonfirst: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorRoyalblue_100,
    width: 317,
    height: 58,
  },
  signUp1: {
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    lineHeight: 24,
  },
  buttonsecondary: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    width: 318,
    height: 59,
    marginTop: 10,
  },
  buttons: {
    borderRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 34,
    elevation: 34,
    width: 362,
    height: 212,
    justifyContent: "flex-end",
    paddingLeft: 25,
    paddingRight: 31,
    paddingBottom: 43,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    marginTop: 15,
    backgroundColor: Color.neutralWhite,
  },
  main: {
    height: 725,
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  profile1: {
    flex: 1,
    height: 834,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
});

export default Profile;

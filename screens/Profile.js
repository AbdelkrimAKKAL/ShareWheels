import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.profile1, styles.profile1FlexBox]}>
      <View style={styles.bar}>
        <View style={styles.rectangle} />
      </View>
      <View style={styles.main}>
        <Text style={[styles.sharewheels, styles.sharewheelsFlexBox]}>
          ShareWheels
        </Text>
        <Image
          style={styles.image2Icon}
          contentFit="cover"
          source={require("../assets/image-2.png")}
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
            style={[styles.buttonfirst, styles.buttonfirstFlexBox]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.signUp, styles.signTypo]}>Login</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonsecondary, styles.buttonfirstFlexBox]}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={[styles.signUp1, styles.signTypo]}>Sign up</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.footerprofile, styles.buttonfirstFlexBox]}>
        <Pressable
          style={styles.searchLayout}
          onPress={() => navigation.navigate("Recherche")}
        >
          <Image
            style={styles.searchIcon}
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
            style={styles.searchIcon}
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
            style={styles.searchIcon}
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
            style={styles.searchIcon}
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
            style={styles.profileIcon}
            contentFit="cover"
            source={require("../assets/profile1.png")}
          />
          <Text style={[styles.profile2, styles.search1Typo]}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile1FlexBox: {
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
  },
  sharewheelsFlexBox: {
    textAlign: "center",
    color: Color.colorRoyalblue_100,
  },
  buttonfirstFlexBox: {
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    alignItems: "center",
  },
  signTypo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    textAlign: "center",
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
    height: 33,
    width: 375,
    overflow: "hidden",
  },
  sharewheels: {
    fontSize: 44,
    fontWeight: "800",
    fontFamily: FontFamily.nunitoExtraBold,
    width: 286,
  },
  image2Icon: {
    width: 275,
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
    elevation: 14,
    shadowRadius: 14,
    shadowColor: "rgba(236, 95, 95, 0.25)",
    flexDirection: "row",
    justifyContent: "center",
  },
  signUp1: {
    color: Color.colorRoyalblue_100,
  },
  buttonsecondary: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    width: 318,
    height: 59,
    marginTop: 10,
    elevation: 14,
    shadowRadius: 14,
    shadowColor: "rgba(236, 95, 95, 0.25)",
    flexDirection: "row",
    justifyContent: "center",
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
  profileIcon: {
    width: 22,
    height: 22,
  },
  profile2: {
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
  profile1: {
    flex: 1,
    height: 834,
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile;

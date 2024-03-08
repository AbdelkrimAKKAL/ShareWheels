import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FooterSearch from "../components/FooterSearch";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const AjouterAnnonce = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ajouterannonce}>
      <View style={styles.bar}>
        <View style={styles.rectangle} />
      </View>
      <View style={styles.main}>
        <Text style={styles.ajouterAnnonce}>Ajouter Annonce</Text>
        <View style={styles.inputs}>
          <View style={styles.inputShadowBox1}>
            <Image
              style={styles.mapPinIcon}
              contentFit="cover"
              source={require("../assets/mappin1.png")}
            />
            <Text style={[styles.number, styles.numberTypo]}>Depart</Text>
          </View>
          <View style={styles.inputShadowBox1}>
            <Image
              style={styles.mapPinIcon}
              contentFit="cover"
              source={require("../assets/mappin2.png")}
            />
            <Text style={[styles.number, styles.numberTypo]}>Destination</Text>
          </View>
          <Pressable
            style={styles.inputShadowBox}
            onPress={() => navigation.navigate("Dates")}
          >
            <Image
              style={styles.mapPinIcon2}
              contentFit="cover"
              source={require("../assets/mappin3.png")}
            />
            <Text style={[styles.number2, styles.numberTypo]}>Date</Text>
          </Pressable>
          <Pressable
            style={styles.inputShadowBox}
            onPress={() => navigation.navigate("Voiture")}
          >
            <Image
              style={styles.mapPinIcon2}
              contentFit="cover"
              source={require("../assets/mappin4.png")}
            />
            <Text style={[styles.number2, styles.numberTypo]}>Voiture</Text>
          </Pressable>
          <Pressable
            style={styles.inputShadowBox}
            onPress={() => navigation.navigate("Aajouter")}
          >
            <Image
              style={styles.mapPinIcon}
              contentFit="cover"
              source={require("../assets/addellipse-svgrepocom.png")}
            />
            <Text style={[styles.number2, styles.numberTypo]}>A ajouter</Text>
          </Pressable>
        </View>
        <View style={styles.buttonfirst}>
          <Text style={styles.signUp}>Ajouter</Text>
        </View>
      </View>
      <FooterSearch
        dimensionCode={require("../assets/search.png")}
        dimensionCodeText={require("../assets/format-list-bulleted.png")}
        dimensionCodeIdentifier={require("../assets/add-circle-outline1.png")}
        dimensionCodeIdentifierTe={require("../assets/sharecircle-svgrepocom4.png")}
        dimensionCodeIdentifierTe2={require("../assets/profile1.png")}
        propColor="#9d9fa0"
        propColor1="#9d9fa0"
        propColor2="#0075fd"
        propColor3="#9d9fa0"
        propColor4="#9d9fa0"
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
  numberTypo: {
    height: 19,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
    fontSize: FontSize.size_mini,
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
  ajouterAnnonce: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslategray_100,
    width: 359,
    textAlign: "center",
  },
  mapPinIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  number: {
    width: 227,
  },
  inputShadowBox1: {
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
  mapPinIcon2: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  number2: {
    width: 220,
  },
  inputShadowBox: {
    height: 57,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 292,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
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
  inputs: {
    height: 342,
    marginTop: 70,
    justifyContent: "space-between",
    alignItems: "center",
  },
  signUp: {
    fontSize: FontSize.subheadLgSHLgMedium_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.subheadLgSHLgMedium,
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
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    height: 673,
    justifyContent: "center",
    alignItems: "center",
  },
  ajouterannonce: {
    flex: 1,
    height: 834,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
});

export default AjouterAnnonce;

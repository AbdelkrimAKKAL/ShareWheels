import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Annonce from "../components/Annonce";
import FooterSearch from "../components/FooterSearch";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const ResultatRecherche = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.resultatrecherche, styles.rectangleLayout]}>
      <View style={styles.bar}>
        <View style={[styles.rectangle, styles.rectangleLayout]} />
      </View>
      <View style={[styles.headerTopActionBar, styles.frameLayout]}>
        <View style={[styles.frame, styles.frameLayout]}>
          <Text style={[styles.heading, styles.headingLayout]}>
            Bejaia a Alger
          </Text>
          <Text style={[styles.heading1, styles.headingLayout]}>
            31 DEC 23, 2 Places
          </Text>
        </View>
      </View>
      <View style={styles.main}>
        <Annonce
          profilePicture={require("../assets/profilepicture1.png")}
          vector={require("../assets/vector4.png")}
          group={require("../assets/group1.png")}
          annoncePosition="unset"
          annonceMarginTop="unset"
          onDetailsPress={() => navigation.navigate("Details")}
        />
        <Annonce
          profilePicture={require("../assets/profilepicture1.png")}
          vector={require("../assets/vector4.png")}
          group={require("../assets/group1.png")}
          annoncePosition="unset"
          annonceMarginTop={15}
          onDetailsPress={() => navigation.navigate("Details")}
        />
        <Annonce
          profilePicture={require("../assets/profilepicture1.png")}
          vector={require("../assets/vector4.png")}
          group={require("../assets/group1.png")}
          annoncePosition="unset"
          annonceMarginTop={15}
          onDetailsPress={() => navigation.navigate("Details")}
        />
      </View>
      <FooterSearch
        dimensionCode={require("../assets/search1.png")}
        dimensionCodeText={require("../assets/format-list-bulleted.png")}
        dimensionCodeIdentifier={require("../assets/add-circle-outline.png")}
        dimensionCodeIdentifierTe={require("../assets/sharecircle-svgrepocom4.png")}
        dimensionCodeIdentifierTe2={require("../assets/profile1.png")}
        propColor="#0075fd"
        propColor1="#9d9fa0"
        propColor2="#9d9fa0"
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
  rectangleLayout: {
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
  frameLayout: {
    borderRadius: Border.br_mini,
    alignItems: "center",
  },
  headingLayout: {
    height: 18,
    textAlign: "center",
  },
  rectangle: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  bar: {
    height: 33,
    width: 375,
    overflow: "hidden",
  },
  heading: {
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontWeight: "500",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    color: Color.neutralGray1,
    width: 325,
  },
  heading1: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    fontFamily: FontFamily.poppinsRegular,
    color: "#8c8c8c",
    width: 200,
    marginTop: 10,
  },
  frame: {
    borderStyle: "solid",
    borderColor: "rgba(0, 117, 253, 0.4)",
    borderWidth: 1,
    width: 300,
    height: 54,
    justifyContent: "center",
  },
  headerTopActionBar: {
    width: 341,
    height: 89,
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
  },
  main: {
    height: 653,
    paddingHorizontal: Padding.p_mini,
    paddingBottom: Padding.p_mini,
    width: 375,
    alignItems: "center",
  },
  resultatrecherche: {
    flex: 1,
    height: 834,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default ResultatRecherche;

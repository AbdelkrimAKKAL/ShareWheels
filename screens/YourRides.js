import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MesAnnonces from "../components/MesAnnonces";
import FooterSearch from "../components/FooterSearch";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const YourRides = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.yourrides, styles.yourridesLayout]}>
      <View style={styles.bar}>
        <View style={[styles.rectangle, styles.yourridesLayout]} />
      </View>
      <Text style={styles.yourRides}>Your Rides</Text>
      <View style={styles.main}>
        <MesAnnonces
          dimensionText={require("../assets/profilepicture1.png")}
          productCodeText={require("../assets/vector4.png")}
          productCodeText2={require("../assets/group1.png")}
          deliveryInfoText="22 DEC 23"
          cancelButtonText="Supprimer"
          groupViewMarginTop="unset"
        />
        <MesAnnonces
          dimensionText={require("../assets/profilepicture1.png")}
          productCodeText={require("../assets/vector4.png")}
          productCodeText2={require("../assets/group2.png")}
          deliveryInfoText="22 DEC 23"
          cancelButtonText="Supprimer"
          groupViewMarginTop={8}
        />
        <MesAnnonces
          dimensionText={require("../assets/profilepicture1.png")}
          productCodeText={require("../assets/vector4.png")}
          productCodeText2={require("../assets/group3.png")}
          deliveryInfoText="22 DEC 23"
          cancelButtonText="Supprimer"
          groupViewMarginTop={8}
        />
      </View>
      <FooterSearch
        dimensionCode={require("../assets/search.png")}
        dimensionCodeText={require("../assets/format-list-bulleted1.png")}
        dimensionCodeIdentifier={require("../assets/add-circle-outline.png")}
        dimensionCodeIdentifierTe={require("../assets/sharecircle-svgrepocom4.png")}
        dimensionCodeIdentifierTe2={require("../assets/profile1.png")}
        propColor="#9d9fa0"
        propColor1="#0075fd"
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
  yourridesLayout: {
    width: "100%",
    backgroundColor: Color.neutralWhite,
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
    width: 375,
    height: 33,
    overflow: "hidden",
  },
  yourRides: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
  },
  main: {
    height: 658,
    alignItems: "center",
  },
  yourrides: {
    flex: 1,
    height: 834,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default YourRides;

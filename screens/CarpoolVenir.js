import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonsSwitch from "../components/ButtonsSwitch";
import MesAnnonces from "../components/MesAnnonces";
import FooterSearch from "../components/FooterSearch";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const CarpoolVenir = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.carpoolvenir, styles.rectangleLayout]}>
      <View style={styles.bar}>
        <View style={[styles.rectangle, styles.rectangleLayout]} />
      </View>
      <Text style={styles.carpools}>Carpools</Text>
      <ButtonsSwitch
        buttonsSwitchPosition="unset"
        aVenirBackgroundColor="#0075fd"
        aVenirColor="#fff"
        passesBackgroundColor="#fff"
        passsColor="#0075fd"
        onPassesPress={() => navigation.navigate("CarpoolPasses")}
      />
      <View style={styles.main}>
        <MesAnnonces
          dimensionText={require("../assets/profilepicture.png")}
          productCodeText={require("../assets/vector1.png")}
          productCodeText2={require("../assets/group.png")}
          deliveryInfoText="3 jours"
          cancelButtonText="Annuler"
        />
        <MesAnnonces
          dimensionText={require("../assets/profilepicture.png")}
          productCodeText={require("../assets/vector1.png")}
          productCodeText2={require("../assets/group.png")}
          deliveryInfoText="22 DEC 23"
          cancelButtonText="Annuler"
          groupViewMarginTop={8}
        />
        <MesAnnonces
          dimensionText={require("../assets/profilepicture.png")}
          productCodeText={require("../assets/vector1.png")}
          productCodeText2={require("../assets/group.png")}
          deliveryInfoText="22 DEC 23"
          cancelButtonText="Annuler"
          groupViewMarginTop={8}
        />
      </View>
      <FooterSearch
        dimensionCode={require("../assets/search.png")}
        dimensionCodeText={require("../assets/format-list-bulleted.png")}
        dimensionCodeIdentifier={require("../assets/add-circle-outline.png")}
        dimensionCodeIdentifierTe={require("../assets/sharecircle-svgrepocom5.png")}
        dimensionCodeIdentifierTe2={require("../assets/profile1.png")}
        propColor="#9d9fa0"
        propColor1="#9d9fa0"
        propColor2="#9d9fa0"
        propColor3="#0075fd"
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
  carpools: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
  },
  main: {
    height: 614,
    alignItems: "center",
  },
  carpoolvenir: {
    flex: 1,
    height: 834,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default CarpoolVenir;

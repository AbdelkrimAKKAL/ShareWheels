import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ContainerInput from "../components/ContainerInput";
import FooterSearch from "../components/FooterSearch";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Modifier = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.modifier, styles.mainFlexBox]}>
      <View style={styles.bar}>
        <View style={styles.rectangle} />
      </View>
      <View style={[styles.main, styles.mainFlexBox]}>
        <Text style={[styles.title, styles.titleFlexBox]}>Modifer profil</Text>
        <Image
          style={styles.photoprofilIcon}
          contentFit="cover"
          source={require("../assets/photoprofil.png")}
        />
        <View style={[styles.inputs, styles.titleFlexBox]}>
          <Text style={styles.plusTypo}>Modifier Nom</Text>
          <View style={styles.inputinfo}>
            <Text style={styles.amineMeddouri}>Amine Meddouri</Text>
          </View>
          <Text style={[styles.plusDeDetails1, styles.plusTypo]}>
            Modifier mot de passe
          </Text>
          <View style={styles.inputinfo}>
            <Text style={[styles.nouveauMotDe, styles.nouveauMotDeTypo]}>
              Nouveau mot de passe
            </Text>
          </View>
          <Text style={[styles.plusDeDetails1, styles.plusTypo]}>
            Modifier mail
          </Text>
          <View style={styles.inputinfo}>
            <Text style={[styles.amineemailcon, styles.nouveauMotDeTypo]}>
              Amine@email.con
            </Text>
          </View>
          <Text style={[styles.plusDeDetails1, styles.plusTypo]}>
            Modifier numero de telephone
          </Text>
          <ContainerInput
            productCode={require("../assets/flagforflagalgeria-svgrepocom.png")}
            propMarginTop={17}
            propColor="#a4a4a4"
          />
        </View>
        <View style={[styles.buttonfirst, styles.titleFlexBox]}>
          <Text style={styles.signUp}>Confirmer</Text>
        </View>
      </View>
      <FooterSearch
        dimensionCode={require("../assets/search.png")}
        dimensionCodeText={require("../assets/format-list-bulleted.png")}
        dimensionCodeIdentifier={require("../assets/add-circle-outline.png")}
        dimensionCodeIdentifierTe={require("../assets/sharecircle-svgrepocom1.png")}
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
  mainFlexBox: {
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.neutralWhite,
  },
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  plusTypo: {
    width: 316,
    textAlign: "left",
    color: Color.textColorContentTertiary,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    display: "flex",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    alignItems: "center",
  },
  nouveauMotDeTypo: {
    left: "5.64%",
    color: Color.colorDarkgray_100,
    textAlign: "left",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    display: "flex",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    position: "absolute",
    alignItems: "center",
  },
  rectangle: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
  bar: {
    height: 33,
    width: 375,
    overflow: "hidden",
  },
  title: {
    fontSize: FontSize.headingH2_size,
    lineHeight: 25,
    color: Color.textColorContentPrimary,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    justifyContent: "center",
    width: 375,
  },
  photoprofilIcon: {
    width: 138,
    height: 138,
    marginTop: 15,
  },
  amineMeddouri: {
    top: "31.67%",
    left: "5.52%",
    color: Color.colorDarkgray_100,
    textAlign: "left",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    position: "absolute",
  },
  inputinfo: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorSilver_100,
    borderWidth: 1,
    width: 328,
    height: 60,
    marginTop: 17,
  },
  plusDeDetails1: {
    marginTop: 17,
  },
  nouveauMotDe: {
    width: "86.59%",
    top: "30.83%",
  },
  amineemailcon: {
    width: "89.94%",
    top: "32.5%",
  },
  inputs: {
    height: 447,
    marginTop: 15,
  },
  signUp: {
    lineHeight: 24,
    color: Color.neutralWhite,
    width: 235,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  buttonfirst: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorRoyalblue_100,
    shadowColor: "rgba(236, 95, 95, 0.25)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
    width: 317,
    height: 58,
    flexDirection: "row",
    marginTop: 15,
  },
  main: {
    alignSelf: "stretch",
    height: 731,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    overflow: "hidden",
    backgroundColor: Color.neutralWhite,
  },
  modifier: {
    flex: 1,
    height: 834,
    justifyContent: "space-between",
    width: "100%",
    overflow: "hidden",
    backgroundColor: Color.neutralWhite,
  },
});

export default Modifier;

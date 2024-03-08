import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ContainerInput from "../components/ContainerInput";
import FooterSearch from "../components/FooterSearch";
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";

const MonProfil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.monprofil}>
      <View style={styles.bar}>
        <View style={styles.rectangle} />
      </View>
      <View style={styles.main}>
        <Text style={[styles.title, styles.titleFlexBox]}>Mon Profile</Text>
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={require("../assets/image2.png")}
        />
        <Text style={styles.amineMeddouri}>Amine Meddouri</Text>
        <View style={styles.vectorParent}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
          <Text style={styles.note}>4.7</Text>
        </View>
        <View style={[styles.inputs, styles.titleFlexBox]}>
          <View style={styles.inputinfo}>
            <Text style={styles.amineemailcon}>Amine@email.con</Text>
          </View>
          <ContainerInput
            productCode={require("../assets/flagforflagalgeria-svgrepocom1.png")}
            propMarginTop={17}
            propColor="#a4a4a4"
          />
        </View>
        <Pressable
          style={styles.buttonfirst}
          onPress={() => navigation.navigate("Modifier")}
        >
          <Text style={[styles.signUp, styles.signTypo]}>Modifier</Text>
        </Pressable>
        <View style={[styles.buttonsecondary, styles.buttonsecondaryShadowBox]}>
          <Text style={[styles.signUp1, styles.signTypo]}>Logout</Text>
        </View>
        <View
          style={[styles.buttonsecondary1, styles.buttonsecondaryShadowBox]}
        >
          <Text style={[styles.signUp2, styles.signTypo]}>Supprimer</Text>
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
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  signTypo: {
    lineHeight: 24,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  buttonsecondaryShadowBox: {
    height: 59,
    width: 318,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(236, 95, 95, 0.25)",
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rectangle: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.neutralWhite,
    position: "absolute",
    width: "100%",
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
    height: 25,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    width: 375,
  },
  imageIcon: {
    width: 138,
    height: 138,
  },
  amineMeddouri: {
    fontSize: FontSize.titleLgTLgMedium_size,
    lineHeight: 34,
    color: Color.textColorContentTertiary,
    width: 295,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    height: 33,
  },
  vectorIcon: {
    width: 12,
    height: 12,
  },
  note: {
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslategray_100,
    width: 36,
    height: 20,
    marginLeft: 2,
    textAlign: "center",
  },
  vectorParent: {
    width: 90,
    height: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  amineemailcon: {
    width: "88.41%",
    top: "32.17%",
    left: "5.64%",
    lineHeight: 23,
    color: Color.colorDarkgray_100,
    textAlign: "left",
    fontSize: FontSize.subheadLgSHLgMedium_size,
    display: "flex",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    position: "absolute",
    alignItems: "center",
  },
  inputinfo: {
    borderRadius: Border.br_5xs,
    borderColor: Color.colorSilver_100,
    width: 328,
    height: 60,
    borderWidth: 1,
    borderStyle: "solid",
  },
  inputs: {
    height: 199,
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
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(236, 95, 95, 0.25)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signUp1: {
    color: Color.colorRoyalblue_100,
  },
  buttonsecondary: {
    borderColor: Color.colorRoyalblue_100,
  },
  signUp2: {
    color: Color.colorTomato,
  },
  buttonsecondary1: {
    borderColor: Color.colorTomato,
  },
  main: {
    paddingTop: Padding.p_xl,
    paddingBottom: 24,
    backgroundColor: Color.neutralWhite,
    width: 375,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  monprofil: {
    height: 834,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default MonProfil;

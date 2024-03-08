import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FooterSearch from "../components/FooterSearch";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Aajouter = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aajouter}>
      <View style={styles.bar}>
        <View style={styles.rectangle} />
      </View>
      <View style={styles.main}>
        <Text style={styles.aAjouter}>A ajouter</Text>
        <View style={styles.inputs}>
          <View style={[styles.input, styles.inputShadowBox]}>
            <Image
              style={styles.radioButtonUncheckedSvgrepoIcon}
              contentFit="cover"
              source={require("../assets/radiobuttonunchecked-svgrepocom.png")}
            />
            <Text style={[styles.number, styles.numberTypo]}>Fumeurs</Text>
          </View>
          <View style={[styles.input1, styles.inputShadowBox]}>
            <Image
              style={styles.radioButtonUncheckedSvgrepoIcon}
              contentFit="cover"
              source={require("../assets/radiobuttonunchecked-svgrepocom1.png")}
            />
            <Text style={[styles.number, styles.numberTypo]}>Bagages</Text>
          </View>
          <View style={[styles.input2, styles.inputShadowBox]}>
            <Image
              style={styles.radioButtonUncheckedSvgrepoIcon}
              contentFit="cover"
              source={require("../assets/radiobuttonunchecked-svgrepocom2.png")}
            />
            <Text style={[styles.number, styles.numberTypo]}>
              Ouvert à la conversation
            </Text>
          </View>
          <View style={[styles.input3, styles.inputShadowBox]}>
            <Image
              style={styles.radioButtonUncheckedSvgrepoIcon}
              contentFit="cover"
              source={require("../assets/radiobuttonunchecked-svgrepocom3.png")}
            />
            <Text style={[styles.number, styles.numberTypo]}>
              Passagers de différents sexes
            </Text>
          </View>
          <View style={[styles.input4, styles.inputShadowBox]}>
            <Image
              style={styles.radioButtonUncheckedSvgrepoIcon}
              contentFit="cover"
              source={require("../assets/radiobuttonunchecked-svgrepocom4.png")}
            />
            <Text style={[styles.number, styles.numberTypo]}>
              Arrêts supplémentaires
            </Text>
          </View>
          <View style={[styles.input5, styles.inputShadowBox]}>
            <Text style={[styles.number5, styles.numberTypo]}>A ajouter</Text>
          </View>
        </View>
        <View style={[styles.buttonfirst, styles.inputFlexBox]}>
          <Text style={styles.signUp}>Confirmer</Text>
        </View>
      </View>
      <FooterSearch
        dimensionCode={require("../assets/search.png")}
        dimensionCodeText={require("../assets/format-list-bulleted.png")}
        dimensionCodeIdentifier={require("../assets/add-circle-outline1.png")}
        dimensionCodeIdentifierTe={require("../assets/sharecircle-svgrepocom3.png")}
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
  inputShadowBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    backgroundColor: Color.neutralWhite,
  },
  numberTypo: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
    fontSize: FontSize.size_mini,
  },
  inputFlexBox: {
    flexDirection: "row",
    alignItems: "center",
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
  aAjouter: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslategray_100,
    width: 359,
    textAlign: "center",
  },
  radioButtonUncheckedSvgrepoIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  number: {
    width: 227,
    height: 19,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    width: 292,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    justifyContent: "space-between",
  },
  input1: {
    flexDirection: "row",
    alignItems: "center",
    width: 292,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    justifyContent: "space-between",
  },
  input2: {
    flexDirection: "row",
    alignItems: "center",
    width: 292,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    justifyContent: "space-between",
  },
  input3: {
    flexDirection: "row",
    alignItems: "center",
    width: 292,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    justifyContent: "space-between",
  },
  input4: {
    flexDirection: "row",
    alignItems: "center",
    width: 292,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    justifyContent: "space-between",
  },
  number5: {
    width: 265,
    height: 143,
  },
  input5: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
  },
  inputs: {
    height: 533,
    marginTop: 30,
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
    marginTop: 30,
    justifyContent: "center",
  },
  main: {
    height: 705,
    justifyContent: "center",
    alignItems: "center",
  },
  aajouter: {
    flex: 1,
    height: 834,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
});

export default Aajouter;

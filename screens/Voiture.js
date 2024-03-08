import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FooterSearch from "../components/FooterSearch";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const Voiture = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.voiture, styles.voitureLayout]}>
      <View style={styles.bar}>
        <View style={[styles.rectangle, styles.voitureLayout]} />
      </View>
      <View style={styles.main}>
        <Text style={styles.voiture1}>Voiture</Text>
        <View style={styles.inputs}>
          <Text style={styles.number}>Model</Text>
          <View style={[styles.input, styles.inputShadowBox]}>
            <Text style={[styles.number1, styles.numberClr]}>Model</Text>
          </View>
          <Text style={styles.number}>Matricule</Text>
          <View style={[styles.input1, styles.inputShadowBox]}>
            <Text style={[styles.number1, styles.numberClr]}>Matricule</Text>
          </View>
          <Text style={styles.number}>Couleur</Text>
          <View style={[styles.frame, styles.frameFlexBox]}>
            <View style={[styles.input2, styles.frameFlexBox]}>
              <Text style={[styles.number5, styles.numberClr]}>Couleur</Text>
            </View>
          </View>
          <View style={[styles.nmbrplaces, styles.inputFlexBox]}>
            <Image
              style={styles.moinsIcon}
              contentFit="cover"
              source={require("../assets/moins.png")}
            />
            <View style={[styles.input3, styles.inputShadowBox]}>
              <Image
                style={styles.clock3Icon}
                contentFit="cover"
                source={require("../assets/clock32.png")}
              />
              <Text style={[styles.number6, styles.numberClr]}>1</Text>
            </View>
            <Image
              style={styles.moinsIcon}
              contentFit="cover"
              source={require("../assets/plus.png")}
            />
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
        dimensionCodeIdentifierTe={require("../assets/sharecircle-svgrepocom1.png")}
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
  voitureLayout: {
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
  inputShadowBox: {
    paddingVertical: Padding.p_base,
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
  numberClr: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
  },
  frameFlexBox: {
    width: 290,
    flexDirection: "row",
    alignItems: "center",
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
  },
  bar: {
    width: 375,
    height: 33,
    overflow: "hidden",
  },
  voiture1: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslategray_100,
    width: 359,
    textAlign: "center",
  },
  number: {
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    width: 289,
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
  },
  number1: {
    width: 227,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    height: 19,
    textAlign: "left",
  },
  input: {
    width: 284,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  input1: {
    width: 292,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  number5: {
    width: 224,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    height: 19,
    textAlign: "left",
  },
  input2: {
    paddingVertical: Padding.p_base,
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
    paddingHorizontal: Padding.p_mini,
    justifyContent: "space-between",
  },
  frame: {
    justifyContent: "center",
  },
  moinsIcon: {
    width: 30,
    height: 30,
  },
  clock3Icon: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  number6: {
    fontSize: FontSize.headingH2_size,
    width: 15,
    marginLeft: 5,
    height: 22,
    textAlign: "center",
  },
  input3: {
    width: 57,
    paddingHorizontal: Padding.p_8xs,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    justifyContent: "center",
  },
  nmbrplaces: {
    width: 175,
    justifyContent: "space-between",
  },
  inputs: {
    height: 452,
    marginTop: 50,
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
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "center",
  },
  main: {
    height: 673,
    justifyContent: "center",
    alignItems: "center",
  },
  voiture: {
    flex: 1,
    height: 834,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Voiture;

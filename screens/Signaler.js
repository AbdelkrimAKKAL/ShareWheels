import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FooterSearch from "../components/FooterSearch";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Signaler = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signaler, styles.inputFlexBox1]}>
      <View style={styles.bar}>
        <View style={styles.rectangle} />
      </View>
      <View style={styles.main}>
        <Text style={styles.signaler1}>Signaler</Text>
        <View style={styles.inputs}>
          <Text style={[styles.number, styles.numberTypo]}>Pourquoi</Text>
          <View style={[styles.input, styles.inputFlexBox]}>
            <Text style={[styles.number1, styles.numberTypo]}>Parce que</Text>
          </View>
        </View>
        <View style={[styles.buttonfirst, styles.inputFlexBox]}>
          <Text style={styles.signUp}>Signaler</Text>
        </View>
      </View>
      <FooterSearch
        dimensionCode={require("../assets/search.png")}
        dimensionCodeText={require("../assets/format-list-bulleted.png")}
        dimensionCodeIdentifier={require("../assets/add-circle-outline.png")}
        dimensionCodeIdentifierTe={require("../assets/sharecircle-svgrepocom2.png")}
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
  inputFlexBox1: {
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
  },
  numberTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
  },
  inputFlexBox: {
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
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
  signaler1: {
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
  },
  number1: {
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    width: 227,
    height: 389,
  },
  input: {
    borderRadius: Border.br_base,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    shadowRadius: 30,
    elevation: 30,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    width: 284,
    height: 458,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_base,
    marginTop: 15,
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
  },
  inputs: {
    height: 491,
    marginTop: 50,
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
    marginTop: 50,
    justifyContent: "center",
  },
  main: {
    height: 705,
    justifyContent: "center",
    alignItems: "center",
  },
  signaler: {
    flex: 1,
    height: 834,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default Signaler;

import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FooterSearch from "../components/FooterSearch";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Dates = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dates}>
      <View style={styles.bar}>
        <View style={styles.rectangle} />
      </View>
      <Text style={styles.dates1}>Dates</Text>
      <View style={styles.main}>
        <View style={styles.inputs}>
          <View style={styles.frameFlexBox}>
            <View style={styles.inputShadowBox}>
              <Image
                style={styles.mapPinIcon}
                contentFit="cover"
                source={require("../assets/mappin.png")}
              />
              <Text style={[styles.number, styles.numberTypo]}>Date</Text>
            </View>
            <View style={styles.inputSpaceBlock}>
              <Image
                style={styles.clock3Icon}
                contentFit="cover"
                source={require("../assets/clock3.png")}
              />
              <Text style={[styles.number1, styles.numberTypo]}>Heure</Text>
            </View>
          </View>
          <View style={[styles.frame1, styles.frameFlexBox]}>
            <View style={styles.inputShadowBox}>
              <Image
                style={styles.mapPinIcon}
                contentFit="cover"
                source={require("../assets/mappin.png")}
              />
              <Text style={[styles.number, styles.numberTypo]}>Date</Text>
            </View>
            <View style={styles.inputSpaceBlock}>
              <Image
                style={styles.clock3Icon}
                contentFit="cover"
                source={require("../assets/clock3.png")}
              />
              <Text style={[styles.number1, styles.numberTypo]}>Heure</Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.addCircleSvgrepocomIcon}
          contentFit="cover"
          source={require("../assets/addcircle-svgrepocom.png")}
        />
        <View style={styles.buttonfirst}>
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
  numberTypo: {
    height: 19,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
    fontSize: FontSize.size_mini,
  },
  frameFlexBox: {
    flexDirection: "row",
    width: 290,
    justifyContent: "center",
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
  dates1: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslategray_100,
    width: 359,
    textAlign: "center",
  },
  mapPinIcon: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  number: {
    width: 138,
  },
  inputShadowBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    width: 201,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  clock3Icon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  number1: {
    width: 45,
  },
  inputSpaceBlock: {
    marginLeft: 6,
    paddingBottom: Padding.p_base,
    paddingRight: Padding.p_8xs,
    paddingTop: Padding.p_base,
    paddingLeft: Padding.p_5xs,
    width: 84,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  frame1: {
    marginTop: 10,
  },
  inputs: {
    height: 506,
    alignItems: "center",
  },
  addCircleSvgrepocomIcon: {
    width: 60,
    height: 60,
    marginTop: 20,
    overflow: "hidden",
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
    marginTop: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    height: 678,
    justifyContent: "center",
    alignItems: "center",
  },
  dates: {
    flex: 1,
    height: 834,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
});

export default Dates;

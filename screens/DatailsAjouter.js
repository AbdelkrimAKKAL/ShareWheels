import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import TopBar from "../components/TopBar";

const DatailsAjouter = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.datailsajouter, styles.footerpublishFlexBox]}>
      <TopBar/>
      <Text style={styles.detailsAAjouter}>Details a ajouter</Text>
      <View style={styles.main}>
        <View style={styles.inputs}>
          <View style={styles.input}>
            <Image
              style={styles.radioButtonUncheckedSvgrepoIcon}
              contentFit="cover"
              source={require("../assets/radiobuttonunchecked-svgrepocom1.png")}
            />
            <Text style={styles.number}>Fumeurs</Text>
          </View>
          <View style={styles.inputShadowBox}>
            <Image
              style={styles.radioButtonUncheckedSvgrepoIcon}
              contentFit="cover"
              source={require("../assets/radiobuttonunchecked-svgrepocom1.png")}
            />
            <Text style={styles.number}>Bagages</Text>
          </View>
          <View style={styles.inputShadowBox}>
            <Image
              style={styles.radioButtonUncheckedSvgrepoIcon}
              contentFit="cover"
              source={require("../assets/radiobuttonunchecked-svgrepocom1.png")}
            />
            <Text style={styles.number}>Ouvert à la conversation</Text>
          </View>
          <View style={styles.inputShadowBox}>
            <Image
              style={styles.radioButtonUncheckedSvgrepoIcon}
              contentFit="cover"
              source={require("../assets/radiobuttonunchecked-svgrepocom1.png")}
            />
            <Text style={styles.number}>Passagers de différents sexes</Text>
          </View>
          <View style={styles.inputShadowBox}>
            <Image
              style={styles.radioButtonUncheckedSvgrepoIcon}
              contentFit="cover"
              source={require("../assets/radiobuttonunchecked-svgrepocom1.png")}
            />
            <Text style={styles.number}>Arrêts supplémentaires</Text>
          </View>
        </View>
        <Image
          style={styles.addCircleSvgrepocomIcon}
          contentFit="cover"
          source={require("../assets/addcircle-svgrepocom.png")}
        />
        <View style={[styles.buttonfirst, styles.buttonfirstFlexBox]}>
          <Text style={styles.signUp}>Confirmer</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerpublishFlexBox: {
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
  },
  buttonfirstFlexBox: {
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    alignItems: "center",
  },
  search1Typo: {
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    marginTop: 5,
    textAlign: "center",
  },
  searchLayout: {
    height: 64,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },

  detailsAAjouter: {
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
    fontSize: FontSize.size_mini,
    lineHeight: 22,
    fontFamily: FontFamily.nunitoRegular,
    color: Color.colorGray_100,
    textAlign: "left",
    width: 227,
    height: 19,
  },
  input: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    width: 292,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
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
  inputShadowBox: {
    marginTop: 20,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 292,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
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
    height: 541,
    alignItems: "center",
  },
  addCircleSvgrepocomIcon: {
    width: 60,
    height: 60,
    marginTop: 5,
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
    marginTop: 5,
    justifyContent: "center",
  },
  main: {
    height: 684,
    justifyContent: "center",
    alignItems: "center",
  },
  search1: {
    color: Color.colorDarkgray_200,
  },
  yourRides: {
    padding: Padding.p_3xs,
  },
  publish1: {
    color: Color.colorRoyalblue_100,
  },
  profileIcon: {
    width: 22,
    height: 22,
  },
  footerpublish: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 20,
    elevation: 20,
    width: 375,
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
  },
  datailsajouter: {
    flex: 1,
    height: 834,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default DatailsAjouter;

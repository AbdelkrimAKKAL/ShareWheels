import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const AjouterAnnonce = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.ajouterannonce, styles.footerpublishFlexBox]}>
      <View style={styles.bar}>
        <View style={styles.rectangle} />
      </View>
      <View style={styles.main}>
        <Text style={styles.ajouterAnnonce}>Ajouter Annonce</Text>
        <View style={styles.inputs}>
          <View style={styles.input}>
            <Image
              style={styles.mapPinIcon}
              contentFit="cover"
              source={require("../assets/mappin3.png")}
            />
            <Text style={[styles.number, styles.numberTypo]}>Depart</Text>
          </View>
          <View style={[styles.input1, styles.inputShadowBox1]}>
            <Image
              style={styles.mapPinIcon}
              contentFit="cover"
              source={require("../assets/mappin3.png")}
            />
            <Text style={[styles.number, styles.numberTypo]}>Destination</Text>
          </View>
          <Pressable
            style={styles.inputShadowBox}
            onPress={() => navigation.navigate("Dates")}
          >
            <Image
              style={[styles.mapPinIcon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/mappin4.png")}
            />
            <Text style={[styles.number2, styles.numberTypo]}>Date</Text>
          </Pressable>
          <View style={styles.inputShadowBox}>
            <Image
              style={[styles.mapPinIcon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/mappin5.png")}
            />
            <Text style={[styles.number3, styles.numberTypo]}>Voiture</Text>
            <Image
              style={styles.downArrowIcon}
              contentFit="cover"
              source={require("../assets/down-arrow1.png")}
            />
          </View>
          <View style={[styles.input4, styles.inputShadowBox1]}>
            <Text style={styles.number4}>A ajouter</Text>
          </View>
        </View>
        <View style={[styles.buttonfirst, styles.input1FlexBox]}>
          <Text style={styles.signUp}>Ajouter</Text>
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
  numberTypo: {
    height: 19,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
    fontSize: FontSize.size_mini,
  },
  inputShadowBox1: {
    marginTop: 15,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
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
    backgroundColor: Color.neutralWhite,
  },
  iconLayout: {
    height: 22,
    width: 22,
  },
  input1FlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  search1Typo: {
    marginTop: 5,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
  },
  searchLayout: {
    height: 64,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
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
    height: 33,
    width: 375,
    overflow: "hidden",
  },
  ajouterAnnonce: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslategray_100,
    width: 359,
    textAlign: "center",
  },
  mapPinIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  number: {
    width: 227,
  },
  input: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    flexDirection: "row",
    width: 292,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  input1: {
    flexDirection: "row",
    alignItems: "center",
    width: 292,
    marginTop: 15,
    justifyContent: "space-between",
  },
  mapPinIcon2: {
    overflow: "hidden",
  },
  number2: {
    width: 220,
  },
  inputShadowBox: {
    height: 57,
    marginTop: 15,
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
  number3: {
    width: 201,
  },
  downArrowIcon: {
    width: 22,
    height: 24,
  },
  number4: {
    width: 265,
    height: 229,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
    fontSize: FontSize.size_mini,
  },
  input4: {
    height: 261,
  },
  inputs: {
    height: 544,
    marginTop: 20,
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
    marginTop: 20,
    justifyContent: "center",
  },
  main: {
    height: 728,
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
  footerpublish: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 20,
    elevation: 20,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    width: 375,
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
  },
  ajouterannonce: {
    flex: 1,
    height: 834,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default AjouterAnnonce;

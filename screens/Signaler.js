import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const Signaler = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signaler, styles.signalerFlexBox]}>
      <View style={styles.bar}>
        <View style={styles.rectangle} />
      </View>
      <View style={styles.main}>
        <Text style={styles.signaler1}>Signaler</Text>
        <View style={styles.inputs}>
          <Text style={styles.number}>Pourquoi</Text>
          <View style={[styles.input, styles.inputShadowBox]}>
            <Image
              style={styles.radioButtonUncheckedSvgrepoIcon}
              contentFit="cover"
              source={require("../assets/radiobuttonunchecked-svgrepocom.png")}
            />
            <Text style={[styles.number1, styles.numberTypo]}>
              fausse informations personnels
            </Text>
          </View>
          <View style={[styles.input1, styles.inputShadowBox]}>
            <Image
              style={styles.radioButtonUncheckedSvgrepoIcon}
              contentFit="cover"
              source={require("../assets/radiobuttonunchecked-svgrepocom.png")}
            />
            <Text style={[styles.number1, styles.numberTypo]}>
              irrespectueux
            </Text>
          </View>
          <View style={[styles.input2, styles.inputShadowBox]}>
            <Image
              style={styles.radioButtonUncheckedSvgrepoIcon}
              contentFit="cover"
              source={require("../assets/radiobuttonunchecked-svgrepocom.png")}
            />
            <Text style={[styles.number1, styles.numberTypo]}>
              conduite dangereuse
            </Text>
          </View>
          <View style={[styles.input3, styles.inputShadowBox]}>
            <Image
              style={styles.radioButtonUncheckedSvgrepoIcon}
              contentFit="cover"
              source={require("../assets/radiobuttonunchecked-svgrepocom.png")}
            />
            <Text style={[styles.number1, styles.numberTypo]}>
              Véhicule en mauvais état
            </Text>
          </View>
          <View style={[styles.input4, styles.inputShadowBox]}>
            <Image
              style={styles.radioButtonUncheckedSvgrepoIcon}
              contentFit="cover"
              source={require("../assets/radiobuttonunchecked-svgrepocom.png")}
            />
            <Text style={[styles.number1, styles.numberTypo]}>
              Utilisation du téléphone portable
            </Text>
          </View>
          <View style={[styles.input5, styles.inputShadowBox]}>
            <Text style={[styles.number6, styles.numberTypo]}>Autre</Text>
          </View>
        </View>
        <View style={[styles.buttonfirst, styles.buttonfirstFlexBox]}>
          <Text style={styles.signUp}>Signaler</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signalerFlexBox: {
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
  },
  inputShadowBox: {
    marginTop: 15,
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
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  numberTypo: {
    width: 227,
    color: Color.colorGray_100,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
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
    textAlign: "left",
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
  },
  radioButtonUncheckedSvgrepoIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  number1: {
    height: 19,
  },
  input: {
    width: 292,
    marginTop: 15,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
  },
  input1: {
    width: 292,
    marginTop: 15,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
  },
  input2: {
    width: 292,
    marginTop: 15,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
  },
  input3: {
    width: 292,
    marginTop: 15,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
  },
  input4: {
    width: 292,
    marginTop: 15,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
  },
  number6: {
    height: 112,
  },
  input5: {
    width: 290,
    height: 139,
    marginTop: 15,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
  },
  inputs: {
    width: 295,
    height: 527,
    marginTop: 30,
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
    marginTop: 30,
    justifyContent: "center",
  },
  main: {
    height: 729,
    justifyContent: "center",
    alignItems: "center",
  },
  search1: {
    color: Color.colorDarkgray_200,
  },
  yourRides: {
    padding: Padding.p_3xs,
  },
  carpool1: {
    color: Color.colorRoyalblue_100,
  },
  profileIcon: {
    width: 22,
    height: 22,
  },
  footercarpool: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 20,
    elevation: 20,
    width: 375,
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
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

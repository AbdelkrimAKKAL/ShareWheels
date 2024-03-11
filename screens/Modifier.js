import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Modifier = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.modifier, styles.modifierFlexBox]}>
      <View style={styles.bar}>
        <View style={[styles.rectangle, styles.textPosition]} />
      </View>
      <View style={styles.main}>
        <Text style={styles.title}>Modifer profil</Text>
        <Image
          style={styles.photoprofilIcon}
          contentFit="cover"
          source={require("../assets/photoprofil.png")}
        />
        <View style={styles.inputs}>
          <Text style={styles.plusTypo}>Modifier Nom</Text>
          <View style={styles.inputinfo}>
            <Text style={[styles.amineMeddouri, styles.numeroTypo]}>
              Amine Meddouri
            </Text>
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
          <View style={styles.input}>
            <View style={styles.parent}>
              <Text style={[styles.text, styles.textTypo]}>+213</Text>
              <Image
                style={[
                  styles.flagForFlagAlgeriaSvgrepoIcon,
                  styles.iconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/flagforflagalgeria-svgrepocom.png")}
              />
            </View>
            <Text style={[styles.numero, styles.numeroTypo]}>
              06 78 89 56 45
            </Text>
          </View>
          <View style={[styles.buttonfirst, styles.buttonfirstShadowBox]}>
            <Text style={[styles.signUp, styles.textTypo]}>Confirmer</Text>
          </View>
        </View>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  modifierFlexBox: {
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
  },
  textPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  numeroTypo: {
    color: Color.colorDarkgray_100,
    textAlign: "left",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
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
  textTypo: {
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  iconLayout: {
    width: 24,
    overflow: "hidden",
  },
  buttonfirstShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
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
    height: "100%",
    right: "0%",
    bottom: "0%",
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
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "center",
    width: 375,
    alignItems: "center",
  },
  photoprofilIcon: {
    width: 138,
    height: 138,
    marginTop: 15,
  },
  amineMeddouri: {
    top: "31.67%",
    left: "5.52%",
    position: "absolute",
  },
  inputinfo: {
    height: 60,
    width: 328,
    borderWidth: 1,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    marginTop: 15,
  },
  plusDeDetails1: {
    marginTop: 15,
  },
  nouveauMotDe: {
    width: "86.59%",
    top: "30.83%",
  },
  amineemailcon: {
    width: "89.94%",
    top: "32.5%",
  },
  text: {
    lineHeight: 24,
    color: Color.titleText,
    textAlign: "right",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  flagForFlagAlgeriaSvgrepoIcon: {
    top: 1,
    left: 0,
    height: 23,
    position: "absolute",
  },
  parent: {
    width: 64,
    height: 24,
  },
  numero: {
    width: 201,
    marginLeft: 28,
  },
  input: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_lg,
    flexDirection: "row",
    width: 328,
    borderWidth: 1,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  signUp: {
    lineHeight: 24,
    color: Color.neutralWhite,
    width: 235,
    textAlign: "center",
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  buttonfirst: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorRoyalblue_100,
    shadowColor: "rgba(236, 95, 95, 0.25)",
    shadowRadius: 14,
    elevation: 14,
    width: 317,
    height: 58,
    marginTop: 15,
    justifyContent: "center",
  },
  inputs: {
    height: 519,
    marginTop: 15,
    alignItems: "center",
  },
  main: {
    alignSelf: "stretch",
    height: 731,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.neutralWhite,
  },
  searchIcon: {
    height: 24,
  },
  search1: {
    color: Color.colorDarkgray_200,
  },
  yourRides: {
    padding: Padding.p_3xs,
  },
  profileIcon: {
    width: 22,
    height: 22,
  },
  profile1: {
    color: Color.colorRoyalblue_100,
  },
  footerprofile: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 20,
    elevation: 20,
    width: 375,
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
  },
  modifier: {
    flex: 1,
    height: 834,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    justifyContent: "space-between",
  },
});

export default Modifier;

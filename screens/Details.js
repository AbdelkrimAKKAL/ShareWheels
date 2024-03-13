import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";
import TopBar from "../components/TopBar";

const Details = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.details}>
      <TopBar/>
      <View style={styles.main}>
        <View style={[styles.userprofile, styles.inputFlexBox]}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image.png")}
          />
          <View style={styles.nom}>
            <Text style={styles.amineMeddouri}>Amine Meddouri</Text>
            <View style={[styles.vectorParent, styles.inputFlexBox]}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
              <Text style={styles.text}>4.7 (1)</Text>
            </View>
          </View>
        </View>
        <ScrollView style={styles.detailsframe}>
          <View style={styles.inputinfoLayout}>
            <Text style={[styles.amineemailcon, styles.numeroTypo]}>
              Amine@email.con
            </Text>
          </View>
          <View style={styles.input}>
            <View style={styles.parent}>
              <Text style={styles.text1}>+213</Text>
              <Image
                style={[
                  styles.flagForFlagAlgeriaSvgrepoIcon,
                  styles.flagIconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/flagforflagalgeria-svgrepocom.png")}
              />
            </View>
            <Text style={[styles.numero, styles.numeroTypo]}>
              06 78 89 56 45
            </Text>
          </View>
          <View style={[styles.inputinfo1, styles.inputinfoLayout]}>
            <Text style={[styles.amineemailcon, styles.numeroTypo]}>Male</Text>
          </View>
          <Text style={[styles.dateEtHeure, styles.numeroTypo]}>
            Date et heure
          </Text>
          <View style={styles.dates}>
            <View style={[styles.frame, styles.frameFlexBox]}>
              <View style={[styles.input1, styles.inputShadowBox2]}>
                <Image
                  style={[styles.mapPinIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/mappin2.png")}
                />
                <Text style={[styles.number, styles.numberTypo1]}>Date</Text>
              </View>
              <View style={styles.inputSpaceBlock}>
                <Image
                  style={styles.clock3Icon}
                  contentFit="cover"
                  source={require("../assets/clock31.png")}
                />
                <Text style={[styles.number1, styles.numberTypo1]}>Heure</Text>
              </View>
            </View>
            <View style={[styles.frame1, styles.frameFlexBox]}>
              <View style={[styles.input3, styles.inputShadowBox2]}>
                <Image
                  style={[styles.mapPinIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/mappin2.png")}
                />
                <Text style={[styles.number, styles.numberTypo1]}>Date</Text>
              </View>
              <View style={styles.inputSpaceBlock}>
                <Image
                  style={styles.clock3Icon}
                  contentFit="cover"
                  source={require("../assets/clock31.png")}
                />
                <Text style={[styles.number1, styles.numberTypo1]}>Heure</Text>
              </View>
            </View>
          </View>
          <Text style={[styles.dateEtHeure, styles.numeroTypo]}>Voiture</Text>
          <View style={styles.voiture1ShadowBox}>
            <Text style={styles.numberLayout}>Model</Text>
            <View style={[styles.input5, styles.inputShadowBox2]}>
              <Text style={[styles.number5, styles.numberTypo1]}>Model</Text>
            </View>
            <Text style={[styles.number6, styles.numberLayout]}>Matricule</Text>
            <View style={[styles.input6, styles.inputShadowBox1]}>
              <Text style={[styles.number5, styles.numberTypo1]}>
                Matricule
              </Text>
            </View>
            <Text style={[styles.number6, styles.numberLayout]}>Couleur</Text>
            <View style={[styles.frame1, styles.frameFlexBox]}>
              <View style={[styles.input7, styles.inputShadowBox2]}>
                <Text style={[styles.number9, styles.numberTypo1]}>
                  Couleur
                </Text>
              </View>
            </View>
            <View style={[styles.nmbrplaces, styles.inputFlexBox]}>
              <Text style={[styles.number10, styles.numberTypo]}>Places</Text>
              <View style={[styles.input8, styles.inputShadowBox]}>
                <Image
                  style={[styles.mapPinIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/clock32.png")}
                />
                <Text style={[styles.number11, styles.numberClr]}>1</Text>
              </View>
              <Text style={[styles.number12, styles.numberTypo]}>
                Disponible
              </Text>
              <View style={[styles.input9, styles.inputShadowBox]}>
                <Image
                  style={[styles.mapPinIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/clock32.png")}
                />
                <Text style={[styles.number11, styles.numberClr]}>1</Text>
              </View>
            </View>
          </View>
          <Text style={[styles.dateEtHeure, styles.numeroTypo]}>
            Plus de details
          </Text>
          <View style={[styles.moredetails, styles.voiture1ShadowBox]}>
            <View style={styles.inputShadowBox1}>
              <Image
                style={[
                  styles.radioButtonUncheckedSvgrepoIcon,
                  styles.flagIconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/radiobuttonunchecked-svgrepocom.png")}
              />
              <Text style={[styles.number5, styles.numberTypo1]}>Fumeurs</Text>
            </View>
            <View style={[styles.input11, styles.inputShadowBox1]}>
              <Image
                style={[
                  styles.radioButtonUncheckedSvgrepoIcon,
                  styles.flagIconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/radiobuttonunchecked-svgrepocom.png")}
              />
              <Text style={[styles.number5, styles.numberTypo1]}>Bagages</Text>
            </View>
            <View style={[styles.input12, styles.inputShadowBox1]}>
              <Image
                style={[
                  styles.radioButtonUncheckedSvgrepoIcon,
                  styles.flagIconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/radiobuttonunchecked-svgrepocom.png")}
              />
              <Text style={[styles.number5, styles.numberTypo1]}>
                Ouvert à la conversation
              </Text>
            </View>
            <View style={[styles.input13, styles.inputShadowBox1]}>
              <Image
                style={[
                  styles.radioButtonUncheckedSvgrepoIcon,
                  styles.flagIconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/radiobuttonunchecked-svgrepocom.png")}
              />
              <Text style={[styles.number5, styles.numberTypo1]}>
                Passagers de différents sexes
              </Text>
            </View>
            <View style={[styles.input14, styles.inputShadowBox1]}>
              <Image
                style={[
                  styles.radioButtonUncheckedSvgrepoIcon,
                  styles.flagIconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/radiobuttonunchecked-svgrepocom.png")}
              />
              <Text style={[styles.number5, styles.numberTypo1]}>
                Arrêts supplémentaires
              </Text>
            </View>
            <View style={[styles.input15, styles.inputShadowBox2]}>
              <Text style={[styles.number19, styles.numberClr]}>A ajouter</Text>
            </View>
          </View>
          <View style={[styles.buttonsecondary, styles.buttonfirstShadowBox]}>
            <Text style={[styles.signUp, styles.signTypo]}>Afficher Map</Text>
          </View>
          <View style={[styles.buttonfirst, styles.buttonfirstShadowBox]}>
            <Text style={[styles.signUp1, styles.signTypo]}>Participer</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  numeroTypo: {
    lineHeight: 23,
    textAlign: "left",
    fontSize: FontSize.subheadLgSHLgMedium_size,
    color: Color.textColorContentTertiary,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  flagIconLayout: {
    width: 24,
    overflow: "hidden",
  },
  inputinfoLayout: {
    height: 60,
    width: 328,
    borderWidth: 1,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  frameFlexBox: {
    width: 290,
    flexDirection: "row",
    alignItems: "center",
  },
  inputShadowBox2: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderColor: Color.colorGray_300,
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.neutralWhite,
  },
  iconLayout: {
    width: 22,
    height: 22,
  },
  numberTypo1: {
    height: 19,
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  numberLayout: {
    width: 289,
    color: Color.colorBlack,
    fontSize: FontSize.size_mid,
    height: 19,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
    textAlign: "left",
  },
  inputShadowBox1: {
    width: 292,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderColor: Color.colorGray_300,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  numberTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_mid,
    height: 19,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
  },
  inputShadowBox: {
    paddingHorizontal: Padding.p_8xs,
    width: 57,
    marginLeft: 5,
    paddingVertical: Padding.p_base,
    borderColor: Color.colorGray_300,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  numberClr: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
  },
  voiture1ShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    padding: Padding.p_mini,
    borderColor: Color.colorGray_200,
    borderRadius: Border.br_mini,
    marginTop: 10,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
  },
  buttonfirstShadowBox: {
    elevation: 14,
    shadowRadius: 14,
    shadowColor: "rgba(236, 95, 95, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    marginTop: 10,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  signTypo: {
    lineHeight: 24,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
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

  imageIcon: {
    width: 95,
    height: 95,
  },
  amineMeddouri: {
    fontSize: 20,
    lineHeight: 34,
    width: 229,
    textAlign: "center",
    color: Color.textColorContentTertiary,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    height: 33,
  },
  vectorIcon: {
    width: 12,
    height: 12,
  },
  text: {
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslategray_100,
    width: 49,
    marginLeft: 2,
    height: 20,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  vectorParent: {
    width: 90,
    height: 30,
    justifyContent: "center",
  },
  nom: {
    width: 231,
    height: 93,
    justifyContent: "center",
    alignItems: "center",
  },
  userprofile: {
    width: 340,
    paddingTop: Padding.p_xl,
    justifyContent: "center",
  },
  amineemailcon: {
    top: "31.67%",
    left: "5.52%",
    textAlign: "left",
    position: "absolute",
  },
  text1: {
    lineHeight: 24,
    color: Color.titleText,
    textAlign: "right",
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
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
    marginLeft: 28,
    width: 201,
    textAlign: "left",
  },
  input: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_lg,
    marginTop: 10,
    width: 328,
    borderColor: Color.colorSilver_100,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  inputinfo1: {
    marginTop: 10,
  },
  dateEtHeure: {
    display: "flex",
    width: 316,
    marginTop: 10,
    textAlign: "left",
    alignItems: "center",
  },
  mapPinIcon: {
    height: 22,
    overflow: "hidden",
  },
  number: {
    width: 138,
  },
  input1: {
    width: 201,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    borderColor: Color.colorGray_300,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  frame: {
    justifyContent: "center",
  },
  input3: {
    width: 201,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frame1: {
    marginTop: 10,
    justifyContent: "center",
  },
  dates: {
    padding: Padding.p_mini,
    borderColor: Color.colorGray_200,
    borderRadius: Border.br_mini,
    marginTop: 10,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
  },
  number5: {
    width: 227,
  },
  input5: {
    width: 284,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  number6: {
    marginTop: 10,
  },
  input6: {
    marginTop: 10,
  },
  number9: {
    width: 224,
  },
  input7: {
    width: 290,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  number10: {
    width: 60,
    textAlign: "left",
  },
  number11: {
    fontSize: FontSize.headingH2_size,
    width: 15,
    marginLeft: 5,
    height: 22,
    textAlign: "center",
  },
  input8: {
    marginLeft: 5,
  },
  number12: {
    width: 88,
    marginLeft: 5,
    textAlign: "right",
  },
  input9: {
    marginLeft: 5,
  },
  nmbrplaces: {
    width: 281,
    marginTop: 10,
    justifyContent: "center",
  },
  radioButtonUncheckedSvgrepoIcon: {
    height: 24,
  },
  input11: {
    marginTop: 10,
  },
  input12: {
    marginTop: 10,
  },
  input13: {
    marginTop: 10,
  },
  input14: {
    marginTop: 10,
  },
  number19: {
    width: 265,
    height: 143,
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  input15: {
    marginTop: 10,
  },
  moredetails: {
    justifyContent: "center",
  },
  signUp: {
    color: Color.colorRoyalblue_100,
  },
  buttonsecondary: {
    borderRadius: Border.br_3xs,
    borderColor: Color.colorRoyalblue_100,
    width: 318,
    height: 59,
    shadowRadius: 14,
    shadowColor: "rgba(236, 95, 95, 0.25)",
    borderWidth: 1,
    borderStyle: "solid",
  },
  signUp1: {
    color: Color.neutralWhite,
    width: 235,
  },
  buttonfirst: {
    backgroundColor: Color.colorRoyalblue_100,
    width: 317,
    height: 58,
    borderRadius: Border.br_mini,
    shadowRadius: 14,
    shadowColor: "rgba(236, 95, 95, 0.25)",
  },
  detailsframe: {
    height: 605,
    marginTop: 15,
  },
  main: {
    height: 735,
    paddingHorizontal: Padding.p_base,
    paddingBottom: Padding.p_3xs,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.neutralWhite,
  },
  search1: {
    color: Color.colorRoyalblue_100,
  },
  yourRides1: {
    color: Color.colorDarkgray_200,
  },
  yourRides: {
    padding: Padding.p_3xs,
  },
  profileIcon: {
    height: 22,
  },
  footersearch: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    flexDirection: "row",
    width: 375,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  details: {
    flex: 1,
    height: 834,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
});

export default Details;

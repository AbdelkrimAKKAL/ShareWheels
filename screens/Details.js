import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ContainerInput from "../components/ContainerInput";
import ButtonSecondary from "../components/ButtonSecondary";
import Buttonfirst from "../components/Buttonfirst";
import FooterSearch from "../components/FooterSearch";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Details = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.details}>
      <View style={styles.bar}>
        <View style={styles.rectangle} />
      </View>
      <View style={styles.main}>
        <View style={[styles.userprofile, styles.input4FlexBox]}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image1.png")}
          />
          <View style={styles.nom}>
            <Text style={styles.amineMeddouri}>Amine Meddouri</Text>
            <View style={[styles.vectorParent, styles.input4FlexBox]}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
              <Text style={styles.text}>4.7 (1)</Text>
            </View>
          </View>
        </View>
        <View style={styles.detailsframe}>
          <View style={styles.inputinfoLayout}>
            <Text style={[styles.amineemailcon, styles.maleTypo]}>
              Amine@email.con
            </Text>
          </View>
          <ContainerInput
            productCode={require("../assets/flagforflagalgeria-svgrepocom.png")}
          />
          <View style={[styles.inputinfo1, styles.inputinfoLayout]}>
            <Text style={[styles.male, styles.maleTypo]}>Male</Text>
          </View>
          <Text style={[styles.dateEtHeure, styles.maleTypo]}>
            Date et heure
          </Text>
          <View style={styles.dates}>
            <View style={[styles.frame, styles.frameFlexBox]}>
              <View style={[styles.input, styles.inputShadowBox2]}>
                <Image
                  style={styles.mapPinIcon}
                  contentFit="cover"
                  source={require("../assets/mappin.png")}
                />
                <Text style={[styles.number, styles.numberTypo1]}>Date</Text>
              </View>
              <View style={styles.inputSpaceBlock}>
                <Image
                  style={styles.clock3Icon}
                  contentFit="cover"
                  source={require("../assets/clock3.png")}
                />
                <Text style={[styles.number1, styles.numberTypo1]}>Heure</Text>
              </View>
            </View>
            <View style={[styles.frame1, styles.frameFlexBox]}>
              <View style={[styles.input2, styles.inputShadowBox2]}>
                <Image
                  style={styles.mapPinIcon}
                  contentFit="cover"
                  source={require("../assets/mappin.png")}
                />
                <Text style={[styles.number, styles.numberTypo1]}>Date</Text>
              </View>
              <View style={styles.inputSpaceBlock}>
                <Image
                  style={styles.clock3Icon}
                  contentFit="cover"
                  source={require("../assets/clock3.png")}
                />
                <Text style={[styles.number1, styles.numberTypo1]}>Heure</Text>
              </View>
            </View>
          </View>
          <Text style={[styles.dateEtHeure, styles.maleTypo]}>Voiture</Text>
          <View style={styles.voiture1ShadowBox}>
            <Text style={styles.numberLayout}>Model</Text>
            <View style={[styles.input4, styles.inputShadowBox2]}>
              <Text style={[styles.number5, styles.numberTypo1]}>Model</Text>
            </View>
            <Text style={[styles.number6, styles.numberLayout]}>Matricule</Text>
            <View style={[styles.input5, styles.inputShadowBox1]}>
              <Text style={[styles.number5, styles.numberTypo1]}>
                Matricule
              </Text>
            </View>
            <Text style={[styles.number6, styles.numberLayout]}>Couleur</Text>
            <View style={[styles.frame1, styles.frameFlexBox]}>
              <View style={[styles.input6, styles.inputShadowBox2]}>
                <Text style={[styles.number9, styles.numberTypo1]}>
                  Couleur
                </Text>
              </View>
            </View>
            <View style={[styles.nmbrplaces, styles.input4FlexBox]}>
              <Text style={[styles.number10, styles.numberTypo]}>Places</Text>
              <View style={[styles.input7, styles.inputShadowBox]}>
                <Image
                  style={styles.mapPinIcon}
                  contentFit="cover"
                  source={require("../assets/clock31.png")}
                />
                <Text style={[styles.number11, styles.numberClr]}>1</Text>
              </View>
              <Text style={[styles.number12, styles.numberTypo]}>
                Disponible
              </Text>
              <View style={[styles.input8, styles.inputShadowBox]}>
                <Image
                  style={styles.mapPinIcon}
                  contentFit="cover"
                  source={require("../assets/clock31.png")}
                />
                <Text style={[styles.number11, styles.numberClr]}>1</Text>
              </View>
            </View>
          </View>
          <Text style={[styles.dateEtHeure, styles.maleTypo]}>
            Plus de details
          </Text>
          <View style={[styles.moredetails, styles.voiture1ShadowBox]}>
            <View style={styles.inputShadowBox1}>
              <Image
                style={styles.radioButtonUncheckedSvgrepoIcon}
                contentFit="cover"
                source={require("../assets/radiobuttonunchecked-svgrepocom.png")}
              />
              <Text style={[styles.number5, styles.numberTypo1]}>Fumeurs</Text>
            </View>
            <View style={[styles.input10, styles.inputShadowBox1]}>
              <Image
                style={styles.radioButtonUncheckedSvgrepoIcon}
                contentFit="cover"
                source={require("../assets/radiobuttonunchecked-svgrepocom.png")}
              />
              <Text style={[styles.number5, styles.numberTypo1]}>Bagages</Text>
            </View>
            <View style={[styles.input11, styles.inputShadowBox1]}>
              <Image
                style={styles.radioButtonUncheckedSvgrepoIcon}
                contentFit="cover"
                source={require("../assets/radiobuttonunchecked-svgrepocom.png")}
              />
              <Text style={[styles.number5, styles.numberTypo1]}>
                Ouvert à la conversation
              </Text>
            </View>
            <View style={[styles.input12, styles.inputShadowBox1]}>
              <Image
                style={styles.radioButtonUncheckedSvgrepoIcon}
                contentFit="cover"
                source={require("../assets/radiobuttonunchecked-svgrepocom.png")}
              />
              <Text style={[styles.number5, styles.numberTypo1]}>
                Passagers de différents sexes
              </Text>
            </View>
            <View style={[styles.input13, styles.inputShadowBox1]}>
              <Image
                style={styles.radioButtonUncheckedSvgrepoIcon}
                contentFit="cover"
                source={require("../assets/radiobuttonunchecked-svgrepocom.png")}
              />
              <Text style={[styles.number5, styles.numberTypo1]}>
                Arrêts supplémentaires
              </Text>
            </View>
            <View style={[styles.input14, styles.inputShadowBox2]}>
              <Text style={[styles.number19, styles.numberClr]}>A ajouter</Text>
            </View>
          </View>
          <ButtonSecondary
            signUp="Afficher Map"
            buttonSecondaryPosition="unset"
            buttonSecondaryMarginTop={10}
          />
          <Buttonfirst
            signUp="Participer"
            buttonfirstPosition="unset"
            buttonfirstMarginTop={10}
          />
        </View>
      </View>
      <FooterSearch
        dimensionCode={require("../assets/search1.png")}
        dimensionCodeText={require("../assets/format-list-bulleted.png")}
        dimensionCodeIdentifier={require("../assets/add-circle-outline.png")}
        dimensionCodeIdentifierTe={require("../assets/sharecircle-svgrepocom1.png")}
        dimensionCodeIdentifierTe2={require("../assets/profile1.png")}
        propColor="#0075fd"
        propColor1="#9d9fa0"
        propColor2="#9d9fa0"
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
  input4FlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  maleTypo: {
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
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
    borderColor: Color.colorGray_200,
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
    backgroundColor: Color.neutralWhite,
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
    borderColor: Color.colorGray_200,
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
    borderColor: Color.colorGray_200,
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
    borderColor: Color.colorGray_300,
    borderRadius: Border.br_mini,
    marginTop: 10,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
  },
  rectangle: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
  bar: {
    width: 375,
    height: 33,
    overflow: "hidden",
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
    color: Color.colorLightgray,
    textAlign: "left",
    left: "5.52%",
    top: "31.67%",
    fontSize: FontSize.subheadLgSHLgMedium_size,
    position: "absolute",
  },
  male: {
    textAlign: "left",
    left: "5.52%",
    top: "31.67%",
    fontSize: FontSize.subheadLgSHLgMedium_size,
    position: "absolute",
    color: Color.textColorContentTertiary,
  },
  inputinfo1: {
    marginTop: 10,
  },
  dateEtHeure: {
    display: "flex",
    width: 316,
    marginTop: 10,
    textAlign: "left",
    color: Color.textColorContentTertiary,
    alignItems: "center",
  },
  mapPinIcon: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  number: {
    width: 138,
  },
  input: {
    width: 201,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderColor: Color.colorGray_200,
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
    borderColor: Color.colorGray_200,
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
  input2: {
    width: 201,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderColor: Color.colorGray_200,
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
  },
  frame1: {
    marginTop: 10,
    justifyContent: "center",
  },
  dates: {
    padding: Padding.p_mini,
    borderColor: Color.colorGray_300,
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
  input4: {
    width: 284,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderColor: Color.colorGray_200,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  number6: {
    marginTop: 10,
  },
  input5: {
    marginTop: 10,
  },
  number9: {
    width: 224,
  },
  input6: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderColor: Color.colorGray_200,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
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
  input7: {
    marginLeft: 5,
  },
  number12: {
    textAlign: "right",
    width: 88,
    marginLeft: 5,
  },
  input8: {
    marginLeft: 5,
  },
  nmbrplaces: {
    width: 281,
    marginTop: 10,
    justifyContent: "center",
  },
  radioButtonUncheckedSvgrepoIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  input10: {
    marginTop: 10,
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
  number19: {
    width: 265,
    height: 143,
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  input14: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderColor: Color.colorGray_200,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    marginTop: 10,
  },
  moredetails: {
    justifyContent: "center",
  },
  detailsframe: {
    height: 618,
    marginTop: 15,
    alignItems: "center",
  },
  main: {
    height: 733,
    paddingHorizontal: Padding.p_base,
    paddingBottom: Padding.p_3xs,
    alignItems: "center",
    overflow: "hidden",
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

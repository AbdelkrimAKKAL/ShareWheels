import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import CarPictureContainer from "../components/CarPictureContainer";
import FooterSearch from "../components/FooterSearch";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Recherche = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.recherche}>
      <View style={styles.bar}>
        <View style={styles.rectangle} />
      </View>
      <CarPictureContainer />
      <Text style={styles.sharewheels}>ShareWheels</Text>
      <View style={[styles.main, styles.mainFlexBox]}>
        <Text style={[styles.heading, styles.headingTypo]}>où vas-tu</Text>
        <View style={[styles.input, styles.inputShadowBox]}>
          <Image
            style={styles.mapPinIcon}
            contentFit="cover"
            source={require("../assets/mappin5.png")}
          />
          <Text style={[styles.number, styles.numberTypo]}>Depart</Text>
        </View>
        <View style={[styles.input1, styles.inputShadowBox]}>
          <Image
            style={styles.mapPinIcon}
            contentFit="cover"
            source={require("../assets/mappin5.png")}
          />
          <Text style={[styles.number, styles.numberTypo]}>Destination</Text>
        </View>
        <Text style={[styles.heading1, styles.headingTypo]}>Quand?</Text>
        <View style={[styles.quand, styles.quandFlexBox]}>
          <View style={[styles.input2, styles.inputShadowBox]}>
            <Image
              style={styles.mapPinIcon2}
              contentFit="cover"
              source={require("../assets/mappin6.png")}
            />
            <Text style={[styles.number2, styles.numberTypo]}>Date</Text>
          </View>
          <View style={[styles.input3, styles.quandFlexBox]}>
            <Image
              style={styles.clock3Icon}
              contentFit="cover"
              source={require("../assets/clock33.png")}
            />
            <Text style={[styles.number3, styles.numberTypo]}>Heure</Text>
          </View>
        </View>
        <View style={[styles.places, styles.mainFlexBox]}>
          <Text style={styles.headingTypo}>Combien Places ?</Text>
          <View style={styles.nmbrplaces}>
            <Text style={styles.heading3}>1</Text>
            <Image
              style={[styles.moinsIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/moins2.png")}
            />
            <Image
              style={[styles.plusIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/plus2.png")}
            />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.buttonfirst, styles.quandFlexBox]}
        onPress={() => navigation.navigate("ResultatRecherche")}
      >
        <Text style={styles.signUp}>Rechercher</Text>
      </Pressable>
      <FooterSearch
        dimensionCode={require("../assets/search1.png")}
        dimensionCodeText={require("../assets/format-list-bulleted.png")}
        dimensionCodeIdentifier={require("../assets/add-circle-outline.png")}
        dimensionCodeIdentifierTe={require("../assets/sharecircle-svgrepocom4.png")}
        dimensionCodeIdentifierTe2={require("../assets/profile1.png")}
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
  mainFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  headingTypo: {
    textAlign: "left",
    color: Color.gray1,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
    lineHeight: 25,
    fontSize: FontSize.headingH2_size,
  },
  inputShadowBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
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
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  numberTypo: {
    height: 19,
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  quandFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    width: 21,
    top: 0,
    height: 21,
    position: "absolute",
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
  sharewheels: {
    fontSize: 30,
    fontWeight: "800",
    fontFamily: FontFamily.nunitoExtraBold,
    color: Color.colorRoyalblue_100,
    width: 286,
    textAlign: "center",
  },
  heading: {
    width: 326,
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
    marginTop: 15,
    width: 292,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
  },
  input1: {
    marginTop: 15,
    width: 292,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
  },
  heading1: {
    width: 322,
    marginTop: 15,
  },
  mapPinIcon2: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  number2: {
    width: 123,
  },
  input2: {
    width: 184,
  },
  clock3Icon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  number3: {
    width: 59,
  },
  input3: {
    width: 99,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
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
    backgroundColor: Color.neutralWhite,
  },
  quand: {
    width: 291,
    marginTop: 15,
    justifyContent: "space-between",
  },
  heading3: {
    left: 47,
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorBlack,
    fontWeight: "500",
    top: 0,
    textAlign: "left",
    fontSize: FontSize.headingH2_size,
    position: "absolute",
  },
  moinsIcon: {
    left: 0,
  },
  plusIcon: {
    left: 88,
  },
  nmbrplaces: {
    width: 109,
    marginTop: 5,
    height: 21,
  },
  places: {
    marginTop: 15,
  },
  main: {
    height: 377,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
  },
  signUp: {
    fontSize: FontSize.subheadLgSHLgMedium_size,
    lineHeight: 24,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    color: Color.neutralWhite,
    width: 235,
    fontWeight: "500",
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
    justifyContent: "center",
  },
  recherche: {
    flex: 1,
    height: 834,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: Color.neutralWhite,
    overflow: "hidden",
  },
});

export default Recherche;

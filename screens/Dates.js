import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Dates = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.dates, styles.datesFlexBox]}>
      <View style={styles.bar}>
        <View style={styles.rectangle} />
      </View>
      <Text style={styles.dates1}>Dates</Text>
      <View style={styles.main}>
        <View style={styles.inputs}>
          <View style={styles.frameFlexBox}>
            <View style={styles.inputShadowBox}>
              <Image
                style={[styles.mapPinIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/mappin2.png")}
              />
              <Text style={[styles.number, styles.numberTypo]}>Date</Text>
            </View>
            <View style={styles.inputSpaceBlock}>
              <Image
                style={styles.clock3Icon}
                contentFit="cover"
                source={require("../assets/clock31.png")}
              />
              <Text style={[styles.number1, styles.numberTypo]}>Heure</Text>
            </View>
          </View>
          <View style={[styles.frame1, styles.frameFlexBox]}>
            <View style={styles.inputShadowBox}>
              <Image
                style={[styles.mapPinIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/mappin2.png")}
              />
              <Text style={[styles.number, styles.numberTypo]}>Date</Text>
            </View>
            <View style={styles.inputSpaceBlock}>
              <Image
                style={styles.clock3Icon}
                contentFit="cover"
                source={require("../assets/clock31.png")}
              />
              <Text style={[styles.number1, styles.numberTypo]}>Heure</Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.addCircleSvgrepocomIcon}
          contentFit="cover"
          source={require("../assets/addcircle-svgrepocom1.png")}
        />
        <View style={[styles.buttonfirst, styles.buttonfirstShadowBox]}>
          <Text style={styles.signUp}>Confirmer</Text>
        </View>
      </View>
      <View style={[styles.footerpublish, styles.buttonfirstShadowBox]}>
        <Pressable
          style={styles.searchLayout}
          onPress={() => navigation.navigate("Recherche")}
        >
          <Image
            style={styles.searchIcon}
            contentFit="cover"
            source={require("../assets/search1.png")}
          />
          <Text style={[styles.search1, styles.search1Typo]}>Search</Text>
        </Pressable>
        <Pressable
          style={[styles.yourRides, styles.searchLayout]}
          onPress={() => navigation.navigate("YourRides")}
        >
          <Image
            style={styles.searchIcon}
            contentFit="cover"
            source={require("../assets/format-list-bulleted.png")}
          />
          <Text style={[styles.search1, styles.search1Typo]}>Your rides</Text>
        </Pressable>
        <Pressable
          style={styles.searchLayout}
          onPress={() => navigation.navigate("AjouterAnnonce")}
        >
          <Image
            style={styles.searchIcon}
            contentFit="cover"
            source={require("../assets/add-circle-outline1.png")}
          />
          <Text style={[styles.publish1, styles.search1Typo]}>Publish</Text>
        </Pressable>
        <Pressable
          style={styles.searchLayout}
          onPress={() => navigation.navigate("CarpoolVenir")}
        >
          <Image
            style={styles.searchIcon}
            contentFit="cover"
            source={require("../assets/sharecircle-svgrepocom3.png")}
          />
          <Text style={[styles.search1, styles.search1Typo]}>Carpool</Text>
        </Pressable>
        <Pressable
          style={styles.searchLayout}
          onPress={() => navigation.navigate("MonProfil")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/profile.png")}
          />
          <Text style={[styles.search1, styles.search1Typo]}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  datesFlexBox: {
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
  },
  iconLayout: {
    height: 22,
    width: 22,
  },
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
  buttonfirstShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
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
  dates1: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslategray_100,
    width: 359,
    textAlign: "center",
  },
  mapPinIcon: {
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
    borderColor: Color.colorGray_300,
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
    justifyContent: "center",
  },
  main: {
    height: 678,
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
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
    width: 375,
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
  },
  dates: {
    flex: 1,
    height: 834,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default Dates;

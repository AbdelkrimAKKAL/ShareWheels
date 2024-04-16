import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";
import Annonce from "../components/Annonce";
import TopBar from "../components/TopBar";

const CarpoolVenir = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.carpoolvenir, styles.rectangleLayout]}>
      <TopBar/>
      <Text style={[styles.carpools, styles.carpoolsTypo]}>Carpools</Text>
      <View style={[styles.buttonsswitch, styles.trajetFlexBox]}>
        <View style={[styles.avenir, styles.avenirShadowBox]}>
          <Text style={[styles.aVenir, styles.passsTypo]}>A venir</Text>
        </View>
        <Pressable
          style={[styles.passes, styles.avenirShadowBox]}
          onPress={() => navigation.navigate("CarpoolPasses")}
        >
          <Text style={[styles.passs, styles.passsTypo]}> Passés</Text>
        </Pressable>
      </View>
      <View style={styles.main}>
        <Annonce
          name="Amine Meddouri" 
          rating="4.5(2)" 
          startLocation="Bejaia"
          endLocation="Alger"
          price="250 DA"
          vehicle="Toyota Corolla"
          time="6:30pm"
          date="25 DEC 23"
          availableSeats="3/4"
          btnText= 'Annuler'
          />

        <Annonce
          name="Amine Meddouri" 
          rating="4.5(2)" 
          startLocation="Bejaia"
          endLocation="Alger"
          price="250 DA"
          vehicle="Toyota Corolla"
          time="6:30pm"
          date="25 DEC 23"
          availableSeats="3/4"
          btnText= 'Annuler'
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
  carpoolsTypo: {
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  trajetFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  avenirShadowBox: {
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_18xl,
    width: 112,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(80, 85, 136, 0.1)",
    alignItems: "center",
  },
  passsTypo: {
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
  },
  algerTypo: {
    color: Color.colorSilver_200,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.nunitoRegular,
    left: 0,
    textAlign: "left",
    position: "absolute",
  },
  infoTypo: {
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkslategray_100,
  },
  infoTypo1: {
    width: 54,
    textAlign: "center",
    fontFamily: FontFamily.nunitoRegular,
  },
  buttonsFlexBox: {
    height: 35,
    flexDirection: "row",
    alignItems: "center",
  },
  search1Typo: {
    marginTop: 5,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 15,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
  },
  searchLayout: {
    height: 64,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },

  carpools: {
    fontSize: FontSize.size_5xl,
  },
  aVenir: {
    width: 52,
    color: Color.neutralWhite,
    fontSize: FontSize.size_mini,
    fontWeight: "800",
    textAlign: "left",
  },
  avenir: {
    backgroundColor: Color.colorRoyalblue_100,
  },
  passs: {
    width: 55,
    color: Color.colorRoyalblue_100,
    fontSize: FontSize.size_mini,
    fontWeight: "800",
    textAlign: "left",
    
  },
  passes: {
    marginLeft: 8,
    backgroundColor: Color.neutralWhite,
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_18xl,
    width: 112,
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 0.9,
    borderRadius:Border.br_3xs ,
  },
  buttonsswitch: {
    width: 343,
    justifyContent: "center",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(80, 85, 136, 0.1)",
    flexDirection: "row",
  },
  profilepictureIcon: {
    top: 3,
    borderRadius: Border.br_9980xl,
    width: 41,
    height: 41,
    left: 0,
    position: "absolute",
  },
  amineMeddouri: {
    fontSize: FontSize.size_xs,
    width: 116,
  },
  vectorIcon: {
    width: 8,
    height: 8,
  },
  text: {
    width: 31,
    height: 11,
    marginLeft: 2,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  vectorParent: {
    width: 62,
    marginTop: 6,
  },
  infosprofil: {
    left: 51,
    width: 116,
    top: 0,
    height: 46,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    position: "absolute",
  },
  groupIcon: {
    width: 10,
    height: 30,
  },
  bejaia: {
    width: 130,
    top: 0,
  },
  alger: {
    top: 20,
    width: 119,
  },
  bejaiaParent: {
    marginLeft: 4,
    height: 32,
    width: 130,
  },
  trajet: {
    left: 174,
    width: 144,
    top: 0,
    height: 46,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    position: "absolute",
  },
  infos: {
    height: 46,
    width: 318,
  },
  titre: {
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_100,
  },
  text1: {
    color: Color.colorTomato,
    fontSize: FontSize.size_xs,
  },
  prix: {
    width: 47,
    height: 32,
    justifyContent: "space-between",
    alignItems: "center",
  },
  info1: {
    width: 108,
    textAlign: "center",
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_2xs,
  },
  vehicule: {
    width: 65,
    height: 32,
    justifyContent: "space-between",
    alignItems: "center",
  },
  info2: {
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_100,
  },
  info3: {
    width: 64,
    textAlign: "center",
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_2xs,
  },
  date: {
    width: 58,
    height: 32,
    justifyContent: "space-between",
    alignItems: "center",
  },
  date1: {
    width: 37,
    height: 32,
    justifyContent: "space-between",
    alignItems: "center",
  },
  infostrajet: {
    width: 318,
    borderRadius: Border.br_mini,
    justifyContent: "space-between",
  },
  supprimer: {
    fontSize: FontSize.size_sm,
    width: 73,
    height: 19,
    textAlign: "center",
    color: Color.neutralWhite,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  participer: {
    left: 205,
    backgroundColor: Color.colorTomato,
    width: 105,
    paddingHorizontal: Padding.p_8xl,
    paddingVertical: Padding.p_5xs,
    zIndex: 0,
    top: 0,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    position: "absolute",
  },
  buttons: {
    width: 310,
    justifyContent: "flex-end",
    padding: Padding.p_3xs,
  },
  mesannonces: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_2xs,
    height: 187,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    elevation: 20,
    shadowRadius: 20,
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  mesannoncesShadowBox: {
    marginTop: 8,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_2xs,
    height: 187,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  main: {
    height: 614,
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
  carpool1: {
    color: Color.colorRoyalblue_100,
  },
  profileIcon: {
    width: 22,
    height: 22,
  },
  footercarpool: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    elevation: 20,
    shadowRadius: 20,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    width: 375,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  carpoolvenir: {
    flex: 1,
    height: 834,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default CarpoolVenir;

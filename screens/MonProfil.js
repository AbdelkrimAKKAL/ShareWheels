import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";
import TopBar from "../components/TopBar";
export const me = {
  name: '',
  bdate: Date,
  phone: 1133333,
  email: 'jimmy@gmail.com',
  stars: 4.7,
  avis: 2,
  password: 'dzdzdzdz',
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  setname: function (nom) {
    this.name = nom;
  },
  setemail: function (x) {
    this.email = x;
  },
  setpassword: function (x, old) {
    if  ((x.length >= 8) && (old === this.password || this.password==='')) {
      this.password = x;
    };
  },
  setphone: function (x) {
    if (x > 500000000 && x < 800000000) {
      this.phone = x;
    };
  },
};
me.setname('jimmy');

const mycars = {
  coulor: 'Gris',
  id: '0117110606',
  model: 'Hyundai Atos'
}

const MonProfil = () => {
  const navigation = useNavigation();
  me.greet();
  return (

    <View style={styles.monprofil}>
      <TopBar />
      <View style={styles.main}>
        <Text >Mon Profile</Text>
        <View style={[styles.userprofile, styles.inputsFlexBox]}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image1.png")}
          />
          <View style={[styles.nom, styles.nomFlexBox]}>
            <Text style={[styles.amineMeddouri, styles.titleTypo]}>
              {me.name}
            </Text>
            <View style={[styles.vectorParent, styles.nomFlexBox]}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector3.png")}
              />
              <Text style={styles.text}>{me.stars + ' (' + me.avis + ')'} </Text>
            </View>
          </View>
        </View>
        <View style={[styles.inputs, styles.inputsFlexBox]}>
          <View style={[styles.inputinfo, styles.inputLayout1]}>
            <Text style={[styles.amineemailcon, styles.numeroFlexBox]}>
              {me.email}
            </Text>
          </View>
          <View style={[styles.input, styles.inputLayout]}>
            <View style={styles.parent}>
              <Text style={[styles.text1, styles.text1Typo]}>+213</Text>
              <Image
                style={[
                  styles.flagForFlagAlgeriaSvgrepoIcon,
                  styles.iconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/flagforflagalgeria-svgrepocom1.png")}
              />
            </View>
            <Text style={[styles.numero, styles.numeroFlexBox]}>
              {me.phone}
            </Text>
          </View>
          <View style={[styles.inputinfo1, styles.inputLayout]}>
            <Text style={[styles.voitures, styles.text1Typo]}>Voitures</Text>
            <Image
              style={styles.downArrowIcon}
              contentFit="cover"
              source={require("../assets/down-arrow.png")}
            />
          </View>

        </View>
        <TouchableOpacity
          style={[styles.buttonfirst, styles.buttonfirstShadowBox]}
          onPress={() => navigation.navigate("Modifier")}
        >
          <Text style={[styles.signUp, styles.signTypo]}>Modifier</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonsecondary, styles.buttonsecondaryShadowBox]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={[styles.signUp1, styles.signTypo]}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonsecondary1, styles.buttonsecondaryShadowBox]}
        >
          <Text style={[styles.signUp2, styles.signTypo]}>Supprimer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text1Position: {
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  nomFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputsFlexBox: {
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  titleTypo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  inputLayout1: {
    height: 60,
    borderColor: Color.colorSilver_100,
  },
  numeroFlexBox: {
    textAlign: "left",
    lineHeight: 23,
  },
  inputLayout: {
    marginTop: 10,
    width: 328,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  text1Typo: {
    color: Color.titleText,
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
  signTypo: {
    lineHeight: 24,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  buttonsecondaryShadowBox: {
    height: 59,
    width: 318,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: Color.neutralWhite,
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center",
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
    backgroundColor: Color.neutralWhite,
    alignItems: "center",
  },

  title: {
    fontSize: FontSize.headingH2_size,
    lineHeight: 25,
    color: Color.textColorContentPrimary,
    height: 25,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    width: 375,
  },
  imageIcon: {
    width: 95,
    height: 95,
  },
  amineMeddouri: {
    fontSize: 23,
    lineHeight: 34,
    color: Color.textColorContentTertiary,
    width: 229,
    textAlign: "center",
    height: 33,
  },
  vectorIcon: {
    width: 12,
    height: 12,
  },
  text: {
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslategray_100,
    width: 55,
    height: 20,
    marginLeft: 2,
    textAlign: "center",
  },
  vectorParent: {
    width: 90,
    height: 30,
    flexDirection: "row",
  },
  nom: {
    width: 231,
    height: 93,
  },
  userprofile: {
    width: 340,
    height: "15%",
    flexDirection: "row",
    paddingTop: Padding.p_xl,
  },
  amineemailcon: {
    height: "38.33%",
    width: "88.41%",
    top: "32.17%",
    left: "5.64%",
    color: Color.colorDarkgray_100,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    textAlign: "left",
    lineHeight: 23,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    display: "flex",
    position: "absolute",
    alignItems: "center",
  },
  inputinfo: {
    width: 328,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 60,
    borderColor: Color.colorSilver_100,
  },
  text1: {
    lineHeight: 24,
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
    color: Color.colorDarkgray_100,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    textAlign: "left",
    lineHeight: 23,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  input: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_lg,
    height: 60,
    borderColor: Color.colorSilver_100,
    marginTop: 10,
    justifyContent: "center",
    overflow: "hidden",
  },
  voitures: {
    width: 262,
    height: 23,
    textAlign: "left",
    lineHeight: 23,
    color: Color.titleText,
    display: "flex",
    alignItems: "center",
  },
  downArrowIcon: {
    width: 22,
    height: 24,
  },
  inputinfo1: {
    borderColor: Color.titleText,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_mid,
    justifyContent: "space-between",
  },
  detailsAAjouter: {
    width: 285,
    height: 23,
    textAlign: "left",
    lineHeight: 23,
    color: Color.titleText,
    display: "flex",
    alignItems: "center",
  },
  inputs: {
    height: 333,
  },
  signUp: {
    color: Color.neutralWhite,
    width: 235,
  },
  buttonfirst: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorRoyalblue_100,
    width: 317,
    height: 58,
    elevation: 14,
    shadowRadius: 14,
    shadowColor: "rgba(236, 95, 95, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    marginTop: 5,
    justifyContent: "center",
  },
  signUp1: {
    color: Color.colorRoyalblue_100,
  },
  buttonsecondary: {
    borderColor: Color.colorRoyalblue_100,
  },
  signUp2: {
    color: Color.colorTomato,
  },
  buttonsecondary1: {
    borderColor: Color.colorTomato,
  },
  main: {
    paddingBottom: 24,
    paddingTop: Padding.p_xl,
    backgroundColor: Color.neutralWhite,
    width: 375,
    alignItems: "center",
    overflow: "hidden",
    justifyContent: "space-between",
    flex: 1,
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
    height: 22,
    width: 22,
  },
  profile1: {
    color: Color.colorRoyalblue_100,
  },
  footerprofile: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    backgroundColor: Color.neutralWhite,
    width: 375,
    justifyContent: "space-between",
  },
  monprofil: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default MonProfil;

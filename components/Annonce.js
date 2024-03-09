import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const Annonce = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.annonce, styles.dateFlexBox]}>
      <View style={styles.infos}>
        <Image
          style={styles.profilepictureIcon}
          contentFit="cover"
          source={require("../assets/profilepicture1.png")}
        />
        <View style={[styles.infosprofil, styles.trajetPosition]}>
          <Text style={[styles.amineMeddouri, styles.textTypo]}>
            Amine Meddouri
          </Text>
          <View style={[styles.vectorParent, styles.trajetFlexBox]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector4.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>4.7(1)</Text>
          </View>
        </View>
        <View style={[styles.trajet, styles.trajetFlexBox]}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group2.png")}
          />
          <View style={styles.bejaiaParent}>
            <Text style={[styles.bejaia, styles.algerTypo]}>Bejaia</Text>
            <Text style={[styles.alger, styles.algerTypo]}>Alger</Text>
          </View>
        </View>
      </View>
      <View style={[styles.infostrajet, styles.trajetFlexBox]}>
        <View style={[styles.prix, styles.dateFlexBox]}>
          <Text style={[styles.titre, styles.titreClr]}>Prix</Text>
          <Text style={styles.infoTypo1}>
            <Text style={styles.infoTypo}>200 DA</Text>
            <Text style={styles.text1}>{` `}</Text>
          </Text>
        </View>
        <View style={[styles.vehicule, styles.dateFlexBox]}>
          <Text style={[styles.titre, styles.titreClr]}>Véhicule</Text>
          <Text style={[styles.info1, styles.infoTypo]}>Suzuki Alto</Text>
        </View>
        <View style={[styles.prix, styles.dateFlexBox]}>
          <Text style={[styles.titre, styles.titreClr]}>Heure</Text>
          <Text style={[styles.info2, styles.infoTypo1]}>{`5:20pm `}</Text>
        </View>
        <View style={[styles.date, styles.dateFlexBox]}>
          <Text style={[styles.titre, styles.titreClr]}>Date</Text>
          <Text style={[styles.info3, styles.infoTypo]}>22 DEC 23</Text>
        </View>
        <View style={[styles.date1, styles.dateFlexBox]}>
          <Text style={[styles.titre, styles.titreClr]}>Places</Text>
          <Text style={[styles.info3, styles.infoTypo]}>2/6</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <Pressable
          style={[styles.details, styles.detailsFlexBox]}
          onPress={() => navigation.navigate("Details")}
        >
          <Text style={[styles.details1, styles.details1Typo]}>Details</Text>
        </Pressable>
        <View style={[styles.participer, styles.detailsFlexBox]}>
          <Text style={[styles.participer1, styles.details1Typo]}>
            Participer
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  trajetPosition: {
    justifyContent: "center",
    top: 0,
    position: "absolute",
    height: 46,
    borderRadius: Border.br_mini,
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    color: Color.colorDarkslategray_100,
  },
  trajetFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  algerTypo: {
    color: Color.colorSilver_200,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  titreClr: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_xs,
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
  detailsFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_8xl,
    height: 35,
    flexDirection: "row",
    justifyContent: "center",
    top: 0,
    position: "absolute",
    alignItems: "center",
    borderRadius: Border.br_mini,
  },
  details1Typo: {
    height: 19,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
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
    fontSize: FontSize.size_3xs,
    width: 31,
    height: 11,
    marginLeft: 2,
  },
  vectorParent: {
    width: 62,
    marginTop: 6,
  },
  infosprofil: {
    left: 51,
    width: 116,
  },
  groupIcon: {
    width: 10,
    height: 30,
  },
  bejaia: {
    width: 130,
    top: 0,
    fontSize: FontSize.size_4xs,
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
    justifyContent: "center",
    top: 0,
    position: "absolute",
    height: 46,
    borderRadius: Border.br_mini,
  },
  infos: {
    height: 46,
    width: 318,
  },
  titre: {
    fontWeight: "800",
    fontFamily: FontFamily.nunitoExtraBold,
    textAlign: "center",
  },
  text1: {
    color: Color.colorTomato,
    fontSize: FontSize.size_xs,
  },
  prix: {
    width: 47,
    height: 32,
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
  },
  info2: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_xs,
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
  },
  date1: {
    width: 37,
    height: 32,
  },
  infostrajet: {
    width: 318,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: Border.br_mini,
  },
  details1: {
    color: Color.colorRoyalblue_100,
    width: 50,
  },
  details: {
    left: 106,
    backgroundColor: Color.colorGainsboro_100,
    width: 90,
    zIndex: 0,
  },
  participer1: {
    color: Color.neutralWhite,
    width: 65,
  },
  participer: {
    left: 203,
    backgroundColor: Color.colorRoyalblue_100,
    width: 107,
    zIndex: 1,
  },
  buttons: {
    width: 310,
    justifyContent: "flex-end",
    padding: Padding.p_3xs,
    height: 35,
    flexDirection: "row",
    alignItems: "center",
  },
  annonce: {
    backgroundColor: Color.neutralWhite,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 187,
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_sm,
    borderRadius: Border.br_mini,
    alignItems: "center",
  },
});

export default Annonce;

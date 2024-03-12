import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const MesAnnonces = (Props) => {
  return (
    <View style={[styles.mesannonces, styles.dateFlexBox]}>
      <View style={styles.infos}>
        <Image
          style={styles.profilepictureIcon}
          contentFit="cover"
          source={require("../assets/profilepicture1.png")}
        />
        <View style={[styles.infosprofil, styles.trajetPosition]}>
          <Text style={[styles.amineMeddouri, styles.textTypo]}>
            {Props.name}
          </Text>
          <View style={[styles.vectorParent, styles.trajetFlexBox]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector4.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>{Props.rating}</Text>
          </View>
        </View>
        <View style={[styles.trajet, styles.trajetFlexBox]}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group2.png")}
          />
          <View style={styles.bejaiaParent}>
            <Text style={[styles.bejaia, styles.algerTypo]}>{Props.startLocation}</Text>
            <Text style={[styles.alger, styles.algerTypo]}>{Props.endLocation}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.infostrajet, styles.trajetFlexBox]}>
        <View style={[styles.prix, styles.dateFlexBox]}>
          <Text style={[styles.titre, styles.titreClr]}>Prix</Text>
          <Text style={styles.infoTypo1}>
            <Text style={styles.infoTypo}>{Props.price}</Text>
            <Text style={styles.text1}>{` `}</Text>
          </Text>
        </View>
        <View style={[styles.vehicule, styles.dateFlexBox]}>
          <Text style={[styles.titre, styles.titreClr]}>Véhicule</Text>
          <Text style={[styles.info1, styles.infoTypo]}>{Props.vehicle}</Text>
        </View>
        <View style={[styles.prix, styles.dateFlexBox]}>
          <Text style={[styles.titre, styles.titreClr]}>Heure</Text>
          <Text style={[styles.info2, styles.infoTypo1]}>{Props.time}</Text>
        </View>
        <View style={[styles.date, styles.dateFlexBox]}>
          <Text style={[styles.titre, styles.titreClr]}>Date</Text>
          <Text style={[styles.info3, styles.infoTypo]}>{Props.date}</Text>
        </View>
        <View style={[styles.date1, styles.dateFlexBox]}>
          <Text style={[styles.titre, styles.titreClr]}>Places</Text>
          <Text style={[styles.info3, styles.infoTypo]}>{Props.availableSeats}</Text>
        </View>
      </View>
      <View style={[styles.buttons, styles.buttonsFlexBox]}>
        <View style={[styles.participer, styles.buttonsFlexBox]}>
          <Text style={styles.supprimer}>{Props.btnText}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateFlexBox: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  trajetPosition: {
    justifyContent: "center",
    top: 0,
    position: "absolute",
    borderRadius: Border.br_mini,
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
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
  buttonsFlexBox: {
    height: 35,
    flexDirection: "row",
    alignItems: "center",
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
    height: 46,
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
    borderRadius: Border.br_mini,
    height: 46,
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
    justifyContent: "space-between",
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
    justifyContent: "space-between",
  },
  date1: {
    width: 37,
    height: 32,
    justifyContent: "space-between",
  },
  infostrajet: {
    width: 318,
    justifyContent: "space-between",
    borderRadius: Border.br_mini,
  },
  supprimer: {
    fontSize: FontSize.size_sm,
    color: Color.neutralWhite,
    width: 73,
    height: 19,
    textAlign: "center",
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
    justifyContent: "center",
    top: 0,
    position: "absolute",
    borderRadius: Border.br_mini,
  },
  buttons: {
    width: 310,
    justifyContent: "flex-end",
    padding: Padding.p_3xs,
  },
  mesannonces: {
    marginBottom: 10,
    backgroundColor: Color.neutralWhite,
    shadowColor: "rgba(0, 0, 0, 0.2)",
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
    justifyContent: "space-between",
    borderRadius: Border.br_mini,
  },
});

export default MesAnnonces;

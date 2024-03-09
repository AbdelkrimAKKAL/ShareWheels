import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";
import FooterYourRides from "../components/FooterYourRides";

const YourRides = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yourrides}>
      <View style={styles.bar}>
        <View style={styles.rectangle} />
      </View>
      <Text style={[styles.yourRides, styles.yourRidesTypo]}>Your Rides</Text>
      <View style={styles.main}>
        <View style={styles.mesannonces}>
          <View style={styles.infos}>
            <Image
              style={styles.profilepictureIcon}
              contentFit="cover"
              source={require("../assets/profilepicture.png")}
            />
            <View style={[styles.infosprofil, styles.trajetPosition]}>
              <Text style={[styles.amineMeddouri, styles.yourRidesTypo]}>
                Amine Meddouri
              </Text>
              <View style={[styles.vectorParent, styles.trajetFlexBox]}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector1.png")}
                />
                <Text style={styles.text}>4.7(1)</Text>
              </View>
            </View>
            <View style={[styles.trajet, styles.trajetFlexBox]}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group.png")}
              />
              <View style={styles.bejaiaParent}>
                <Text style={[styles.bejaia, styles.algerTypo]}>Bejaia</Text>
                <Text style={[styles.alger, styles.algerTypo]}>Alger</Text>
              </View>
            </View>
          </View>
          <View style={[styles.infostrajet, styles.trajetFlexBox]}>
            <View style={styles.prix}>
              <Text style={[styles.titre, styles.titreClr]}>Prix</Text>
              <Text style={styles.infoTypo1}>
                <Text style={styles.infoTypo}>200 DA</Text>
                <Text style={styles.text1}>{` `}</Text>
              </Text>
            </View>
            <View style={styles.vehicule}>
              <Text style={[styles.titre, styles.titreClr]}>Véhicule</Text>
              <Text
                style={[styles.info1, styles.infoTypo]}
              >{`Suzuki Alto `}</Text>
            </View>
            <View style={styles.prix}>
              <Text style={[styles.titre, styles.titreClr]}>Heure</Text>
              <Text style={[styles.info2, styles.infoTypo1]}>{`5:20pm `}</Text>
            </View>
            <View style={styles.date}>
              <Text style={[styles.titre, styles.titreClr]}>Date</Text>
              <Text style={[styles.info3, styles.infoTypo]}>22 DEC 23</Text>
            </View>
            <View style={styles.date1}>
              <Text style={[styles.titre, styles.titreClr]}>Places</Text>
              <Text style={[styles.info3, styles.infoTypo]}>2/6</Text>
            </View>
          </View>
          <View style={[styles.buttons, styles.buttonsFlexBox]}>
            <View style={[styles.participer, styles.buttonsFlexBox]}>
              <Text style={styles.supprimer}>Supprimer</Text>
            </View>
          </View>
        </View>
        <View style={styles.mesannoncesShadowBox}>
          <View style={styles.infos}>
            <Image
              style={styles.profilepictureIcon}
              contentFit="cover"
              source={require("../assets/profilepicture.png")}
            />
            <View style={[styles.infosprofil, styles.trajetPosition]}>
              <Text style={[styles.amineMeddouri, styles.yourRidesTypo]}>
                Amine Meddouri
              </Text>
              <View style={[styles.vectorParent, styles.trajetFlexBox]}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector1.png")}
                />
                <Text style={styles.text}>4.7(1)</Text>
              </View>
            </View>
            <View style={[styles.trajet, styles.trajetFlexBox]}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group.png")}
              />
              <View style={styles.bejaiaParent}>
                <Text style={[styles.bejaia, styles.algerTypo]}>Bejaia</Text>
                <Text style={[styles.alger, styles.algerTypo]}>Alger</Text>
              </View>
            </View>
          </View>
          <View style={[styles.infostrajet, styles.trajetFlexBox]}>
            <View style={styles.prix}>
              <Text style={[styles.titre, styles.titreClr]}>Prix</Text>
              <Text style={styles.infoTypo1}>
                <Text style={styles.infoTypo}>200 DA</Text>
                <Text style={styles.text1}>{` `}</Text>
              </Text>
            </View>
            <View style={styles.vehicule}>
              <Text style={[styles.titre, styles.titreClr]}>Véhicule</Text>
              <Text
                style={[styles.info1, styles.infoTypo]}
              >{`Suzuki Alto `}</Text>
            </View>
            <View style={styles.prix}>
              <Text style={[styles.titre, styles.titreClr]}>Heure</Text>
              <Text style={[styles.info2, styles.infoTypo1]}>{`5:20pm `}</Text>
            </View>
            <View style={styles.date}>
              <Text style={[styles.titre, styles.titreClr]}>Date</Text>
              <Text style={[styles.info3, styles.infoTypo]}>22 DEC 23</Text>
            </View>
            <View style={styles.date1}>
              <Text style={[styles.titre, styles.titreClr]}>Places</Text>
              <Text style={[styles.info3, styles.infoTypo]}>2/6</Text>
            </View>
          </View>
          <View style={[styles.buttons, styles.buttonsFlexBox]}>
            <View style={[styles.participer, styles.buttonsFlexBox]}>
              <Text style={styles.supprimer}>Supprimer</Text>
            </View>
          </View>
        </View>
        <View style={styles.mesannoncesShadowBox}>
          <View style={styles.infos}>
            <Image
              style={styles.profilepictureIcon}
              contentFit="cover"
              source={require("../assets/profilepicture.png")}
            />
            <View style={[styles.infosprofil, styles.trajetPosition]}>
              <Text style={[styles.amineMeddouri, styles.yourRidesTypo]}>
                Amine Meddouri
              </Text>
              <View style={[styles.vectorParent, styles.trajetFlexBox]}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector1.png")}
                />
                <Text style={styles.text}>4.7(1)</Text>
              </View>
            </View>
            <View style={[styles.trajet, styles.trajetFlexBox]}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group.png")}
              />
              <View style={styles.bejaiaParent}>
                <Text style={[styles.bejaia, styles.algerTypo]}>Bejaia</Text>
                <Text style={[styles.alger, styles.algerTypo]}>Alger</Text>
              </View>
            </View>
          </View>
          <View style={[styles.infostrajet, styles.trajetFlexBox]}>
            <View style={styles.prix}>
              <Text style={[styles.titre, styles.titreClr]}>Prix</Text>
              <Text style={styles.infoTypo1}>
                <Text style={styles.infoTypo}>200 DA</Text>
                <Text style={styles.text1}>{` `}</Text>
              </Text>
            </View>
            <View style={styles.vehicule}>
              <Text style={[styles.titre, styles.titreClr]}>Véhicule</Text>
              <Text
                style={[styles.info1, styles.infoTypo]}
              >{`Suzuki Alto `}</Text>
            </View>
            <View style={styles.prix}>
              <Text style={[styles.titre, styles.titreClr]}>Heure</Text>
              <Text style={[styles.info2, styles.infoTypo1]}>{`5:20pm `}</Text>
            </View>
            <View style={styles.date}>
              <Text style={[styles.titre, styles.titreClr]}>Date</Text>
              <Text style={[styles.info3, styles.infoTypo]}>22 DEC 23</Text>
            </View>
            <View style={styles.date1}>
              <Text style={[styles.titre, styles.titreClr]}>Places</Text>
              <Text style={[styles.info3, styles.infoTypo]}>2/6</Text>
            </View>
          </View>
          <View style={[styles.buttons, styles.buttonsFlexBox]}>
            <View style={[styles.participer, styles.buttonsFlexBox]}>
              <Text style={styles.supprimer}>Supprimer</Text>
            </View>
          </View>
        </View>
      </View>
      <FooterYourRides/>
      </View>
  );
};

const styles = StyleSheet.create({
  yourRidesTypo: {
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  trajetPosition: {
    justifyContent: "center",
    top: 0,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  trajetFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  algerTypo: {
    color: Color.colorSilver_200,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.nunitoRegular,
    left: 0,
    textAlign: "left",
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
    height: 33,
    width: 375,
    overflow: "hidden",
  },
  yourRides: {
    fontSize: FontSize.size_5xl,
    height: 27,
    marginTop: 15,
    width: 119,
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
    borderRadius: Border.br_mini,
    position: "absolute",
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
    fontSize: FontSize.size_xs,
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
    justifyContent: "space-between",
    borderRadius: Border.br_mini,
    flexDirection: "row",
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
    borderRadius: Border.br_mini,
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
    justifyContent: "space-between",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: Border.br_mini,
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  mesannoncesShadowBox: {
    marginTop: 8,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_2xs,
    justifyContent: "space-between",
    height: 187,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: Border.br_mini,
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  main: {
    height: 718,
    marginTop: 15,
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
  yourRides2: {
    color: Color.colorRoyalblue_100,
  },
  yourRides1: {
    padding: Padding.p_3xs,
  },
  profileIcon: {
    width: 22,
    height: 22,
  },
  footeryourrides: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    justifyContent: "space-between",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    flexDirection: "row",
    marginTop: 15,
    width: 375,
    backgroundColor: Color.neutralWhite,
  },
  yourrides: {
    flex: 1,
    height: 834,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
});

export default YourRides;

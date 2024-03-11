import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const ResultatRecherche = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.resultatrecherche, styles.dateFlexBox]}>
      <View style={styles.bar}>
        <View style={[styles.rectangle, styles.rectangleLayout]} />
      </View>
      <View style={styles.headerTopActionBar}>
        <View style={[styles.frame, styles.frameFlexBox]}>
          <Text style={styles.heading}>Bejaia a Alger</Text>
          <Text style={styles.heading1}>31 DEC 23, 2 Places</Text>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.annonce}>
          <View style={styles.infos}>
            <Image
              style={styles.profilepictureIcon}
              contentFit="cover"
              source={require("../assets/profilepicture.png")}
            />
            <View style={styles.infosprofil}>
              <Text style={styles.amineMeddouri}>Amine Meddouri</Text>
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
              <Text style={[styles.details1, styles.details1Typo]}>
                Details
              </Text>
            </Pressable>
            <View style={[styles.participer, styles.detailsFlexBox]}>
              <Text style={[styles.participer1, styles.details1Typo]}>
                Participer
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.annonceShadowBox}>
          <View style={styles.infos}>
            <Image
              style={styles.profilepictureIcon}
              contentFit="cover"
              source={require("../assets/profilepicture.png")}
            />
            <View style={styles.infosprofil}>
              <Text style={styles.amineMeddouri}>Amine Meddouri</Text>
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
              <Text style={[styles.details1, styles.details1Typo]}>
                Details
              </Text>
            </Pressable>
            <View style={[styles.participer, styles.detailsFlexBox]}>
              <Text style={[styles.participer1, styles.details1Typo]}>
                Participer
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.annonceShadowBox}>
          <View style={styles.infos}>
            <Image
              style={styles.profilepictureIcon}
              contentFit="cover"
              source={require("../assets/profilepicture.png")}
            />
            <View style={styles.infosprofil}>
              <Text style={styles.amineMeddouri}>Amine Meddouri</Text>
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
              <Text style={[styles.details1, styles.details1Typo]}>
                Details
              </Text>
            </Pressable>
            <View style={[styles.participer, styles.detailsFlexBox]}>
              <Text style={[styles.participer1, styles.details1Typo]}>
                Participer
              </Text>
            </View>
          </View>
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
  rectangleLayout: {
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
  frameFlexBox: {
    justifyContent: "center",
    borderRadius: Border.br_mini,
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
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "center",
  },
  detailsFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_8xl,
    height: 35,
    flexDirection: "row",
    top: 0,
    justifyContent: "center",
    borderRadius: Border.br_mini,
    position: "absolute",
    alignItems: "center",
  },
  details1Typo: {
    height: 19,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    textAlign: "center",
  },
  search1Typo: {
    marginTop: 5,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
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
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  bar: {
    height: 33,
    width: 375,
    overflow: "hidden",
  },
  heading: {
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontWeight: "500",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    color: Color.neutralGray1,
    width: 325,
    height: 18,
    textAlign: "center",
  },
  heading1: {
    lineHeight: 18,
    color: "#8c8c8c",
    width: 200,
    marginTop: 10,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    height: 18,
    textAlign: "center",
  },
  frame: {
    borderStyle: "solid",
    borderColor: "rgba(0, 117, 253, 0.4)",
    borderWidth: 1,
    width: 300,
    height: 54,
    alignItems: "center",
  },
  headerTopActionBar: {
    width: 341,
    height: 89,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    justifyContent: "flex-end",
    borderRadius: Border.br_mini,
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
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    color: Color.colorDarkslategray_100,
    width: 116,
    fontSize: FontSize.size_xs,
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
    justifyContent: "center",
    borderRadius: Border.br_mini,
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
    justifyContent: "center",
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  infos: {
    height: 46,
    width: 318,
  },
  titre: {
    fontWeight: "800",
    fontFamily: FontFamily.nunitoExtraBold,
    textAlign: "center",
    color: Color.colorDarkslategray_100,
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
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
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
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
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
    borderRadius: Border.br_mini,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  details1: {
    width: 50,
    color: Color.colorRoyalblue_100,
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
    padding: Padding.p_3xs,
    height: 35,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  annonce: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_2xs,
    height: 187,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: Border.br_mini,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  annonceShadowBox: {
    marginTop: 15,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_2xs,
    height: 187,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_mini,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  main: {
    height: 648,
    paddingHorizontal: Padding.p_mini,
    paddingBottom: Padding.p_mini,
    width: 375,
    alignItems: "center",
  },
  searchIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
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
    width: 22,
    height: 22,
  },
  footersearch: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    flexDirection: "row",
    width: 375,
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
  },
  resultatrecherche: {
    flex: 1,
    height: 834,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
});

export default ResultatRecherche;

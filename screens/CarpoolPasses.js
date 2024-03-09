import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const CarpoolPasses = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.carpoolpasses, styles.rectangleLayout]}>
      <View style={styles.bar}>
        <View style={[styles.rectangle, styles.rectangleLayout]} />
      </View>
      <Text style={[styles.carpools, styles.carpoolsTypo]}>Carpools</Text>
      <View style={[styles.buttonsswitch, styles.rateFlexBox]}>
        <Pressable
          style={[styles.avenir, styles.avenirShadowBox]}
          onPress={() => navigation.navigate("CarpoolVenir")}
        >
          <Text style={[styles.aVenir, styles.passsTypo]}>A venir</Text>
        </Pressable>
        <View style={[styles.passes, styles.avenirShadowBox]}>
          <Text style={[styles.passs, styles.passsTypo]}> Passés</Text>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.evaluer}>
          <View style={styles.infos}>
            <Image
              style={styles.profilepictureIcon}
              contentFit="cover"
              source={require("../assets/profilepicture.png")}
            />
            <View style={styles.infosprofil}>
              <Text style={[styles.amineMeddouri, styles.carpoolsTypo]}>
                Amine Meddouri
              </Text>
              <View style={[styles.vectorParent, styles.rateFlexBox]}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector1.png")}
                />
                <Text style={styles.text}>4.7(1)</Text>
              </View>
            </View>
            <View style={[styles.trajet, styles.rateFlexBox]}>
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
          <View style={[styles.infostrajet, styles.rateFlexBox]}>
            <View style={styles.prix}>
              <Text style={[styles.titre, styles.passsTypo]}>Prix</Text>
              <Text style={styles.infoTypo1}>
                <Text style={styles.infoTypo}>200 DA</Text>
                <Text style={styles.text1}>{` `}</Text>
              </Text>
            </View>
            <View style={styles.vehicule}>
              <Text style={[styles.titre, styles.passsTypo]}>Véhicule</Text>
              <Text
                style={[styles.info1, styles.infoTypo]}
              >{`Suzuki Alto `}</Text>
            </View>
            <View style={styles.prix}>
              <Text style={[styles.titre, styles.passsTypo]}>Heure</Text>
              <Text style={[styles.info2, styles.infoTypo1]}>{`5:20pm `}</Text>
            </View>
            <View style={styles.date}>
              <Text style={[styles.titre, styles.passsTypo]}>Date</Text>
              <Text style={[styles.info3, styles.infoTypo]}>22 DEC 23</Text>
            </View>
            <View style={styles.date1}>
              <Text style={[styles.titre, styles.passsTypo]}>Places</Text>
              <Text style={[styles.info3, styles.infoTypo]}>2/6</Text>
            </View>
          </View>
          <View style={styles.buttons}>
            <View style={[styles.rate, styles.rateFlexBox]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/moins2.png")}
              />
              <Text style={styles.text2}>5</Text>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector2.png")}
              />
              <Image
                style={[styles.plusIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/plus2.png")}
              />
            </View>
            <View style={[styles.participer, styles.participerLayout]}>
              <Text style={[styles.supprimer, styles.signalerTypo]}>
                Evaluer
              </Text>
            </View>
            <Pressable
              style={[styles.participer1, styles.participerLayout]}
              onPress={() => navigation.navigate("Signaler")}
            >
              <Text style={[styles.signaler, styles.signalerTypo]}>
                Signaler
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.evaluerShadowBox}>
          <View style={styles.infos}>
            <Image
              style={styles.profilepictureIcon}
              contentFit="cover"
              source={require("../assets/profilepicture.png")}
            />
            <View style={styles.infosprofil}>
              <Text style={[styles.amineMeddouri, styles.carpoolsTypo]}>
                Amine Meddouri
              </Text>
              <View style={[styles.vectorParent, styles.rateFlexBox]}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector1.png")}
                />
                <Text style={styles.text}>4.7(1)</Text>
              </View>
            </View>
            <View style={[styles.trajet, styles.rateFlexBox]}>
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
          <View style={[styles.infostrajet, styles.rateFlexBox]}>
            <View style={styles.prix}>
              <Text style={[styles.titre, styles.passsTypo]}>Prix</Text>
              <Text style={styles.infoTypo1}>
                <Text style={styles.infoTypo}>200 DA</Text>
                <Text style={styles.text1}>{` `}</Text>
              </Text>
            </View>
            <View style={styles.vehicule}>
              <Text style={[styles.titre, styles.passsTypo]}>Véhicule</Text>
              <Text
                style={[styles.info1, styles.infoTypo]}
              >{`Suzuki Alto `}</Text>
            </View>
            <View style={styles.prix}>
              <Text style={[styles.titre, styles.passsTypo]}>Heure</Text>
              <Text style={[styles.info2, styles.infoTypo1]}>{`5:20pm `}</Text>
            </View>
            <View style={styles.date}>
              <Text style={[styles.titre, styles.passsTypo]}>Date</Text>
              <Text style={[styles.info3, styles.infoTypo]}>22 DEC 23</Text>
            </View>
            <View style={styles.date1}>
              <Text style={[styles.titre, styles.passsTypo]}>Places</Text>
              <Text style={[styles.info3, styles.infoTypo]}>2/6</Text>
            </View>
          </View>
          <View style={styles.buttons}>
            <View style={[styles.rate, styles.rateFlexBox]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/moins2.png")}
              />
              <Text style={styles.text2}>5</Text>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector2.png")}
              />
              <Image
                style={[styles.plusIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/plus2.png")}
              />
            </View>
            <View style={[styles.participer, styles.participerLayout]}>
              <Text style={[styles.supprimer, styles.signalerTypo]}>
                Evaluer
              </Text>
            </View>
            <Pressable
              style={[styles.participer1, styles.participerLayout]}
              onPress={() => navigation.navigate("Signaler")}
            >
              <Text style={[styles.signaler, styles.signalerTypo]}>
                Signaler
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.evaluerShadowBox}>
          <View style={styles.infos}>
            <Image
              style={styles.profilepictureIcon}
              contentFit="cover"
              source={require("../assets/profilepicture.png")}
            />
            <View style={styles.infosprofil}>
              <Text style={[styles.amineMeddouri, styles.carpoolsTypo]}>
                Amine Meddouri
              </Text>
              <View style={[styles.vectorParent, styles.rateFlexBox]}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector1.png")}
                />
                <Text style={styles.text}>4.7(1)</Text>
              </View>
            </View>
            <View style={[styles.trajet, styles.rateFlexBox]}>
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
          <View style={[styles.infostrajet, styles.rateFlexBox]}>
            <View style={styles.prix}>
              <Text style={[styles.titre, styles.passsTypo]}>Prix</Text>
              <Text style={styles.infoTypo1}>
                <Text style={styles.infoTypo}>200 DA</Text>
                <Text style={styles.text1}>{` `}</Text>
              </Text>
            </View>
            <View style={styles.vehicule}>
              <Text style={[styles.titre, styles.passsTypo]}>Véhicule</Text>
              <Text
                style={[styles.info1, styles.infoTypo]}
              >{`Suzuki Alto `}</Text>
            </View>
            <View style={styles.prix}>
              <Text style={[styles.titre, styles.passsTypo]}>Heure</Text>
              <Text style={[styles.info2, styles.infoTypo1]}>{`5:20pm `}</Text>
            </View>
            <View style={styles.date}>
              <Text style={[styles.titre, styles.passsTypo]}>Date</Text>
              <Text style={[styles.info3, styles.infoTypo]}>22 DEC 23</Text>
            </View>
            <View style={styles.date1}>
              <Text style={[styles.titre, styles.passsTypo]}>Places</Text>
              <Text style={[styles.info3, styles.infoTypo]}>2/6</Text>
            </View>
          </View>
          <View style={styles.buttons}>
            <View style={[styles.rate, styles.rateFlexBox]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/moins2.png")}
              />
              <Text style={styles.text2}>5</Text>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector2.png")}
              />
              <Image
                style={[styles.plusIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/plus2.png")}
              />
            </View>
            <View style={[styles.participer, styles.participerLayout]}>
              <Text style={[styles.supprimer, styles.signalerTypo]}>
                Evaluer
              </Text>
            </View>
            <Pressable
              style={[styles.participer1, styles.participerLayout]}
              onPress={() => navigation.navigate("Signaler")}
            >
              <Text style={[styles.signaler, styles.signalerTypo]}>
                Signaler
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.footercarpool}>
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
            source={require("../assets/add-circle-outline.png")}
          />
          <Text style={[styles.search1, styles.search1Typo]}>Publish</Text>
        </Pressable>
        <Pressable
          style={styles.searchLayout}
          onPress={() => navigation.navigate("CarpoolVenir")}
        >
          <Image
            style={styles.searchIcon}
            contentFit="cover"
            source={require("../assets/sharecircle-svgrepocom2.png")}
          />
          <Text style={[styles.carpool1, styles.search1Typo]}>Carpool</Text>
        </Pressable>
        <Pressable
          style={styles.searchLayout}
          onPress={() => navigation.navigate("MonProfil")}
        >
          <Image
            style={styles.profileIcon}
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
  rectangleLayout: {
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
  carpoolsTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorDarkslategray_100,
  },
  rateFlexBox: {
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
  iconLayout: {
    height: 21,
    width: 21,
  },
  participerLayout: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_8xl,
    width: 89,
    backgroundColor: Color.colorGainsboro_100,
    height: 35,
    top: 0,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
  },
  signalerTypo: {
    height: 19,
    width: 73,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
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
  },
  bar: {
    height: 33,
    width: 375,
    overflow: "hidden",
  },
  carpools: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
  },
  aVenir: {
    width: 52,
    color: Color.colorRoyalblue_100,
    fontSize: FontSize.size_mini,
    fontWeight: "800",
    textAlign: "left",
  },
  avenir: {
    backgroundColor: Color.neutralWhite,
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_18xl,
    width: 112,
    borderRadius: Border.br_3xs,
  },
  passs: {
    color: Color.neutralWhite,
    width: 55,
    fontSize: FontSize.size_mini,
    fontWeight: "800",
    textAlign: "left",
  },
  passes: {
    backgroundColor: Color.colorRoyalblue_100,
    marginLeft: 8,
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
    textAlign: "left",
    color: Color.colorDarkslategray_100,
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
  text2: {
    fontSize: FontSize.headingH2_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorBlack,
    width: 12,
    marginLeft: 10,
    textAlign: "left",
  },
  vectorIcon1: {
    width: 15,
    height: 15,
    marginLeft: 10,
  },
  plusIcon: {
    marginLeft: 10,
  },
  rate: {
    width: 99,
    zIndex: 0,
    justifyContent: "center",
  },
  supprimer: {
    color: Color.colorRoyalblue_100,
  },
  participer: {
    left: 230,
    zIndex: 1,
  },
  signaler: {
    color: Color.colorTomato,
  },
  participer1: {
    left: 131,
    zIndex: 2,
  },
  buttons: {
    width: 310,
    padding: Padding.p_3xs,
    height: 35,
    flexDirection: "row",
    alignItems: "center",
  },
  evaluer: {
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
  evaluerShadowBox: {
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
  carpoolpasses: {
    flex: 1,
    height: 834,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default CarpoolPasses;

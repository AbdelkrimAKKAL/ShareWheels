import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const Evaluer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.evaluer, styles.dateFlexBox]}>
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
          <View style={[styles.vectorParent, styles.rateFlexBox]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector4.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>4.7(1)</Text>
          </View>
        </View>
        <View style={[styles.trajet, styles.rateFlexBox]}>
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
      <View style={[styles.infostrajet, styles.rateFlexBox]}>
        <View style={[styles.prix, styles.dateFlexBox]}>
          <Text style={styles.titre}>Prix</Text>
          <Text style={styles.infoTypo1}>
            <Text style={styles.infoTypo}>200 DA</Text>
            <Text style={styles.text1}>{` `}</Text>
          </Text>
        </View>
        <View style={[styles.vehicule, styles.dateFlexBox]}>
          <Text style={styles.titre}>Véhicule</Text>
          <Text style={[styles.info1, styles.infoTypo]}>{`Suzuki Alto `}</Text>
        </View>
        <View style={[styles.prix, styles.dateFlexBox]}>
          <Text style={styles.titre}>Heure</Text>
          <Text style={[styles.info2, styles.infoTypo1]}>{`5:20pm `}</Text>
        </View>
        <View style={[styles.date, styles.dateFlexBox]}>
          <Text style={styles.titre}>Date</Text>
          <Text style={[styles.info3, styles.infoTypo]}>22 DEC 23</Text>
        </View>
        <View style={[styles.date1, styles.dateFlexBox]}>
          <Text style={styles.titre}>Places</Text>
          <Text style={[styles.info3, styles.infoTypo]}>2/6</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <View style={[styles.rate, styles.rateFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/moins3.png")}
          />
          <Text style={styles.text2}>5</Text>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
          <Image
            style={[styles.plusIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/plus3.png")}
          />
        </View>
        <View style={[styles.participer, styles.participerLayout]}>
          <Text style={[styles.supprimer, styles.signalerTypo]}>Evaluer</Text>
        </View>
        <Pressable
          style={[styles.participer1, styles.participerLayout]}
          onPress={() => navigation.navigate("Signaler")}
        >
          <Text style={[styles.signaler, styles.signalerTypo]}>Signaler</Text>
        </Pressable>
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
    position: "absolute",
    justifyContent: "center",
    top: 0,
    height: 46,
    borderRadius: Border.br_mini,
  },
  textTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorDarkslategray_100,
  },
  rateFlexBox: {
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
    flexDirection: "row",
    justifyContent: "center",
    top: 0,
    position: "absolute",
    alignItems: "center",
    borderRadius: Border.br_mini,
  },
  signalerTypo: {
    height: 19,
    width: 73,
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
    textAlign: "left",
    color: Color.colorDarkslategray_100,
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
    textAlign: "left",
    color: Color.colorDarkslategray_100,
  },
  vectorParent: {
    width: 62,
    marginTop: 6,
  },
  infosprofil: {
    left: 51,
    justifyContent: "center",
    width: 116,
    top: 0,
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
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_xs,
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
    borderRadius: Border.br_mini,
    alignItems: "center",
  },
});

export default Evaluer;

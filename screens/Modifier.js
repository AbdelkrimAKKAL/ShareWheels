import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import TopBar from "../components/TopBar";

const Modifier = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.modifier, styles.modifierFlexBox]}>
      <TopBar/>
      <View style={styles.main}>
        <Text style={styles.title}>Modifer profil</Text>
        <Image
          style={styles.photoprofilIcon}
          contentFit="cover"
          source={require("../assets/photoprofil.png")}
        />
        <ScrollView contentContainerStyle={styles.inputs}>
          <Text style={styles.plusTypo}>Modifier Nom</Text>
          <View style={styles.inputinfo}>
            <Text style={[styles.TextStyle]}>
              Amine Meddouri
            </Text>
          </View>
          <Text style={[styles.plusTypo]}>
            Modifier mot de passe
          </Text>
          <View style={styles.inputinfo}>
            <Text style={[styles.TextStyle]}>
              Nouveau mot de passe
            </Text>
          </View>
          <Text style={[styles.plusTypo]}>
            Modifier mail
          </Text>
          <View style={styles.inputinfo}>
            <TextInput
            style={[styles.TextStyle]}
            placeholder="Amine@email.con"
            />
          </View>
          <Text style={[styles.plusTypo]}>
            Modifier numero de telephone
          </Text>
          <View style={styles.input}>
            <View style={styles.parent}>
              <Text style={[styles.text, styles.textTypo]}>+213</Text>
              <Image
                style={[
                  styles.flagForFlagAlgeriaSvgrepoIcon,
                  styles.iconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/flagforflagalgeria-svgrepocom.png")}
              />
            </View>
            <TextInput
            style={[styles.numero, styles.numeroTypo]}
            placeholder="06 78 89 56 45"
            keyboardType="numeric"
            />
          </View>
          <View style={[styles.buttonfirst, styles.buttonfirstShadowBox]}>
            <Text style={[styles.signUp, styles.textTypo]}>Confirmer</Text>
          </View>
        </ScrollView>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  modifierFlexBox: {
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
  },
  textPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  numeroTypo: {
    color: Color.colorDarkgray_100,
    textAlign: "left",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },

  TextStyle: {
    top: "31.67%",
    left: "5.52%",
    position: "absolute",
    color: Color.colorDarkgray_100,
    textAlign: "left",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    width: "100%"
  },
  plusTypo: {
    paddingTop: "4%",
    width: 316,
    textAlign: "left",
    color: Color.textColorContentTertiary,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    display: "flex",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    alignItems: "center",
  },

  textTypo: {
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

  title: {
    fontSize: FontSize.headingH2_size,
    lineHeight: 25,
    color: Color.textColorContentPrimary,
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "center",
    width: 375,
    alignItems: "center",
    marginTop: 20
  },
  photoprofilIcon: {
    width: 128,
    height: 128,
    marginTop: 15,
  },

  inputinfo: {
    paddingTop: 0,
    height: 60,
    width: 328,
    borderWidth: 1,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    marginTop: "0.6%",
  },



  text: {
    lineHeight: 24,
    color: Color.titleText,
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
  },
  input: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_lg,
    flexDirection: "row",
    width: 328,
    borderWidth: 1,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  signUp: {
    lineHeight: 24,
    color: Color.neutralWhite,
    width: 235,
    textAlign: "center",
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  buttonfirst: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorRoyalblue_100,
    shadowColor: "rgba(236, 95, 95, 0.25)",
    shadowRadius: 14,
    elevation: 14,
    width: 317,
    height: 58,
    marginTop: 15,
    justifyContent: "center",
  },
  inputs: {
    alignItems: "center",
    justifyContent: 'center',
    flexGrow: 1,

  },

  main: {
    alignSelf: "stretch",
    flex: 1,
    paddingVertical: 0,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.neutralWhite,
  },
 
  profileIcon: {
    width: 22,
    height: 22,
  },
  profile1: {
    color: Color.colorRoyalblue_100,
  },

  modifier: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    justifyContent: "space-between",
  },
});

export default Modifier;

import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import TopBar from "../components/TopBar";
import { ScrollView } from "react-native-gesture-handler";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signUp]}>
      <TopBar />
      <Text style={styles.createAccount}>Create Account</Text>

      <ScrollView contentContainerStyle={styles.main}>
        <View style={styles.inputShadowBox1}>
          <Image
            style={[styles.iconLayout, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/user.png")}
          />
          <TextInput
            style={[styles.number, styles.numberTypo]}
            placeholder="Nom"
          />
        </View>
        <View style={[styles.input1, styles.inputShadowBox1]}>
          <Image
            style={styles.stylestrokeIcon}
            contentFit="cover"
            source={require("../assets/stylestroke.png")}
          />
          <TextInput
            style={[styles.number, styles.numberTypo]}
            placeholder="Mail"
          />
        </View>
        <View style={[styles.input1, styles.inputShadowBox1]}>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo]}>+213</Text>
            <Image
              style={styles.flagForFlagAlgeriaSvgrepoIcon}
              contentFit="cover"
              source={require("../assets/flagforflagalgeria-svgrepocom2.png")}
            />
          </View>
          <TextInput
          style={[styles.number2, styles.numberTypo]}
          placeholder="Numero de Telephone"
          />

        </View>
        <View style={[styles.input1, styles.inputShadowBox1]}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group1.png")}
          />
          <Text style={[styles.number3, styles.numberTypo]}>Genre</Text>
          <Image
            style={styles.downArrowIcon}
            contentFit="cover"
            source={require("../assets/down-arrow2.png")}
          />
        </View>
        <View style={[styles.input1, styles.inputShadowBox1]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/password.png")}
          />
          <TextInput
          style={[styles.number3, styles.numberTypo]}
          placeholder="mot de passe"
          />
          <Image
            style={[styles.hiddenIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/hidden.png")}
          />
        </View>
        <Pressable
          style={styles.inputShadowBox}
          onPress={() => navigation.navigate("Voiture")}
        >
          <Image
            style={[styles.mapPinIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/mappin6.png")}
          />
          <Text style={[styles.number5, styles.numberTypo]}>
            Voiture (optionnel)
          </Text>
        </Pressable>
        <Pressable
          style={styles.inputShadowBox}
          onPress={() => navigation.navigate("DatailsAjouter")}
        >
          <Image
            style={[styles.iconLayout, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/addellipse-svgrepocom.png")}
          />
          <Text style={[styles.number6, styles.numberTypo]}>
            Details a ajouter (optionnel)
          </Text>
        </Pressable>
        <Pressable
          style={[styles.buttonfirst]}
          onPress={() => navigation.navigate("MonProfil")}
        >
          <Text style={[styles.signUp1, styles.textTypo]}>Sign up</Text>
        </Pressable>
        <Pressable
          style={styles.alreadyHaveAnContainer}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.text1}>
            <Text style={styles.alreadyHaveAn}>
              Already have an account?{` `}
            </Text>
            <Text style={styles.signIn}>Sign In</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: 24,
    height: 24,
  },
  numberTypo: {
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
  },
  inputShadowBox1: {
    marginTop: "3%",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    width: 292,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  textTypo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  iconLayout: {
    overflow: "hidden",
    height: 22,
    width: 22,
  },

  createAccount: {
    marginTop: "5%",
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslategray_100,
    width: 359,
    textAlign: "center",
  },

  number: {
    width: 227,
  },
  stylestrokeIcon: {
    width: 23,
    height: 23,
  },
  input1: {
    marginTop: 20,
  },
  text: {
    lineHeight: 24,
    textAlign: "right",
    color: Color.colorGray_100,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  flagForFlagAlgeriaSvgrepoIcon: {
    height: "96%",
    width: "33.33%",
    right: "59.42%",
    left: "7.25%",
    position: "absolute",
    overflow: "hidden",
  },
  parent: {
    width: 69,
    height: 24,
  },
  number2: {
    width: 181,
  },

  groupIcon: {
    width: 21,
    height: 24,
  },
  number3: {
    width: 198,
  },
  downArrowIcon: {
    width: 22,
    height: 24,
  },

  hiddenIcon: {
    height: 24,
  },

  mapPinIcon: {
    overflow: "hidden",
  },
  number5: {
    width: 223,
  },
  inputShadowBox: {
    height: 57,
    marginTop: "3%",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 292,
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
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  number6: {
    width: 224,
  },
  signUp1: {
    lineHeight: 24,
    color: Color.neutralWhite,
    width: 235,
    textAlign: "center",
  },
  buttonfirst: {
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    alignItems: "center",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorRoyalblue_100,
    shadowColor: "rgba(236, 95, 95, 0.25)",
    shadowRadius: 14,
    elevation: 14,
    width: 317,
    height: 58,
    marginTop: "5%",
    justifyContent: "center",
  },

  alreadyHaveAn: {
    color: Color.colorGray_100,
  },

  signIn: {
    color: Color.colorRoyalblue_100,
  },
  text1: {
    width: 260,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "center",
  },
  alreadyHaveAnContainer: {
    marginTop: "2%",
    marginBottom: "3%",
  },
  main: {
    flex: 1,
    marginTop: "3%",
    alignItems: "center",
    alignContent: "flex-start"
  },

  signUp: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    justifyContent: "center",
    justifyContent: "center",
    backgroundColor: Color.neutralWhite,
  },
});

export default SignUp;

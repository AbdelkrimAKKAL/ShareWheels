import * as React from "react";
import { Text, StyleSheet, View, Pressable} from "react-native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const ButtonsSwitch = () => {
  const navigation = useNavigation();
  return (
    
    <View style={[styles.buttonsswitch, styles.rateFlexBox]}>
    <Pressable
      style={[styles.avenir, styles.avenirShadowBox]}
      onPress={() => navigation.navigate("CarpoolVenir")}
    >
      <Text style={[styles.aVenir, styles.passsTypo]}>A venir</Text>
    </Pressable>

    <Pressable onPress={() => navigation.navigate("CarpoolPassees")}>
      <Text style={[styles.passs, styles.passsTypo]}> Passés</Text>
    </Pressable>
  </View>
  );
};

const styles = StyleSheet.create({
  avenirShadowBox: {
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_18xl,
    width: 112,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(80, 85, 136, 0.1)",
  },
  passsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_mini,
  },
  aVenir: {
    color: Color.neutralWhite,
    width: 52,
  },
  avenir: {
    backgroundColor: Color.colorRoyalblue_100,
  },
  passs: {
    color: Color.colorRoyalblue_100,
    width: 55,
  },
  passes: {
    backgroundColor: Color.neutralWhite,
    marginLeft: 8,
  },
  buttonsswitch: {
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(80, 85, 136, 0.1)",
  },
});

export default ButtonsSwitch;

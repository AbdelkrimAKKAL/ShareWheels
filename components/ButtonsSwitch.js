import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtonsSwitch = ({
  buttonsSwitchPosition,
  aVenirBackgroundColor,
  aVenirColor,
  passesBackgroundColor,
  passsColor,
  onAVenirPress,
  onPassesPress,
}) => {
  const buttonsSwitchStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonsSwitchPosition),
    };
  }, [buttonsSwitchPosition]);

  const aVenirStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", aVenirBackgroundColor),
    };
  }, [aVenirBackgroundColor]);

  const aVenir1Style = useMemo(() => {
    return {
      ...getStyleValue("color", aVenirColor),
    };
  }, [aVenirColor]);

  const passesStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", passesBackgroundColor),
    };
  }, [passesBackgroundColor]);

  const passsStyle = useMemo(() => {
    return {
      ...getStyleValue("color", passsColor),
    };
  }, [passsColor]);

  return (
    <View style={[styles.buttonsswitch, buttonsSwitchStyle]}>
      <View
        style={[styles.avenir, styles.avenirShadowBox, aVenirStyle]}
        onPress={onAVenirPress}
      >
        <Text style={[styles.aVenir, styles.passsTypo, aVenir1Style]}>
          A venir
        </Text>
      </View>
      <View
        style={[styles.passes, styles.avenirShadowBox, passesStyle]}
        onPress={onPassesPress}
      >
        <Text style={[styles.passs, styles.passsTypo, passsStyle]}>
          {" "}
          Passés
        </Text>
      </View>
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

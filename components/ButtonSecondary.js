import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtonSecondary = ({
  signUp,
  buttonSecondaryPosition,
  buttonSecondaryMarginTop,
}) => {
  const buttonSecondaryStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonSecondaryPosition),
      ...getStyleValue("marginTop", buttonSecondaryMarginTop),
    };
  }, [buttonSecondaryPosition, buttonSecondaryMarginTop]);

  return (
    <View style={[styles.buttonsecondary, buttonSecondaryStyle]}>
      <Text style={styles.signUp}>{signUp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signUp: {
    fontSize: FontSize.subheadLgSHLgMedium_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    color: Color.colorRoyalblue_100,
    textAlign: "center",
  },
  buttonsecondary: {
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(236, 95, 95, 0.25)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    width: 318,
    height: 59,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ButtonSecondary;

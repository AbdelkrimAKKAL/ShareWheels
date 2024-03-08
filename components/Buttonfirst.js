import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Buttonfirst = ({ signUp, buttonfirstPosition, buttonfirstMarginTop }) => {
  const buttonfirstStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonfirstPosition),
      ...getStyleValue("marginTop", buttonfirstMarginTop),
    };
  }, [buttonfirstPosition, buttonfirstMarginTop]);

  return (
    <View style={[styles.buttonfirst, buttonfirstStyle]}>
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
    color: Color.neutralWhite,
    textAlign: "center",
    width: 235,
  },
  buttonfirst: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorRoyalblue_100,
    shadowColor: "rgba(236, 95, 95, 0.25)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
    width: 317,
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Buttonfirst;

import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerInput = ({ productCode, propMarginTop, propColor }) => {
  const inputStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const numeroStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View style={[styles.input, inputStyle]}>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo]}>+213</Text>
        <Image
          style={styles.flagForFlagAlgeriaSvgrepoIcon}
          contentFit="cover"
          source={productCode}
        />
      </View>
      <Text style={[styles.numero, styles.textTypo, numeroStyle]}>
        06 78 89 56 45
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  text: {
    width: "100%",
    top: "0%",
    left: "0%",
    lineHeight: 24,
    color: Color.titleText,
    textAlign: "right",
    position: "absolute",
  },
  flagForFlagAlgeriaSvgrepoIcon: {
    top: 1,
    left: 0,
    width: 24,
    height: 23,
    position: "absolute",
    overflow: "hidden",
  },
  parent: {
    width: 64,
    height: 24,
  },
  numero: {
    lineHeight: 23,
    color: Color.colorLightgray,
    textAlign: "left",
    width: 201,
    marginLeft: 28,
  },
  input: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorSilver_100,
    borderWidth: 1,
    width: 328,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_lg,
    marginTop: 10,
    overflow: "hidden",
  },
});

export default ContainerInput;

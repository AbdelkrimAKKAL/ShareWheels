import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GenreInputContainer = ({
  dimensionCode,
  categoryOrPassword,
  specificDimensions,
  propWidth,
  propHeight,
  propWidth1,
}) => {
  const groupIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("height", propHeight),
    };
  }, [propWidth, propHeight]);

  const downArrowIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  return (
    <View style={styles.input}>
      <Image
        style={[styles.groupIcon, groupIconStyle]}
        contentFit="cover"
        source={dimensionCode}
      />
      <Text style={styles.number}>{categoryOrPassword}</Text>
      <Image
        style={[styles.downArrowIcon, downArrowIconStyle]}
        contentFit="cover"
        source={specificDimensions}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    width: 21,
    height: 24,
  },
  number: {
    fontSize: FontSize.size_mini,
    lineHeight: 22,
    fontFamily: FontFamily.nunitoRegular,
    color: Color.colorGray_100,
    textAlign: "left",
    width: 198,
    height: 19,
  },
  downArrowIcon: {
    width: 22,
    height: 24,
  },
  input: {
    borderRadius: Border.br_base,
    backgroundColor: Color.neutralWhite,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    width: 292,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_base,
    marginTop: 23,
  },
});

export default GenreInputContainer;

import React, { useMemo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FooterSearch = ({
  dimensionCode,
  dimensionCodeText,
  dimensionCodeIdentifier,
  dimensionCodeIdentifierTe,
  dimensionCodeIdentifierTe2,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
  onSearchPress,
  onYourRidesPress,
  onPublishPress,
  onCarpoolPress,
  onProfilePress,
}) => {
  const searchStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const yourRidesStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor1),
    };
  }, [propColor1]);

  const publishStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor2),
    };
  }, [propColor2]);

  const carpoolStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor3),
    };
  }, [propColor3]);

  const profileStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor4),
    };
  }, [propColor4]);

  return (
    <View style={styles.footersearch}>
      <Pressable style={styles.searchFlexBox} onPress={onSearchPress}>
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={dimensionCode}
        />
        <Text style={[styles.search1, styles.search1Typo, searchStyle]}>
          Search
        </Text>
      </Pressable>
      <Pressable
        style={[styles.yourRides, styles.searchFlexBox]}
        onPress={onYourRidesPress}
      >
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={dimensionCodeText}
        />
        <Text style={[styles.yourRides1, styles.search1Typo, yourRidesStyle]}>
          Your rides
        </Text>
      </Pressable>
      <Pressable style={styles.searchFlexBox} onPress={onPublishPress}>
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={dimensionCodeIdentifier}
        />
        <Text style={[styles.yourRides1, styles.search1Typo, publishStyle]}>
          Publish
        </Text>
      </Pressable>
      <Pressable style={styles.searchFlexBox} onPress={onCarpoolPress}>
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={dimensionCodeIdentifierTe}
        />
        <Text style={[styles.yourRides1, styles.search1Typo, carpoolStyle]}>
          Carpool
        </Text>
      </Pressable>
      <Pressable style={styles.searchFlexBox} onPress={onProfilePress}>
        <Image
          style={styles.profileIcon}
          contentFit="cover"
          source={dimensionCodeIdentifierTe2}
        />
        <Text style={[styles.yourRides1, styles.search1Typo, profileStyle]}>
          Profile
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  search1Typo: {
    marginTop: 5,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
  },
  searchFlexBox: {
    justifyContent: "center",
    height: 64,
    width: 75,
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  searchIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  search1: {
    color: Color.colorRoyalblue_100,
  },
  yourRides1: {
    color: Color.colorDarkgray_200,
  },
  yourRides: {
    padding: Padding.p_3xs,
  },
  profileIcon: {
    width: 22,
    height: 22,
  },
  footersearch: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 375,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
});

export default FooterSearch;

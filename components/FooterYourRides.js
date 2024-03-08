import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const FooterYourRides = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footeryourrides}>
      <Pressable
        style={styles.searchFlexBox}
        onPress={() => navigation.navigate("Recherche")}
      >
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
        <Text style={[styles.search1, styles.search1Typo]}>Search</Text>
      </Pressable>
      <Pressable
        style={[styles.yourRides, styles.searchFlexBox]}
        onPress={() => navigation.navigate("YourRides")}
      >
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/format-list-bulleted1.png")}
        />
        <Text style={[styles.yourRides1, styles.search1Typo]}>Your rides</Text>
      </Pressable>
      <Pressable
        style={styles.searchFlexBox}
        onPress={() => navigation.navigate("AjouterAnnonce")}
      >
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/add-circle-outline.png")}
        />
        <Text style={[styles.search1, styles.search1Typo]}>Publish</Text>
      </Pressable>
      <Pressable
        style={styles.searchFlexBox}
        onPress={() => navigation.navigate("CarpoolVenir")}
      >
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/sharecircle-svgrepocom.png")}
        />
        <Text style={[styles.search1, styles.search1Typo]}>Carpool</Text>
      </Pressable>
      <Pressable
        style={styles.searchFlexBox}
        onPress={() => navigation.navigate("MonProfil")}
      >
        <Image
          style={styles.profileIcon}
          contentFit="cover"
          source={require("../assets/profile1.png")}
        />
        <Text style={[styles.search1, styles.search1Typo]}>Profile</Text>
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
    color: Color.colorDarkgray_200,
  },
  yourRides1: {
    color: Color.colorRoyalblue_100,
  },
  yourRides: {
    padding: Padding.p_3xs,
  },
  profileIcon: {
    width: 22,
    height: 22,
  },
  footeryourrides: {
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

export default FooterYourRides;

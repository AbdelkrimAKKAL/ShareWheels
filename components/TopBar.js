import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";
import Evaluer from "../components/Evaluer";

const TopBar = () =>{
    return(
        <View style={styles.bar}>
        <View style={[styles.rectangle, styles.rectangleLayout]} />
      </View>
    );
};

const styles = StyleSheet.create({
    rectangle: {
        height: "100%",
        top: "0%",
        right: "0%",
        bottom: "0%",
        left: "0%",
        position: "absolute",
      },
      bar: {
        height: 30,
        width: 375,
        overflow: "hidden",
      },
});
export default TopBar;


import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, Color } from "../GlobalStyles";

const CarPictureContainer = () => {
  return (
    <View style={styles.carpicLayout}>
      <View style={[styles.carpicChild, styles.carpicLayout]} />
      <View style={styles.group}>
        <Image
          style={[styles.vectorIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group5.png")}
        />
        <Image
          style={[styles.groupIcon1, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group6.png")}
        />
        <Image
          style={[styles.groupIcon2, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group7.png")}
        />
        <Image
          style={[styles.groupIcon3, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group8.png")}
        />
        <Image
          style={[styles.groupIcon4, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group9.png")}
        />
        <View style={styles.group1}>
          <Image
            style={[styles.groupIcon5, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group10.png")}
          />
          <Image
            style={[styles.groupIcon6, styles.groupIconPosition2]}
            contentFit="cover"
            source={require("../assets/group11.png")}
          />
          <Image
            style={[styles.groupIcon7, styles.groupIconPosition2]}
            contentFit="cover"
            source={require("../assets/group12.png")}
          />
          <Image
            style={[styles.groupIcon8, styles.groupIconPosition1]}
            contentFit="cover"
            source={require("../assets/group13.png")}
          />
          <Image
            style={[styles.groupIcon9, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group14.png")}
          />
          <Image
            style={[styles.groupIcon10, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group15.png")}
          />
          <Image
            style={[styles.groupIcon11, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group16.png")}
          />
          <Image
            style={[styles.groupIcon12, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group17.png")}
          />
          <Image
            style={[styles.groupIcon13, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group18.png")}
          />
          <Image
            style={[styles.groupIcon14, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group19.png")}
          />
          <Image
            style={[styles.groupIcon15, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group20.png")}
          />
          <Image
            style={[styles.groupIcon16, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group21.png")}
          />
          <Image
            style={[styles.groupIcon17, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group22.png")}
          />
          <Image
            style={[styles.groupIcon18, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group23.png")}
          />
          <Image
            style={[styles.groupIcon19, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group24.png")}
          />
          <View style={styles.group2}>
            <Image
              style={[styles.groupIcon20, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/group25.png")}
            />
            <Image
              style={[styles.groupIcon21, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/group26.png")}
            />
          </View>
          <Image
            style={[styles.groupIcon22, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group27.png")}
          />
          <Image
            style={[styles.groupIcon23, styles.groupIconPosition1]}
            contentFit="cover"
            source={require("../assets/group28.png")}
          />
        </View>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/rectangle-9.png")}
        />
        <Image
          style={[styles.groupIcon24, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group29.png")}
        />
        <Image
          style={[styles.groupIcon25, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group30.png")}
        />
        <Image
          style={[styles.groupIcon26, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group31.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carpicLayout: {
    height: 239,
    width: 377,
  },
  groupIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupIconPosition2: {
    top: "18.02%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupIconPosition1: {
    left: "33.88%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupIconPosition: {
    bottom: "10.99%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  carpicChild: {
    top: 0,
    left: 0,
    borderBottomRightRadius: Border.br_31xl,
    borderBottomLeftRadius: Border.br_31xl,
    backgroundColor: Color.neutralWhite,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 9,
    elevation: 9,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorRoyalblue_100,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    position: "absolute",
  },
  vectorIcon: {
    height: "78.29%",
    bottom: "21.71%",
    opacity: 0.1,
    left: "0%",
    top: "0%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "0%",
    width: "100%",
  },
  groupIcon: {
    height: "57.21%",
    width: "26.61%",
    top: "29.15%",
    right: "0.16%",
    bottom: "13.63%",
    left: "73.23%",
  },
  groupIcon1: {
    height: "12.87%",
    width: "5.89%",
    top: "48.25%",
    right: "15.5%",
    bottom: "38.87%",
    left: "78.6%",
  },
  groupIcon2: {
    height: "30.84%",
    width: "11.97%",
    top: "36.26%",
    right: "80.07%",
    bottom: "32.9%",
    left: "7.96%",
  },
  groupIcon3: {
    height: "33.45%",
    width: "14.42%",
    top: "25.92%",
    right: "46%",
    bottom: "40.64%",
    left: "39.59%",
  },
  groupIcon4: {
    height: "14.64%",
    width: "5.59%",
    top: "31.38%",
    right: "30.9%",
    bottom: "53.98%",
    left: "63.51%",
  },
  groupIcon5: {
    height: "100%",
    left: "0%",
    top: "0%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "0%",
    width: "100%",
    bottom: "0%",
  },
  groupIcon6: {
    height: "10.1%",
    width: "21.45%",
    right: "73.27%",
    bottom: "71.88%",
    left: "5.28%",
  },
  groupIcon7: {
    height: "2.79%",
    width: "12.78%",
    right: "64.01%",
    bottom: "79.19%",
    left: "23.21%",
  },
  groupIcon8: {
    height: "19.08%",
    width: "45.25%",
    right: "20.87%",
    bottom: "62.67%",
    top: "18.25%",
  },
  groupIcon9: {
    height: "19.64%",
    width: "39.98%",
    top: "24.67%",
    right: "41.03%",
    bottom: "55.69%",
    left: "18.99%",
  },
  groupIcon10: {
    height: "6.58%",
    width: "6.68%",
    top: "26.23%",
    right: "88.28%",
    bottom: "67.19%",
    left: "5.04%",
  },
  groupIcon11: {
    height: "22.6%",
    width: "39.04%",
    top: "31.42%",
    right: "55.45%",
    bottom: "45.98%",
    left: "5.51%",
  },
  groupIcon12: {
    height: "35.83%",
    width: "28.49%",
    right: "4.69%",
    bottom: "45.93%",
    left: "66.82%",
    top: "18.25%",
  },
  groupIcon13: {
    height: "21.37%",
    width: "42.44%",
    top: "40.85%",
    right: "5.39%",
    bottom: "37.78%",
    left: "52.17%",
  },
  groupIcon14: {
    height: "24.33%",
    width: "49.94%",
    top: "47.77%",
    right: "18.99%",
    bottom: "27.9%",
    left: "31.07%",
  },
  groupIcon15: {
    height: "12.95%",
    width: "49.71%",
    top: "75.5%",
    right: "11.25%",
    bottom: "11.55%",
    left: "39.04%",
  },
  groupIcon16: {
    height: "26.73%",
    width: "26.49%",
    top: "60.94%",
    right: "5.04%",
    bottom: "12.33%",
    left: "68.46%",
  },
  groupIcon17: {
    height: "22.43%",
    width: "43.38%",
    top: "66.57%",
    right: "39.27%",
    left: "17.35%",
  },
  groupIcon18: {
    height: "35.99%",
    width: "37.75%",
    top: "45.98%",
    right: "57.09%",
    bottom: "18.02%",
    left: "5.16%",
  },
  groupIcon19: {
    height: "7.03%",
    width: "20.87%",
    top: "81.98%",
    right: "74.56%",
    left: "4.57%",
  },
  groupIcon20: {
    height: "89.13%",
    width: "3.46%",
    right: "96.54%",
    bottom: "10.87%",
    left: "0%",
    top: "0%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  groupIcon21: {
    height: "95.65%",
    width: "1.57%",
    top: "4.35%",
    left: "98.43%",
    right: "0%",
    bottom: "0%",
  },
  group2: {
    height: "2.57%",
    width: "74.56%",
    top: "10.66%",
    right: "12.08%",
    bottom: "86.77%",
    left: "13.36%",
    position: "absolute",
  },
  groupIcon22: {
    height: "1%",
    width: "24.38%",
    top: "12.17%",
    right: "36.46%",
    bottom: "86.83%",
    left: "39.16%",
  },
  groupIcon23: {
    height: "21.71%",
    width: "26.96%",
    top: "23.94%",
    right: "39.16%",
    bottom: "54.35%",
  },
  group1: {
    height: "75.39%",
    width: "23.16%",
    top: "24.06%",
    right: "56.64%",
    bottom: "0.55%",
    left: "20.2%",
    position: "absolute",
  },
  groupChild: {
    top: 66,
    left: 192,
    borderRadius: Border.br_81xl,
    width: 79,
    height: 78,
    position: "absolute",
  },
  groupIcon24: {
    height: "47.54%",
    width: "76.02%",
    top: "52.46%",
    right: "12.79%",
    left: "11.19%",
    bottom: "0%",
  },
  groupIcon25: {
    height: "48.21%",
    width: "13.9%",
    top: "40.51%",
    right: "77.76%",
    bottom: "11.27%",
    left: "8.34%",
  },
  groupIcon26: {
    height: "12.45%",
    width: "5.73%",
    top: "85.95%",
    right: "89.47%",
    bottom: "1.6%",
    left: "4.81%",
  },
  group: {
    height: "99.46%",
    width: "97.61%",
    top: "0.54%",
    right: "0.95%",
    left: "1.43%",
    bottom: "0%",
    position: "absolute",
  },
});

export default CarPictureContainer;

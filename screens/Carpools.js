import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";
import Evaluer from "../components/Evaluer";
import TopBar from "../components/TopBar";
import Annonce from "../components/Annonce";

const Carpools = () => {
  const [activeButton, setActiveButton] = useState(0); // "venir" or "passes"

  const navigation = useNavigation();

  return (
    <View style={[styles.container, styles.rectangleLayout]}>
      <TopBar />
      <Text style={[styles.carpools, styles.carpoolsTypo]}>Carpools</Text>
      <View style={[styles.buttonContainer, styles.trajetFlexBox]}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 0 ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => setActiveButton(0)}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === 0
                ? styles.buttonTextActive
                : styles.buttonTextInactive,
            ]}
          >
            A venir
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 1 ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => setActiveButton(1)}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === 1
                ? styles.buttonTextActive
                : styles.buttonTextInactive,
            ]}
          >
            Passés
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        {activeButton === 0 ? (
          <View>
            <Annonce
              name="Amine Meddouri"
              rating="4.5(2)"
              startLocation="Bejaia"
              endLocation="Alger"
              price="250 DA"
              vehicle="Toyota Corolla"
              time="6:30pm"
              date="25 DEC 23"
              availableSeats="3/4"
              btnText="Annuler"
            />

            <Annonce
              name="Amine Meddouri"
              rating="4.5(2)"
              startLocation="Bejaia"
              endLocation="Alger"
              price="250 DA"
              vehicle="Toyota Corolla"
              time="6:30pm"
              date="25 DEC 23"
              availableSeats="3/4"
              btnText="Annuler"
            />
          </View>
        ) : (
          <View>
            <Evaluer
              name="Amine Meddouri"
              rating="4.5(2)"
              startLocation="Bejaia"
              endLocation="Alger"
              price="250 DA"
              vehicle="Toyota Corolla"
              time="6:30pm"
              date="25 DEC 23"
              availableSeats="3/4"
            />
            <Evaluer
              name="Amine Meddouri"
              rating="4.5(2)"
              startLocation="Bejaia"
              endLocation="Alger"
              price="250 DA"
              vehicle="Toyota Corolla"
              time="6:30pm"
              date="25 DEC 23"
              availableSeats="3/4"
            />
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    margin: 15
  },

  container: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
  },

  button: {
    width: 100,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: Border.br_3xs,
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 0.9,
    marginHorizontal: 5,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextActive: {
    fontWeight: "800",
    textAlign: "center",
    fontSize: FontSize.size_mini,
    color: Color.neutralWhite,
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
  },
  buttonTextInactive: {
    fontWeight: "800",
    textAlign: "center",
    fontSize: FontSize.size_mini,
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
  },
  activeButton: {
    backgroundColor: Color.colorRoyalblue_100,
  },
  inactiveButton: {
    backgroundColor: Color.neutralWhite,
  },

  rectangleLayout: {
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
  carpoolsTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorDarkslategray_100,
  },

  carpools: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    marginTop: 15
  },

  Carpools: {
    flex: 1,
    height: 834,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },

  trajetFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  main: {
    height: 614,
    alignItems: "center",
  },
});
export default Carpools;

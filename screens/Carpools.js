import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";
import Evaluer from "../components/Evaluer";
import TopBar from "../components/TopBar";
import Annonce from "../components/Annonce";
import { RechercheStyles } from "./Recherche";
import NotAuth from "../components/notAuth";
import { useAuth } from "../context/AuthContext";
import { yourRidesStyles } from "./YourRides";
import DirPhoto from "../assets/Tablet login-bro.png";


const Carpools = () => {
  const [activeButton, setActiveButton] = useState(0); // "venir" or "passes"
  const [isParticipated, setIsParticipated] = useState(false); //participated or not
  const [isHistory, setIsHistory] = useState(false); //history available or not

  const navigation = useNavigation();
  const { user } = useAuth();

  if (!user) {
    return(
    <View style={yourRidesStyles.yourrides}>
    <TopBar/>
    <Text style={[yourRidesStyles.yourRides, yourRidesStyles.yourRidesTypo]}>Carpools</Text>
    <NotAuth title="Besoin de se connecter/s'inscrire" photo={DirPhoto} />
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('WelcomeScreen')} >
      <Image
        style={[{width: 50, height: 50, marginTop: -150}]}
        contentFit="cover"
        source={require("../assets/next.png")}
      />
      </TouchableOpacity>
    </View>
    </View>);
  }

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
          isParticipated ? (
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
            <NotAuth title="Vos trajets récents apparaîtront ici" photo={DirPhoto} />
          )
        ) : isHistory ? (
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
        ) : (
          <NotAuth title="Votre historique de trajets ici" photo={DirPhoto} />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  needLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authenticateButton: {
    backgroundColor: 'blue', // Example background color for the button
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    margin: 15,
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
    marginTop: 15,
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

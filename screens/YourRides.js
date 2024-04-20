import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import Annonce from "../components/Annonce";
import TopBar from "../components/TopBar";
import { RechercheStyles } from "./Recherche";
import NotAuth from "../components/notAuth";
import DirPhoto from "../assets/Locationph.png"

const YourRides = () => {
  const navigation = useNavigation();

  const [isPosted, setIsPosted] = useState(true); //3ellas true 

  return (
    <View style={styles.yourrides}>
      <TopBar/>
      <Text style={[styles.yourRides, styles.yourRidesTypo]}>Your Rides</Text>
      {isPosted? (
        //if true 
        <View style={styles.main}>
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
          btnText="Supprimer"
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
          btnText="Supprimer"
        />
        
      </View>
      ): (
        //if false
      <NotAuth title={'Les prochains trajets publiés\napparaîtront ici'} photo={DirPhoto} />
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  yourRidesTypo: {
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },

  yourRides: {
    fontSize: FontSize.size_5xl,
    height: 27,
    marginTop: 15,
    width: '100%',
  },
 

  main: {
    height: 718,
    marginTop: 15,
    alignItems: "center",
  },


  yourrides: {
    flex: 1,
    height: 834,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
  
});

export default YourRides;

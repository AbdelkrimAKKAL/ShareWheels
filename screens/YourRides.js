import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text,Image, Pressable,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import Annonce from "../components/Annonce";
import TopBar from "../components/TopBar";
import { RechercheStyles } from "./Recherche";
import NotAuth from "../components/notAuth";
import DirPhoto from "../assets/Tablet login-bro.png"
import { useAuth } from "../context/AuthContext";


const YourRides = () => {
  const navigation = useNavigation();
  const { user } = useAuth();

  const [isPosted, setIsPosted] = useState(true); //3ellas true 

  if (!user) {
    return (
      <View style={yourRidesStyles.yourrides}>
      <TopBar/>
      <Text style={[yourRidesStyles.yourRides, yourRidesStyles.yourRidesTypo]}>Your Rides</Text>
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
      </View>
    );
  }

  return (
    <View style={yourRidesStyles.yourrides}>
      <TopBar/>
      <Text style={[yourRidesStyles.yourRides, yourRidesStyles.yourRidesTypo]}>Your Rides</Text>
      {isPosted? (
        //if true 
        <View style={yourRidesStyles.main}>
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

export const yourRidesStyles = StyleSheet.create({
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

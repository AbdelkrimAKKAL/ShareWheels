import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Annonce from "../components/Annonce";
import TopBar from "../components/TopBar";
import NotAuth from "../components/notAuth";
import { useAuth } from "../context/AuthContext";
import { timestampToDateTime } from "./ResultatRecherche";
import axios from "axios";
import env from "../env";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { Image } from "react-native";
import { useRefresh } from '../context/refresh';
import ResultatRechercheStyles from "./ResultatRecherche";


const YourRides = () => {
  const refresh = useRefresh();
  const { user } = useAuth();
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDataFromDatabase = async () => {
    try {
      const response = await axios.get(`http://${env.API_IP_ADDRESS}:3000/api/getPostedRides`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        params:{
          email : user.user.email
        }
      });
      
      setData(response.data);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user){
      fetchDataFromDatabase();
    }
  }, [refresh, user]);

  const renderItem = ({ item }) => {
    const { date, time } = timestampToDateTime(item.timestamp);

    return (
      <Annonce
        trajetId={item.id_trajet}
        name={`${item.nom} ${item.prenom}`}
        rating={item.total_rating}
        nbrRatings={item.num_ratings}
        startLocation={item.depart}
        endLocation={item.arrivee}
        price={item.prix}
        modele={item.modele}
        time={time}
        date={date}
        availableSeats={item.nbr_place}
        btnText="Supprimer"
        canDelete = "t"
      />
    );
  };

  if (!user) {
    return (
      <View style={YourRidesStyles.container}>
        <TopBar />
        <Text style={YourRidesStyles.title}>Your Rides</Text>
        <NotAuth title="Besoin de se connecter/s'inscrire" photo={2} />
        <TouchableOpacity onPress={() => navigation.navigate('TabNavigator', {screen: 'Profile',params: {screen: 'WelcomeScreen', }})} >
          <Image style={YourRidesStyles.image} source={require("../assets/next.png")} />
        </TouchableOpacity>
      </View>
    );
  }else{
  return (
    <View style={YourRidesStyles.container}>
      <TopBar />
      <Text style={YourRidesStyles.title}>Your Rides</Text>
      <View style={YourRidesStyles.main}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0075fd" style={[ResultatRechercheStyles.loadingIndicator]}
          />
        ) : (
          <FlatList
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }} // Set width to 100%
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id_trajet.toString()}
            ListEmptyComponent={<View style={[{marginTop: '40%'}]}><NotAuth title={'Les prochains trajets publiés\napparaîtront ici'} photo={3} /></View>}
          />
        )}
      </View>
    </View>
  );
};};

export const YourRidesStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  title: {
    fontSize: FontSize.size_5xl,
    marginTop: 15,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    color: Color.colorDarkslategray_100,
    height: 27,
    width: '100%',
    textAlign: "center",
  },
  main: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginTop: -150,
  },
});

export default YourRides;

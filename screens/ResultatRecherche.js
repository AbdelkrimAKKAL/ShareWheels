import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import Annonce from "../components/Annonce";
import TopBar from "../components/TopBar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RechercheStyles } from "./Recherche";

const fetchDataFromDatabase = async () => {
  // Example data
  return [
    {
      id: 1,
      name: "Amine Meddouri",
      rating: "4.5(2)",
      startLocation: "Alger Centre",
      endLocation: "Amizour",
      price: "250 DA",
      vehicle: "Toyota Corolla",
      time: "6:30pm",
      date: "25 DEC 23",
      availableSeats: "3/4",
    },
    {
      id: 2,
      name: "Amine Meddouri",
      rating: "4.5(2)",
      startLocation: "Alger Centre",
      endLocation: "Amizour",
      price: "250 DA",
      vehicle: "Toyota Corolla",
      time: "6:30pm",
      date: "25 DEC 23",
      availableSeats: "3/4",
    },
    
  ];
};

const renderItem = ({ item }) => (
  <Annonce
    name={item.name}
    rating={item.rating}
    startLocation={item.startLocation}
    endLocation={item.endLocation}
    price={item.price}
    vehicle={item.vehicle}
    time={item.time}
    date={item.date}
    availableSeats={item.availableSeats}
    btnText="Participer"

  />
);

const ResultatRecherche = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the database when the component mounts
    fetchDataFromDatabase().then((result) => setData(result));
  }, []);

  const route = useRoute();
  const date = route.params?.Date;
  const depart = route.params?.depart;
  const destination = route.params?.destination;
  const nmbrplaces = route.params?.nbPlc;

  return (
    <View style={[styles.resultatrecherche]}>
      <TopBar />
      <View style={[styles.frame]}>
        <Text style={styles.heading}>
          {depart} a {destination}
        </Text>
        <Text style={styles.heading1}>
          {date}, {nmbrplaces} Places
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },

  heading: {
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontWeight: "500",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    color: Color.neutralGray1,
    width: 325,
    height: 18,
    textAlign: "center",
  },

  heading1: {
    lineHeight: 18,
    color: "#8c8c8c",
    width: 200,
    marginTop: 10,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    height: 18,
    textAlign: "center",
  },

  frame: {
    justifyContent: "center",
    borderRadius: Border.br_mini,
    marginTop: "5%",
    marginBottom: "4%",
    borderStyle: "solid",
    borderColor: "rgba(0, 117, 253, 0.4)",
    borderWidth: 1,
    width: 300,
    height: 54,
    alignItems: "center",
  },

  resultatrecherche: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutralWhite,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ResultatRecherche;

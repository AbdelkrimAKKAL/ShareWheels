import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import Annonce from "../components/Annonce";
import TopBar from "../components/TopBar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RechercheStyles } from "./Recherche";
import NotAuth from "../components/notAuth";
import DirPhoto from "../assets/No data-cuate.png";
import axios from "axios";
import env from "../env";

const renderItem = ({ item }) => {
  const { date, time } = timestampToDateTime(item.timestamp);

  return (
    <Annonce
      name={item.nom + " " + item.prenom}
      rating={item.total_rating}
      nbrRatings={item.num_ratings}
      startLocation={item.depart}
      endLocation={item.arrivee}
      price={item.prix}
      vehicle={item.modele}
      time={time}
      date={date}
      availableSeats={item.nbr_place}
      btnText="Participer"
    />
  );
};
function timestampToDateTime(timestamp) {
  if (!timestamp) {
    return { date: "", time: "" };
  }

  const date = new Date(Date.parse(timestamp)); // Convert seconds to milliseconds

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
  const day = date.getDate().toString().padStart(2, "0");

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const dateString = `${day}/${month}/${year.toString().slice(2, 4)}`;
  const timeString = `${hours}:${minutes}`;

  return { date: dateString, time: timeString };
}

const ResultatRecherche = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const route = useRoute();
  const date = route.params?.Date;
  const depart = route.params?.depart;
  const arrivee = route.params?.destination;
  const passengers = route.params?.nbPlc;
  const isDatePicked = route.params?.isDatePicked;
  const isTimePicked = route.params?.isTimePicked;
  const timestamp = !isDatePicked
    ? null
    : new Date(route.params?.timestampRech);

  const fetchDataFromDatabase = async () => {
    try {
      const response = await axios.get(
        "http://" + env.API_IP_ADDRESS + ":3000/api/recherche",
        {
          params: {
            depart,
            arrivee,
            timestamp,
            passengers,
          },
        }
      );

      // Check if response.data is defined before accessing it
      if (response && response.data) {
        return response.data;
      } else {
        console.error("Empty response or missing data property.");
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  useEffect(() => {
    // Fetch data from the database when the component mounts
    fetchDataFromDatabase().then((result) => {
      setData(result);
      setIsLoading(false);
    });
    console.log(timestamp);
  }, []);

  return (
    <View style={[ResultatRechercheStyles.resultatrecherche]}>
      <TopBar />
      <View style={[ResultatRechercheStyles.frame]}>
        <Text style={ResultatRechercheStyles.heading}>
          {depart} a {arrivee}
        </Text>
        <Text style={ResultatRechercheStyles.heading1}>
          {isDatePicked ? date : "n'importe quand"}, {passengers} Places
        </Text>
      </View>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#0075fd"
          style={ResultatRechercheStyles.loadingIndicator}
        />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id_trajet.toString()}
          ListEmptyComponent={
            <NotAuth title="Oups... Aucune donnée trouvée" photo={DirPhoto} />
          }
        />
      )}
    </View>
  );
};

export const ResultatRechercheStyles = StyleSheet.create({
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
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ResultatRecherche;

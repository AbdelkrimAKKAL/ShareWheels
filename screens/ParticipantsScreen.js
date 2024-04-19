import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import Annonce from "../components/Annonce";
import TopBar from "../components/TopBar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RechercheStyles } from "./Recherche";
import Participants from "../components/Participants";
import { ResultatRechercheStyles } from "./ResultatRecherche";

const fetchDataFromDatabase = async () => {
  // Example data
  return [
    {
      id: 1,
      name: "Amine Meddouri",
      email: "meddouri06@gmail.com",
      phone: "06 59 49 34 19",
      gender: "male",
    },
    {
      id: 2,
      name: "Amine Meddouri",
      email: "meddouri06@gmail.com",
      phone: "06 59 49 34 19",
      gender: "male",
    },
  ];
};

const renderItem = ({ item }) => (
  <Participants
    name={item.name}
    email={item.email}
    phone={item.phone}
    gender={item.gender}
  />
);

const ParticipantsScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the database when the component mounts
    fetchDataFromDatabase().then((result) => setData(result));
  }, []);

  //   const route = useRoute();
  //   const date = route.params?.Date;
  //   const depart = route.params?.depart;
  //   const destination = route.params?.destination;

  const date = "23/06/2024";
  const depart = "Bejaia";
  const destination = "Alger";

  return (
    <View style={[ResultatRechercheStyles.resultatrecherche]}>
      <TopBar />
      <View style={[ResultatRechercheStyles.frame]}>
        <Text style={ResultatRechercheStyles.heading}>
          {depart} a {destination}
        </Text>
        <Text style={ResultatRechercheStyles.heading1}>{date}</Text>
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
  ParticipantsScreen: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: Color.neutralWhite,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ParticipantsScreen;

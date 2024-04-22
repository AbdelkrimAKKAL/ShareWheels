import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import Annonce from "../components/Annonce";
import TopBar from "../components/TopBar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RechercheStyles } from "./Recherche";
import Participants from "../components/Participants";
import { ResultatRechercheStyles } from "./ResultatRecherche";
import NotAuth from "../components/notAuth";
import LiveCollaborationImage from '../assets/Live collaboration-amico.png';

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
  const [isUsers, setIsUsers] = useState(false); //auth or not

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the database when the component mounts
    fetchDataFromDatabase().then((result) => setData(result));
  }, []);

  //   const route = useRoute();
  //   const date = route.params?.Date;
  //   const depart = route.params?.depart;
  //   const destination = route.params?.destination;

  //temp:::
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

    {isUsers? (
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
    ): (
      <NotAuth title="Garde patience !" photo={LiveCollaborationImage} />
    )}
      
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ParticipantsScreen;

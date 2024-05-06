import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import TopBar from "../components/TopBar";
import { RechercheStyles } from "./Recherche";
import { Checkbox } from "react-native-paper"; 
import { DetailsScreenStyles } from "./DatailsAjouter";

const fetchDataFromDatabase = async () => {
  // Example data
  return [
    { id: 1, text: "irrespectueux" },
    { id: 2, text: "fausse informations personnels" },
    { id: 3, text: "Utilisation du téléphone portable" },
    { id: 4, text: "conduite dangereuse" },
    { id: 5, text: "Véhicule en mauvais état" },             
  ];
};

const Signaler = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [newItemText, setNewItemText] = useState("");
  const [selectedItems, setSelectedItems] = useState([]); 

  useEffect(() => {
    // Fetch data from the database when the component mounts
    fetchDataFromDatabase().then((result) => setData(result));
  }, []);

  const toggleItem = (id) => {
    // Toggle the selected status of the item with the given id
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id)); // Remove if already selected
    } else {
      setSelectedItems([...selectedItems, id]); // Add if not selected
    }
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => toggleItem(item.id)}>
      <View
        style={[
          RechercheStyles.Inputs,
          { width: 284, height: 55, marginBottom: 10 },
        ]}
      >
        <Checkbox.Android
          color={
            selectedItems.includes(item.id)
              ? Color.colorRoyalblue_100
              : Color.colorGray
          }
          status={selectedItems.includes(item.id) ? "checked" : "unchecked"} // Check if item is selected
          onPress={() => toggleItem(item.id)}
        />
        <Text style={RechercheStyles.inputText}>{item.text}</Text>
      </View>
    </Pressable>
  );

  const addNewItem = () => {
    if (newItemText !== "") {
      const newItem = { id: data.length + 1, text: newItemText }; // Generate new item
      setData([...data, newItem]); // Add new item to the list
      setNewItemText("");
    }else{
    Alert.alert("Alert", "élément Vide!.");
    }
  };

  return (
    <View style={[DetailsScreenStyles.datailsajouter]}>
      <TopBar />
      <Text style={DetailsScreenStyles.detailsAAjouter}>Signaler</Text>
      <Text style={styles.text}>Pourquoi</Text>
      <View style={DetailsScreenStyles.main}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <View style={DetailsScreenStyles.AddItem}>
        <TextInput
          style={[RechercheStyles.Inputs, { width: 230, height: 50 }]}
          value={newItemText}
          onChangeText={setNewItemText}
          placeholder="Saisir le texte de l'élément"
        />
        <TouchableOpacity onPress={addNewItem}>
          <Image
            style={[{ width: 50, height: 50 }]}
            contentFit="cover"
            source={require("../assets/addcircle-svgrepocom.png")}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          RechercheStyles.buttonfirst,
          { alignItems: "center", marginBottom: 5 },
        ]}
        onPress={() => navigation.navigate("CarpoolPasses")}
      >
        <Text style={[RechercheStyles.buttonText, { color: "white" }]}>
          Confirmer
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
        marginBottom: 12,
        fontSize: FontSize.size_mid+3,
        color: Color.colorBlack,
        width: 289,
        height: 22,
        textAlign: "left",
        fontFamily: FontFamily.nunitoRegular,
        lineHeight: 22,
      },
});

export default Signaler;

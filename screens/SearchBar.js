import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, Pressable, TextInput, FlatList, Image  } from "react-native";
import TopBar from "../components/TopBar";
import algeria_cities from "../assets/algeria_cities.json";
import { useNavigation, useRoute } from "@react-navigation/native";
import {RechercheStyles} from "./Recherche";



const SearchBar = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const id = route.params?.type;
  const screen = route.params?.screen;


  const textInputRef = useRef(null);

  useEffect(() => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    const filtered = algeria_cities.filter(city =>
      `${city.commune_name_ascii}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    );
    setFilteredCities(filtered);
  }, [searchQuery]);

  const handleCitySelection = (city) => {
    navigation.navigate(screen, { location: city.commune_name_ascii.toString(), type:id })
  };

  return (
    <View style={[styles.main]}>
      <TopBar />
      <View style={[RechercheStyles.Inputs, {marginTop: "10%",width: 292,}]}>
        <Image
          style={RechercheStyles.Icon}
          contentFit="cover"
          source={require("../assets/mappin.png")}

        />
        <TextInput
          ref={textInputRef}
          style={[RechercheStyles.TextInput,{width: 227}]}
          placeholder={id}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={() => {
            if (searchQuery.trim() !== "") {
              navigation.navigate(screen, { location: searchQuery.trim(), type: id });
            }
          }}
        />
      </View>
      {searchQuery.length > 0 && (
        <View style={styles.suggestionContainer}>
          <FlatList
            contentContainerStyle={styles.suggestionList}

            data={filteredCities}
            renderItem={({ item }) => (
              <Pressable onPress={() => handleCitySelection(item)}>
                <Text style={styles.suggestionItem}>
                  {`${item.commune_name_ascii}, ${item.daira_name_ascii}, ${item.wilaya_name_ascii}`}
                </Text>
              </Pressable>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  suggestionList:{
    margin: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: 16,
  },
  suggestionItem:{
    fontSize: 23,
    marginBottom: 10
  }
});

export default SearchBar;

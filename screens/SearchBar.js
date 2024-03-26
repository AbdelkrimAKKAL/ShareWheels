import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, Pressable, TextInput, FlatList  } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import TopBar from "../components/TopBar";
import algeria_cities from "../assets/algeria_cities.json";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Keyboard } from 'react-native';



const SearchBar = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const id = route.params?.type;

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

  // Handle selection of a city
  const handleCitySelection = (city) => {
    navigation.navigate("Recherche", { location: city.commune_name_ascii.toString(), type:id })
  };

  return (
    <View style={[styles.main]}>
      <TopBar />
      <View style={[styles.input, styles.inputShadowBox]}>
        <Image
          style={styles.mapPinIcon}
          contentFit="cover"
          source={require("../assets/mappin.png")}

        />
        <TextInput
          ref={textInputRef}
          style={[styles.number, styles.numberTypo]}
          placeholder={id}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={() => {
            if (searchQuery.trim() !== "") {
              navigation.navigate("Recherche", { location: searchQuery.trim(), type: id });
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
  input: {
    marginTop: "10%",
    width: 292,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
  },
  inputShadowBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  mapPinIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  number: {
    width: 227,
  },
  numberTypo: {
    height: 19,
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_mini,
    textAlign: "left",
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

import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontSize, Padding, Color, Border, FontFamily } from "../GlobalStyles";
import TopBar from "../components/TopBar";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Alert } from "react-native";

const Recherche = () => {
  const navigation = useNavigation();

  //SearchBar Screen par --------------------------------------------------------------------------------------------------
  const route = useRoute();
  const id = route.params?.type;

  const [departLocation, setDepartLocation] = useState(null);
  const [destinationLocation, setDestinationLocation] = useState(null);

  useEffect(() => {
    if (id === "Destination") {
      setDestinationLocation(route.params?.location);
    } else if (id === "Depart") {
      setDepartLocation(route.params?.location);
    }
  }, [id, route.params?.location]);


  const handleSearch = () => {
    if (!departLocation || !destinationLocation || !isDatePicked) {
      Alert.alert("Alert", "Veuillez remplir les informations SVP.");
    } else {
      navigation.navigate("ResultatRecherche", {
        Date: date.toLocaleDateString(),
        heure: date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        depart: departLocation,
        destination: destinationLocation,
        nbPlc: nbPlaces,
      });
    }
  };
  //-----------------------------------------------------------------------------------------------------------------

  //nombre places ---------------------------------------------------------------------------------------------------
  const [nbPlaces, click] = React.useState(1);

  const add = () => {
    if (nbPlaces < 4) {
      click(nbPlaces + 1);
    }
  };

  const sub = () => {
    if (nbPlaces > 1) {
      click(nbPlaces - 1);
    }
  };
  //-----------------------------------------------------------------------------------------------------------------

  //Date------------------------------------------------------------------------------------------------------------
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePicked, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setDate(date);
    console.log("A date has been picked: ", date);
    setDatePicker(true);
  };
//----------------------------------------------------------------------------------------------------------------


  return (
    <View style={RechercheStyles.recherche}>
      <TopBar />

      <View style={RechercheStyles.carpic}>
        <Image
          style={RechercheStyles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </View>

      <Text style={RechercheStyles.sharewheels}>ShareWheels</Text>

      <View style={RechercheStyles.main}>
    
        <Text style={[RechercheStyles.heading, {width: 326, marginTop: 10,}]}>où vas-tu</Text>
        <Pressable
          style={[RechercheStyles.Inputs, {marginTop: "2%", width: 292,}]}
          onPress={() =>
            navigation.navigate("SearchBar", {
              type: "Depart",
              screen: "Recherche",
            })
          }
        >
          <Image
            style={RechercheStyles.Icon}
            contentFit="cover"
            source={require("../assets/mappin.png")}
          />
          <Text style={[RechercheStyles.inputText]}>
            {departLocation ? departLocation : "Depart"}
          </Text>
        </Pressable>

        <Pressable
          style={[RechercheStyles.Inputs, {marginTop: "2%", width: 292,}]}
          onPress={() =>
            navigation.navigate("SearchBar", { type: "Destination", screen: "Recherche", })
          }
        >
          <Image
            style={RechercheStyles.Icon}
            contentFit="cover"
            source={require("../assets/mappin.png")}
          />
          <Text style={[RechercheStyles.inputText]}>
            {destinationLocation ? destinationLocation : "Destination"}
          </Text>
        </Pressable>

    
        <Text style={[RechercheStyles.heading, {width: 326, marginTop: 10,}]}>Quand?</Text>
        <View style={[RechercheStyles.DateHeure]}>
          <View>
            <Pressable
              onPress={showDatePicker}
              style={[RechercheStyles.Inputs, {width: 184,}]}
            >
              <Image
                style={[RechercheStyles.Icon]}
                contentFit="cover"
                source={require("../assets/mappin1.png")}
              />
              <Text style={[RechercheStyles.inputText ,{marginLeft: 10}]}>
                {isDatePicked ? date.toLocaleDateString() : "Date"}
              </Text>
            </Pressable>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="datetime"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              date={new Date(date)}
            />
          </View>
          <View style={[RechercheStyles.Inputs, {width: 99,}]}>
            <Image
              style={[RechercheStyles.Icon, {width: 20, height: 20}]}
              contentFit="cover"
              source={require("../assets/clock3.png")}
            />
            <Text style={[RechercheStyles.inputText, {marginLeft: 5}]}>
              {isDatePicked
                ? date.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })
                : "Heure"}
            </Text>
          </View>
        </View>

        <View style={RechercheStyles.places}>
          <Text style={[RechercheStyles.heading]}>
            Combien Places ?
          </Text>
          <View style={RechercheStyles.nmbrplaces}>
            <Pressable onPress={sub}>
              <Image
                style={RechercheStyles.iconLayout}
                contentFit="cover"
                source={require("../assets/moins.png")}
              />
            </Pressable>
            <Text style={[RechercheStyles.heading]}>
              {nbPlaces}
            </Text>
            <Pressable onPress={add}>
              <Image
                style={[RechercheStyles.iconLayout]}
                contentFit="cover"
                source={require("../assets/plus.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable
        style={[RechercheStyles.buttonfirst, {alignItems: "center",}]}
        onPress={handleSearch}
      >
        <Text style={[RechercheStyles.heading, {fontSize: 16, color: "white",}]}>Rechercher</Text>
      </Pressable>
    </View>
  );
};

export const RechercheStyles = StyleSheet.create({
  heading: {
    color: Color.gray1,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
    lineHeight: 25,
    textAlign: "left",
    fontSize: FontSize.headingH2_size,
    textAlign: "left",
  },

  Inputs: {
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

  
  inputText: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    width: "100%",
    marginLeft: 6,
  },

  
  iconLayout: {
    height: 21,
    width: 21,
  },

  image1Icon: {
    left: 0,
    top: 0,
    height: "100%",
    position: "absolute",
    width: "100%",
    resizeMode: "stretch",
  },
  carpic: {
    height: "34%",
    width: "100%",
  },
  sharewheels: {
    fontSize: 30,
    fontWeight: "800",
    fontFamily: FontFamily.nunitoExtraBold,
    textAlign: "center",
    color: Color.colorRoyalblue_100,
  },

  Icon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
 
  input: {
    marginTop: "2%",
    width: 292,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
  },

  DateHeure: {
    width: 291,
    marginTop: "2%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  nmbrplaces: {
    width: 110,
    marginTop: 5,
    height: 24,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
  },
  places: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  main: {
    height: "50%",
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-5%",
  },


  buttonfirst: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorRoyalblue_100,
    shadowColor: "rgba(236, 95, 95, 0.25)",
    shadowRadius: 14,
    elevation: 14,
    width: 317,
    height: 58,
    justifyContent: "center",
    alignItems: 'center',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },


  recherche: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
});

export default Recherche;

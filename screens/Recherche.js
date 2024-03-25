import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontSize, Padding, Color, Border, FontFamily } from "../GlobalStyles";
import TopBar from "../components/TopBar";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Alert } from "react-native";

const Recherche = () => {
  const navigation = useNavigation();
  const [nbPlaces, click] = React.useState(1);

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

  const add = () => {
    if (nbPlaces < 6) {
      click(nbPlaces + 1);
    }
  };

  const sub = () => {
    if (nbPlaces > 1) {
      click(nbPlaces - 1);
    }
  };

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

  const handleSearch = () => {
    if (!departLocation || !destinationLocation || !isDatePicked) {
      Alert.alert(
        "Alert",
        "Veuillez remplir les informations SVP."
      );
    } else {
      navigation.navigate("ResultatRecherche");
    }
  };

  return (
    <View style={styles.recherche}>
      <TopBar />
      <View style={styles.carpic}>
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </View>
      <Text style={styles.sharewheels}>ShareWheels</Text>
      <View style={styles.main}>
        <Text style={[styles.heading, styles.headingTypo]}>où vas-tu</Text>
        <Pressable
          style={[styles.input1, styles.inputShadowBox]}
          onPress={() => navigation.navigate("SearchBar", { type: "Depart" })}
        >
          <Image
            style={styles.mapPinIcon}
            contentFit="cover"
            source={require("../assets/mappin.png")}
          />
          <Text style={[styles.number, styles.numberTypo]}>
          {departLocation ? departLocation : "Depart"}
          </Text>
        </Pressable>
        <Pressable
          style={[styles.input1, styles.inputShadowBox]}
          onPress={() =>
            navigation.navigate("SearchBar", { type: "Destination" })
          }
        >
          <Image
            style={styles.mapPinIcon}
            contentFit="cover"
            source={require("../assets/mappin.png")}
          />
          <Text style={[styles.number, styles.numberTypo]}>
          {destinationLocation ? destinationLocation : "Destination"}
          </Text>
        </Pressable>
        <Text style={[styles.heading1, styles.headingTypo]}>Quand?</Text>
        <View style={[styles.quand, styles.quandFlexBox]}>
          <View>
            <Pressable
              onPress={showDatePicker}
              style={[styles.input2, styles.inputShadowBox]}
            >
              <Image
                style={[styles.mapPinIcon2, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/mappin1.png")}
              />
              <Text style={[styles.number2, styles.numberTypo]}>
                {isDatePicked ? date.toLocaleDateString() : "Date"}{" "}
              </Text>
            </Pressable>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="datetime"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              date={new Date(date)} // Pass current selected date to the date picker
            />
          </View>
          <View style={[styles.input3, styles.quandFlexBox]}>
            <Image
              style={styles.clock3Icon}
              contentFit="cover"
              source={require("../assets/clock3.png")}
            />
            <Text style={[styles.number3, styles.numberTypo]}>
              {isDatePicked
                ? date.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })
                : "Heure"}{" "}
            </Text>
          </View>
        </View>
        <View style={styles.places}>
          <Text style={[styles.heading2, styles.headingTypo]}>
            Combien Places ?
          </Text>
          <View style={styles.nmbrplaces}>
            <Pressable onPress={sub}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/moins.png")}
              />
            </Pressable>
            <Text style={[styles.heading3, styles.headingTypo]}>
              {nbPlaces}
            </Text>
            <Pressable onPress={add}>
              <Image
                style={[styles.plusIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/plus.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.buttonfirst, styles.quandFlexBox]}
        onPress={handleSearch}
      >
        <Text style={styles.signUp}>Rechercher</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headingTypo: {
    textAlign: "left",
    fontSize: FontSize.headingH2_size,
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
  numberTypo: {
    height: 19,
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  quandFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout1: {
    height: 22,
    width: 22,
  },
  iconLayout: {
    height: 21,
    width: 21,
  },
  search1Typo: {
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    marginTop: 5,
    textAlign: "center",
  },
  searchLayout: {
    height: 64,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
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
    width: 286,
    textAlign: "center",
    color: Color.colorRoyalblue_100,
  },
  heading: {
    width: 326,
    color: Color.gray1,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
    lineHeight: 25,
    textAlign: "left",
    fontSize: FontSize.headingH2_size,
  },
  mapPinIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  number: {
    width: 227,
  },
  input: {
    marginTop: "2%",
    width: 292,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
  },
  input1: {
    marginTop: "2%",
    width: 292,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
  },
  heading1: {
    width: 322,
    marginTop: 15,
    color: Color.gray1,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
    lineHeight: 25,
    textAlign: "left",
    fontSize: FontSize.headingH2_size,
  },
  mapPinIcon2: {
    overflow: "hidden",
  },
  number2: {
    width: 123,
  },
  input2: {
    width: 184,
  },
  clock3Icon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  number3: {
    width: 59,
  },
  input3: {
    width: 99,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    flexDirection: "row",
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
  },
  quand: {
    width: 291,
    marginTop: "2%",
    justifyContent: "space-between",
  },
  heading2: {
    color: Color.gray1,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
    lineHeight: 25,
    textAlign: "left",
    fontSize: FontSize.headingH2_size,
  },
  heading3: {
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorBlack,
    marginLeft: 28,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.headingH2_size,
  },
  plusIcon: {
    marginLeft: 28,
  },
  nmbrplaces: {
    marginTop: 5,
    height: 24,
    flexDirection: "row",
    justifyContent: "center",
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
  signUp: {
    fontSize: FontSize.subheadLgSHLgMedium_size,
    lineHeight: 24,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    color: Color.neutralWhite,
    width: 235,
    fontWeight: "500",
    textAlign: "center",
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
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
  },
  search1: {
    color: Color.colorRoyalblue_100,
  },

  recherche: {
    flex: 1,
    height: "100%",
    justifyContent: "",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
});

export default Recherche;

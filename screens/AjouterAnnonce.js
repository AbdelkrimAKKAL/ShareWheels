import * as React from "react";
import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import DropDownPicker from "react-native-dropdown-picker";
import TopBar from "../components/TopBar";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RechercheStyles } from "./Recherche";

const AjouterAnnonce = () => {
  const navigation = useNavigation();

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const handlePress = (buttonNumber) => {
    switch (buttonNumber) {
      case 1:
        setIsChecked1(!isChecked1);
        break;
      case 2:
        setIsChecked2(!isChecked2);
        break;
      case 3:
        setIsChecked3(!isChecked3);
        break;
      default:
        break;
    }
  };

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



  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "POLO", value: "POLO" },
    { label: "Maruti", value: "Maruti" },
    { label: "Tmax", value: "Tmax" },
  ]);
  const [selectedValue, setSelectedValue] = useState(null);

  // date 1

  const scrollViewRef = useRef(null);


  const [extend, setExtend] = useState(false)
  const handleExtend = () => {
    setExtend(!extend)
    setDatePicker2(false)
  };
  useEffect(() => {
    // Scroll to default position when extend becomes false
    if (!extend && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    }
  }, [extend]);
  const handleInputBlur = () => {
    // Scroll back to default position
    scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePicked, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isTimePicked, setTimePicker] = useState(false);
  const [time, setTime] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    setTimePickerVisibility(false); // Hide time picker when showing date picker
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
    setDatePickerVisibility(false); // Hide date picker when showing time picker
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleDateConfirm = (selectedDate) => {
    hideDatePicker();
    setDate(selectedDate);
    console.log("A date has been picked: ", selectedDate);
    setDatePicker(true);
  };

  const handleTimeConfirm = (selectedTime) => {
    hideTimePicker();
    setTime(selectedTime);
    console.log("A time has been picked: ", selectedTime);
    setTimePicker(true);
  };

  // date2
  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
  const [isDatePicked2, setDatePicker2] = useState(false);
  const [date2, setDate2] = useState(new Date());

  const showDatePicker2 = () => {
    setDatePickerVisibility2(true);
    // Hide time picker when showing date picker
  };

  const hideDatePicker2 = () => {
    setDatePickerVisibility2(false);
  };

  const handleDateConfirm2 = (selectedDate) => {
    hideDatePicker2();
    setDate2(selectedDate);
    console.log("A date has been picked: ", selectedDate);
    setDatePicker2(true);
  };

  function getDateDisplay(date, isDatePicked) {
    const displayDate = isDatePicked ? date.toLocaleDateString() : "Date";
    return displayDate
  }

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <TopBar />
      <View style={[styles.AddRideTop]}>
        <Text style={styles.ajouterAnnonce}>Ajouter Annonce</Text>
      </View>
      
      <ScrollView ref={scrollViewRef} scrollEnabled={extend}>
        <View style={[styles.ajouterannonce, styles.footerpublishFlexBox, extend ? { height: 750 } : { height: 600 }]}>


          <View style={[styles.main,]}>


            <View style={styles.inputs}>

              <Pressable
                style={styles.input}
                onPress={() =>
                  navigation.navigate("SearchBar", {
                    type: "Depart",
                    screen: "AjouterAnnonce",
                  })
                }
              >
                <Image
                  style={styles.mapPinIcon}
                  contentFit="cover"
                  source={require("../assets/mappin3.png")}
                />
                <Text style={{ textAlign: "left", width: "100%", marginLeft: 5, color: Color.colorGray_100, }}>
                  {departLocation ? departLocation : "Depart"}
                </Text>
              </Pressable>

              <Pressable
                style={[styles.input1, styles.inputShadowBox1]}
                onPress={() =>
                  navigation.navigate("SearchBar", {
                    type: "Destination",
                    screen: "AjouterAnnonce",
                  })
                }
              >
                <Image
                  style={styles.mapPinIcon}
                  contentFit="cover"
                  source={require("../assets/mappin3.png")}
                />
                <Text style={{ textAlign: "left", width: "100%", marginLeft: 5, color: Color.colorGray_100, }}>
                  {destinationLocation ? destinationLocation : "Destination"}
                </Text>
              </Pressable>
              <View>


                <View style={extend ? styles.styleWhenTrue : false}>
                  {extend && (
                    <Text style={[styles.number, styles.numberTypo, styles.extend, styles.text]}>
                      Start Date
                    </Text>
                  )}
                  <Pressable // Date
                    style={styles.inputShadowBox}
                    // onPress={() => { navigation.navigate('Dates') }}
                    onPress={showDatePicker}
                  >
                    <Image
                      style={[styles.mapPinIcon2, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/mappin4.png")}
                    />
                    <Text style={[styles.number2, styles.numberTypo]}>
                      {getDateDisplay(date, isDatePicked)}
                    </Text>

                    <Pressable
                      onPress={handleExtend}
                    >
                      <Image
                        style={styles.addCircleSvgrepocomIcon}
                        contentFit="cover"
                        source={extend ? require("../assets/UpArrow.png") : require("../assets/down-arrow.png")}
                      />
                    </Pressable>

                  </Pressable>

                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleDateConfirm}
                    onCancel={hideDatePicker}
                    date={new Date(date)} // Pass current selected date to the date picker
                  />
                  {extend && (
                    <Text style={[styles.number, styles.numberTypo, styles.extend, styles.text]}>
                      End Date
                    </Text>
                  )}
                  {extend && (
                    <View style={styles.frameFlexBox}>

                      <Pressable //Date
                        style={styles.inputShadowBox}
                        onPress={showDatePicker2}
                      >
                        <Image
                          style={[styles.mapPinIcon, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/mappin2.png")}
                        />
                        <Text style={[styles.number, styles.numberTypo]}>{getDateDisplay(date2, isDatePicked2)}</Text>
                      </Pressable>
                      <DateTimePickerModal
                        isVisible={isDatePickerVisible2}
                        mode="date"
                        onConfirm={handleDateConfirm2}
                        onCancel={hideDatePicker2}
                        date={new Date(date2)} // Pass current selected date to the date picker
                      />

                    </View>
                  )}
                </View>
              </View>

              <Pressable // Heure
                style={styles.inputShadowBox}
                onPress={showTimePicker}
              >
                <Image
                  style={[styles.mapPinIcon2, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/clock3.png")}
                />
                <Text style={[styles.number2, styles.numberTypo]}>
                  {isTimePicked ? time.toLocaleTimeString() : "Heure"}
                </Text>
              </Pressable>
              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
                date={new Date(time)} // Pass current selected time to the time picker
              />

              <View style={styles.inputShadowBox}>
                <Image
                  style={[styles.mapPinIcon2, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/mappin5.png")}
                />

                <DropDownPicker
                  style={{
                    zIndex: 9999,
                    borderWidth: 0,
                    borderColor: "transparent",
                    width: "95%",
                  }}
                  placeholder="Voiture"
                  ArrowDownIconComponent={({ style }) => (
                    <Image
                      style={[styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/down-arrow.png")}
                    />
                  )}
                  open={open}
                  value={selectedValue} // Use selectedValue as the value prop
                  items={items}
                  setOpen={setOpen}
                  setValue={setSelectedValue} // Use setSelectedValue as the setValue prop
                  setItems={setItems}
                  dropDownContainerStyle={{
                    borderWidth: 0,
                    borderColor: "transparent",
                    backgroundColor: "#A5A5A5",
                    width: "95%",
                    PaddingLeft: "-10",
                  }}
                  dropDownStyle={{ borderWidth: 0, borderColor: "transparent" }}
                />
              </View>
              <View style={{ zIndex: -1 }}>
                <View // Price
                  style={styles.inputShadowBox}

                >
                  <Image
                    style={[styles.mapPinIcon2, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/money-icon1.png")}
                  />
                  <TextInput
                    style={[styles.number2, styles.numberTypo]}
                    placeholder="Prix (DA)"
                    keyboardType="numeric"
                    onBlur={handleInputBlur}
                  />
                </View>
              </View>

              <Pressable
                style={styles.inputShadowBox}
                onPress={() => { navigation.navigate('DatailsAjouter') }}
              >
                <Image
                  style={[styles.mapPinIcon2, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/add-circle-outline.png")}
                />
                <Text style={[styles.number2, styles.numberTypo]}>Details a ajouter</Text>
              </Pressable>



            </View>

          </View>


        </View>
      </ScrollView>

      <View style={styles.ajouter}>
        <Pressable style={[styles.buttonfirst, styles.input1FlexBox, styles.btnAjouter]}>
          <Text style={styles.signUp}>Ajouter</Text>
        </Pressable>
      </View>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  AddRideTop: {
    height: 100,
    backgroundColor: "white",
    justifyContent: "center",
    borderBottomColor: Color.colorGray_300,
    borderBottomWidth: 2,
    borderRadius: 5
  },

  styleWhenTrue: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginTop: 10,
    borderRadius: 10
  },
  text: {
    color: "black",
    marginTop: 10,
    height: 20
  },
  addCircleSvgrepocomIcon: {
    width: 22,
    height: 22,
    marginLeft:-15,
    

  },
  btnAjouter: {
    marginTop: 10,
    marginBottom: 10
  },
  ajouter: {
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonUncheckedSvgrepoIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  footerpublishFlexBox: {
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
  },
  numberTypo: {
    height: 19,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
    fontSize: FontSize.size_mini,
  },
  inputShadowBox1: {
    marginTop: 15,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    backgroundColor: Color.neutralWhite,
  },
  iconLayout: {
    height: 22,
    width: 22,
  },
  input1FlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  ajouterAnnonce: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslategray_100,
    width: 359,
    textAlign: "center",
    marginBottom:0,
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
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    flexDirection: "row",
    width: 292,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  input1: {
    flexDirection: "row",
    alignItems: "center",
    width: 292,
    marginTop: 15,
    justifyContent: "space-between",
  },
  mapPinIcon2: {
    overflow: "hidden",
  },
  number2: {
    width: 220,
    marginLeft: 12
  },
  inputShadowBox: {
    height: 57,
    marginTop: 15,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 292,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },

  number4: {
    width: 265,
    height: 229,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
    fontSize: FontSize.size_mini,
  },
  input4: {
    height: 50,
  },
  inputs: {
    height: 544,
    marginTop: 20,
    alignItems: "center",
  },
  signUp: {
    fontSize: FontSize.subheadLgSHLgMedium_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    color: Color.neutralWhite,
    width: 235,
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
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    marginTop: 0,
    justifyContent: "center",
  },
  main: {
    flex: 1,
    marginTop: 25,
    alignItems: "center",
  },

  ajouterannonce: {
    flex: 1,
    height: 824,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default AjouterAnnonce;
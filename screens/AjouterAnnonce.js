import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Pressable, TextInput, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import DropDownPicker from "react-native-dropdown-picker";
import TopBar from "../components/TopBar";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const AjouterAnnonce = () => {
  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "POLO", value: "POLO" },
    { label: "Maruti", value: "Maruti" },
  ]);
  const [selectedValue, setSelectedValue] = useState(null);


  // date
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

  return (
    <KeyboardAvoidingView
    behavior="position" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={[styles.ajouterannonce, styles.footerpublishFlexBox]}>
        <TopBar />
        <View style={styles.main}>
          <Text style={styles.ajouterAnnonce}>Ajouter Annonce</Text>
          <View style={styles.inputs}>
            <View style={styles.input}>
              <Image
                style={styles.mapPinIcon}
                contentFit="cover"
                source={require("../assets/mappin3.png")}
              />
              <TextInput
                placeholder="Depart"
                style={{ textAlign: "left", width: "100%", marginLeft: 5 }}
              />
            </View>
            <View style={[styles.input1, styles.inputShadowBox1]}>
              <Image
                style={styles.mapPinIcon}
                contentFit="cover"
                source={require("../assets/mappin3.png")}
              />
              <TextInput
                placeholder="Destination"
                style={{ textAlign: "left", width: "100%", marginLeft: 5 }}
              />
            </View>

            <View>
              <Pressable // Date
                style={styles.inputShadowBox}
                onPress={showDatePicker}
              >
                <Image
                  style={[styles.mapPinIcon2, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/mappin4.png")}
                />
                <Text style={[styles.number2, styles.numberTypo]}>{isDatePicked ? date.toLocaleDateString() : "Date"}</Text>
              </Pressable>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
                date={new Date(date)} // Pass current selected date to the date picker
              />

              <Pressable // Heure
                style={styles.inputShadowBox}
                onPress={showTimePicker}
              >
                <Image
                  style={[styles.mapPinIcon2, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/clock3.png")}
                />
                <Text style={[styles.number2, styles.numberTypo]}>{isTimePicked ? time.toLocaleTimeString() : "Heure"}</Text>
              </Pressable>
              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
                date={new Date(time)} // Pass current selected time to the time picker
              />
            </View>

            <View style={styles.inputShadowBox}>
              <Image
                style={[styles.mapPinIcon2, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/mappin5.png")}
              />

              <DropDownPicker
                style={{ zIndex: 9999, borderWidth: 0, borderColor: 'transparent', width: '95%' }}
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
                dropDownContainerStyle={{ borderWidth: 0, borderColor: 'transparent', backgroundColor: '#A5A5A5', width: '95%', PaddingLeft: '-10' }}
                dropDownStyle={{ borderWidth: 0, borderColor: 'transparent' }}
              />
            </View>
            <View style={[{ zIndex: -1 }, styles.input4, styles.inputShadowBox1]}>
              <TextInput
                placeholder="Autre.."
                style={[
                  styles.number4,
                  {
                    textAlign: "left",
                    height: 40,
                    marginBottom: 0,
                  },
                ]}
              />
            </View>
          </View>
          <View style={[styles.buttonfirst, styles.input1FlexBox]}>
            <Text style={styles.signUp}>Ajouter</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
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
    height: 120,
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
    justifyContent: "center",
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

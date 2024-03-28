import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import TopBar from "../components/TopBar";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Dates = () => {
  const navigation = useNavigation();
  

  // Extend the ride
  const [extend, setExtend] = useState(false)
  const handleExtend = () => {
    setExtend(!extend)
    setDatePicker2(false)
  };

  // date 1
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
    // setTimePickerVisibility(true);
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

  // date 2
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
    <View style={[styles.dates, styles.datesFlexBox]}>
      <TopBar />
      <Text style={styles.dates1}>Dates</Text>
      <View style={styles.main}>

        {extend && (
          <Text style={[styles.number, styles.numberTypo, styles.extend]}>
            From
          </Text>
        )}
        <View style={styles.inputs}>

          <View style={styles.frameFlexBox}>

            <Pressable //Date
              style={styles.inputShadowBox}
              onPress={showDatePicker}
            >
              <Image
                style={[styles.mapPinIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/mappin2.png")}
              />
              <Text style={[styles.number, styles.numberTypo]}>{getDateDisplay(date, isDatePicked)}</Text>
            </Pressable>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleDateConfirm}
              onCancel={hideDatePicker}
              date={new Date(date)} // Pass current selected date to the date picker
            />

            {/* <Pressable //heure
              style={styles.inputSpaceBlock}
              onPress={showTimePicker}
            >
              <Image
                style={styles.clock3Icon}
                contentFit="cover"
                source={require("../assets/clock31.png")}
              />
              <Text style={[styles.number1, styles.numberTypo]}>{isTimePicked ? time.toLocaleTimeString() : "Heure"}</Text>
            </Pressable>
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleTimeConfirm}
              onCancel={hideTimePicker}
              date={new Date(time)} // Pass current selected time to the time picker
            /> */}

          </View>

          {extend && (
            <Text style={[styles.number, styles.numberTypo, styles.extend]}>
              To
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
                <Text style={[styles.number, styles.numberTypo]}>{getDateDisplay(date2, isDatePicked2) }</Text>
              </Pressable>
              <DateTimePickerModal
                isVisible={isDatePickerVisible2}
                mode="date"
                onConfirm={handleDateConfirm2}
                onCancel={hideDatePicker2}
                date={new Date(date2)} // Pass current selected date to the date picker
              />

              {/* <Pressable //heure
                style={styles.inputSpaceBlock}
                onPress={showTimePicker}
              >
                <Image
                  style={styles.clock3Icon}
                  contentFit="cover"
                  source={require("../assets/clock31.png")}
                />
                <Text style={[styles.number1, styles.numberTypo]}>{isTimePicked ? time.toLocaleTimeString() : "Heure"}</Text>
              </Pressable>
              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
                date={new Date(time)} // Pass current selected time to the time picker
              /> */}

            </View>
          )}

        </View>

        <View style={styles.container}>
          <Pressable
            onPress={handleExtend}
          >
            <Image
              style={styles.addCircleSvgrepocomIcon}
              contentFit="cover"
              source={extend ? require("../assets/add-circle-outline.png") : require("../assets/addcircle-svgrepocom1.png")}
            />
          </Pressable>


          <View style={[styles.buttonfirst, styles.buttonfirstShadowBox]}>
            <Text style={styles.signUp}>Confirmer</Text>
          </View>
        </View>

      </View>
    </View>
  );
  
};


const styles = StyleSheet.create({
  container: {
    paddingTop:500,
    position:'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  extend: {
    margin: 20
  },

  datesFlexBox: {
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
  },
  iconLayout: {
    height: 22,
    width: 22,
  },
  numberTypo: {
    height: 19,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 22,
    fontSize: FontSize.size_mini,
  },
  frameFlexBox: {
    flexDirection: "row",
    width: 290,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonfirstShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    flexDirection: "row",
    alignItems: "center",
  },
  search1Typo: {
    marginTop: 5,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
  },
  searchLayout: {
    height: 64,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },

  dates1: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslategray_100,
    width: 359,
    textAlign: "center",
  },
  mapPinIcon: {
    overflow: "hidden",
  },
  number: {
    width: 138,
  },
  inputShadowBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    width: 201,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  clock3Icon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  number1: {
    width: 45,
  },
  inputSpaceBlock: {
    marginLeft: 6,
    paddingBottom: Padding.p_base,
    paddingRight: Padding.p_8xs,
    paddingTop: Padding.p_base,
    paddingLeft: Padding.p_5xs,
    width: 84,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
  },
  frame1: {
    marginTop: 10,
  },
  inputs: {
    height: 506,
    alignItems: "center",
  },
  addCircleSvgrepocomIcon: {
    width: 60,
    height: 60,
    marginTop: 20,
    overflow: "hidden",
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
    marginTop: 20,
    justifyContent: "center",
  },
  main: {
    height: 678,
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  search1: {
    color: Color.colorDarkgray_200,
  },
  yourRides: {
    padding: Padding.p_3xs,
  },
  publish1: {
    color: Color.colorRoyalblue_100,
  },
  footerpublish: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 20,
    elevation: 20,
    width: 375,
    justifyContent: "space-between",
    backgroundColor: Color.neutralWhite,
  },
  dates: {
    flex: 1,
    height: 834,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});


export default Dates;




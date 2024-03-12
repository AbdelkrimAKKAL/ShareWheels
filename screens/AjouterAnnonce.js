import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import DropDownPicker from 'react-native-dropdown-picker';
const AjouterAnnonce = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }]);
  return (
    <View style={[styles.ajouterannonce, styles.footerpublishFlexBox]}>
      <View>
        <View/>
      </View>
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
              placeholder="Départ"
            />
          </View>
          <View style={styles.input}>
            <Image
              style={styles.mapPinIcon}
              contentFit="cover"
              source={require("../assets/mappin3.png")}
            />
            <TextInput
              placeholder="Destination"
            />
          </View>
          <Pressable
            style={styles.inputShadowBox}
            onPress={() => navigation.navigate("Dates")}
          >
            <Image
              style={ styles.iconLayout}
              contentFit="cover"
              source={require("../assets/mappin4.png")}
            />
            <Text>Date</Text>
          </Pressable>
          <View >
            <DropDownPicker style={styles.inputShadowBox}
              placeholder="Voiture"
              ArrowDownIconComponent={({style}) =>  <Image
              style={ styles.iconLayout}
              contentFit="cover"
              source={require("../assets/mappin5.png")}
            />}
              open={open}
              value={"value"}
              items={items}
              setOpen={setOpen}
              setValue={"setValu"}
              setItems={setItems}
            />
          </View>
          <View >
            <Text >A ajouter</Text>
          </View>
        </View>
        <View style={[styles.buttonfirst, styles.input1FlexBox]}>
          <Text style={styles.signUp}>Ajouter</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  footerpublishFlexBox: {
    justifyContent: "space-between",
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
  
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
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
    marginTop: 20,
    justifyContent: "center",
  },
  main: {
    height: 728,
    justifyContent: "center",
    alignItems: "center",
  },
  ajouterannonce: {
    flex: 1,
    height: 834,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default AjouterAnnonce;

import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";
import TopBar from "../components/TopBar";
export const me = {
  name: '',
  bdate: Date,
  phone: 1133333,
  email: 'jimmy@gmail.com',
  stars: 4.7,
  avis: 2,
  password: 'dzdzdzdz',
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  setname: function (nom) {
    this.name = nom;
  },
  setemail: function (x) {
    this.email = x;
  },
  setpassword: function (x, old) {
    if ((x.length >= 8) && (old === this.password || this.password === '')) {
      this.password = x;
    };
  },
  setphone: function (x) {
    if (x > 500000000 && x < 800000000) {
      this.phone = x;
    };
  },
};

console.log(me.nom);
const mycars = {
  coulor: 'Gris',
  id: '0117110606',
  model: 'Hyundai Atos'
}

const MonProfil = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "POLO", value: "POLO" },
    { label: "Maruti", value: "Maruti" },
  ]);
  const [selectedValue, setSelectedValue] = useState(null);
  const navigation = useNavigation();
  me.greet();


  return (

    <View style={styles.monprofil}>
      <TopBar />
      <View style={styles.main}>
        <Text >Mon Profile</Text>
        <View style={[styles.userprofile, styles.centrer]}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image1.png")}
          />
          <View style={[styles.nom, styles.centrer]}>
            <Text style={[styles.amineMeddouri, styles.titleTypo]}>
              {me.name}
            </Text>
            <View style={[styles.vectorParent, styles.centrer]}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector3.png")}
              />
              <Text style={styles.text}>{me.stars + ' (' + me.avis + ')'} </Text>
            </View>
          </View>
        </View>
        <View style={[styles.inputs, styles.centrer]}>
          <View style={[styles.input]}>
            <Text style={[]}>
              {me.email}
            </Text>
          </View>
          <View style={[styles.input]}>
            <View style={styles.parent}>
              <Text style={[styles.text1, styles.text1Typo]}>+213</Text>
              <Image
                style={[
                  styles.flagForFlagAlgeriaSvgrepoIcon,
                  styles.iconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/flagforflagalgeria-svgrepocom1.png")}
              />
            </View>
            <Text style={[styles.numero,]}>
              {me.phone}
            </Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <DropDownPicker
              style={[styles.input,{ zIndex: 9, width: "60%"} ]}
              placeholder="Voitures"
              open={open}
              items={items}
              setOpen={setOpen}
              setValue={setSelectedValue} // Use setSelectedValue as the setValue prop
              setItems={setItems}
              dropDownContainerStyle={{ backgroundColor: 'ffffff', width: '60%',marginTop:10, }}
            /><TouchableOpacity
              style={[ styles.input,styles.addbtn]}>
              <Image
                style={[
                ]}
                contentFit="cover"
                source={require("../assets/vector3.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.buttons, { backgroundColor: "#0075fd" }]}
          onPress={() => navigation.navigate("Modifier")}
        >
          <Text style={[styles.signTypo, { color: "#ffffff" }]}>Modifier</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.blue, styles.buttons]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={[styles.blue, styles.signTypo]}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.red, styles.buttons]}
        >
          <Text style={[styles.red, styles.signTypo]}>Supprimer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centrer: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleTypo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",

    fontSize: 23,

    color: Color.textColorContentTertiary,
    width: 229,
    textAlign: "center",
    height: 33,
  },
  text1Typo: {
    color: Color.titleText,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  iconLayout: {
    width: 24,
    overflow: "hidden",
  },

  signTypo: {
    lineHeight: 24,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  buttons: {
    height: 59,
    width: 318,
    borderRadius: Border.br_3xs,
    shadowColor: Color.neutralWhite,
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  imageIcon: {
    width: 95,
    height: 95,
  },

  vectorIcon: {
    width: 12,
    height: 12,
  },
  text: {
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,


    marginLeft: 5,
    textAlign: "center",
  },
  vectorParent: {
    width: 90,
    height: 30,
    flexDirection: "row",
  },

  userprofile: {
    width: 340,
    height: "15%",
    flexDirection: "row",
    paddingTop: Padding.p_xl,
  },
 

  text1: {
    lineHeight: 24,
    textAlign: "right",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  flagForFlagAlgeriaSvgrepoIcon: {
    top: 1,
    left: 0,
    height: 23,
    position: "absolute",
  },
  parent: {
    width: 64,
    height: 24,
  },
  numero: {
    width: 201,
     marginLeft: 28,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    lineHeight: 23,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  input: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_lg,
    height: 60,
    borderWidth: 1,
    borderColor: Color.colorSilver_100,
    marginTop: 5,
    width: '80%',
    marginTop: 10,
    borderRadius: 8,
    flexDirection: "row",
  },



  inputs: {
    height: 333,
    width:"100%"
  },

  blue: {
    color: "#0075fd",
    borderColor: "#0075fd",
  },
  red: {
    color: "#ff4444",
    borderColor: "#ff4444",
  },
  main: {
    paddingBottom: 24,
    paddingTop: 20,
    backgroundColor: "#fff",
    width: '100%',
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },

  monprofil: {
    flex: 1,
  },

  addbtn: {
    height: 55,
    width: 55,
marginLeft:"-34%",
    marginTop: 13,
  }
});

export default MonProfil;

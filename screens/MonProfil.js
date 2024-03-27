import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { } from "react-native";
import { TextInput } from "react-native-gesture-handler";
export const me = {

  name: '',
  bdate: Date,
  phone: 1133333,
  email: 'jimmy@gmail.com',
  stars: 4.7,
  avis: 2,
  password: 'dzdzdzdz',
  image: require("../assets/image1.png"),
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
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "POLO", value: "POLO" },
    { label: "Maruti", value: "Maruti" },
  ]);
  const [selectedValue, setSelectedValue] = useState(null);
  const navigation = useNavigation();
  me.greet();

  return (
    <View style={styles.main}>
      <View style={[styles.userprofile, styles.centrer]}>
        <Image
          style={styles.imageIcon}
          source={me.image}
        />
        <View style={[styles.centrer]}>
          <Text style={[styles.titleTypo]}>
            {me.name}
          </Text>
          <View style={[styles.centrer, { flexDirection: "row" }]}>
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
        <View style={[styles.rectangle]}>
          <Text style={[styles.numero]}>
            {me.email}
          </Text>
        </View>
        <View style={[styles.rectangle, { alignItems: "center" }]}>
          <Image
            style={[styles.alg]}
            contentFit="cover"
            source={require("../assets/flagforflagalgeria-svgrepocom1.png")}
          />
          <Text style={[styles.signTypo]}>+213</Text>
          <Text style={[styles.numero]}>
            {me.phone}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <DropDownPicker
            style={[styles.rectangle, { zIndex: 9, width: "60%" }]}
            placeholder="Voitures"
            placeholderStyle={styles.numero}
            open={open}
            items={items}
            setOpen={setOpen}
            setValue={setSelectedValue}
            setItems={setItems}
            dropDownContainerStyle={styles.drop}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => { setModalVisible(!modalVisible); }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <TextInput></TextInput>
              <TextInput></TextInput>
              <TextInput></TextInput>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={[styles.rectangle, styles.addbtn, styles.centrer]}>
            <Image
              style={[styles.addicon]}
              contentFit="cover"
              source={require("../assets/add.svg")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btns}>
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
  addicon: {
    height: 40,
    width: 40,
  },
  centrer: {
    justifyContent: "center",
    alignItems: "center",
  },
  numero: {
    marginLeft: 15,
    color: "#7d7d7d",
    fontSize: 17,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
  },
  titleTypo: {
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    fontSize: 23,
    color: "#5a5a5a",
    textAlign: "center",
    marginTop: "4%",
  },
  signTypo: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
  },
  text: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
    marginLeft: 5,
  },

  userprofile: {
    width: "100%",
    paddingTop: "12%",
    height: "30%",
    borderWidth: 1,
  },
  buttons: {
    height: 59,
    width: 318,
    borderRadius: 10,
    shadowColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageIcon: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#0075fd",

  },
  vectorIcon: {
    width: 12,
    height: 12,
  },

  alg: {
    marginLeft: 15,
    height: 23,
    width: 24,
  },

  rectangle: {
    alignItems: "center",
    // paddingHorizontal: 18,
    height: 60,
    borderWidth: 1,
    borderColor: "#b8b8b8",
    width: '80%',
    marginTop: 15,
    borderRadius: 8,
    flexDirection: "row",
  },
  inputs: {
    height: "40%",
    width: "100%",
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
    paddingBottom: "5%",
    backgroundColor: "#fff",
    width: '100%',
    alignItems: "center",
    flex: 1,
  },
  drop: {
    backgroundColor: 'ffffff',
    width: '60%',
    marginTop: 10,
    borderColor: "#b8b8b8"
  },
  addbtn: {
    height: 55,
    width: 55,
    marginLeft: "-34%",
    marginTop: 13,
  },
  btns: {
    height: "27%",
    justifyContent: "space-between",
  },


  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 50,
  },




});

export default MonProfil;
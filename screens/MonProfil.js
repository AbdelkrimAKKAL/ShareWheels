import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator  } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import {} from "react-native";
import { useAuth } from "../context/AuthContext";
import { Alert } from "react-native";
import axios from "axios";
import { useProfile, cars } from '../context/ProfileContext';
import { myip } from "../App";
const MonProfil = () => {
  const { profileData, updateProfileData } = useProfile();
  const {cars, updateCars} = useProfile();

  const { user, logout } = useAuth();
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState(require("../assets/image1.png"))
  const [email, setEmail] = useState("");
  const [items, setItems] = useState([
    { label: "POLO", value: "POLO" },
    { label: "Maruti", value: "Maruti" },
  ]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    logout();
    navigation.navigate("WelcomeScreen");
  };

  useEffect(() => {
    setEmail(user)
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://` + myip + `:3000/api/getUserData/${email}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
          setEmail(data.user.email);
          setPhone(data.user.num_tel);
          setName(data.user.nom+' '+data.user.prenom);
          console.log('hello');
          updateProfileData({ email: email, phone: phone, name: name,photo: photo });
          updateCars(data.cars)
          console.log(cars)
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [email, phone, name]);
  

  
  return (
    <View style={pstyles.main}>
      <View style={[pstyles.userprofile, pstyles.centrer]}>
        <Image style={pstyles.imageIcon} source={photo} />
        <View style={[pstyles.centrer]}>
          <Text style={[pstyles.titleTypo]}>{name}</Text>
          <View style={[pstyles.centrer, { flexDirection: "row" }]}>
            <Image
              style={pstyles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector3.png")}
            />
            <Text style={pstyles.text}>4.2 (3) </Text>
          </View>
        </View>
      </View>
      <View style={[pstyles.inputs, pstyles.centrer]}>
        <View style={[pstyles.rectangle]}>
          <Text style={[pstyles.font]}>{email}</Text>
        </View>
        <View style={[pstyles.rectangle, { alignItems: "center" }]}>
          <Image
            style={[pstyles.alg]}
            contentFit="cover"
            source={require("../assets/flagforflagalgeria-svgrepocom1.png")}
          />
          <Text style={[pstyles.signTypo]}>+213</Text>
          <Text style={[pstyles.font]}>{phone}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <DropDownPicker
            style={[pstyles.rectangle, { zIndex: 9, width: "60%" }]}
            placeholder="Voitures"
            placeholderStyle={pstyles.font}
            open={open}
            items={items}
            setOpen={setOpen}
            setValue={setSelectedValue}
            setItems={setItems}
            dropDownContainerStyle={pstyles.drop}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("Voiture")}
            style={[pstyles.rectangle, pstyles.addbtn, pstyles.centrer]}
          >
            <Image
              style={[pstyles.addicon]}
              contentFit="cover"
              source={require("../assets/add.svg")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={pstyles.btns}>
        <TouchableOpacity
          style={[pstyles.buttons, { backgroundColor: "#0075fd" }]}
          onPress={() => navigation.navigate("Modifier")}
        >
          <Text style={[pstyles.signTypo, { color: "#ffffff" }]}>Modifier</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[pstyles.buttons, pstyles.blue]}
          onPress={handleLogout}
        >
          <Text style={[pstyles.blue, pstyles.signTypo]}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[pstyles.buttons, pstyles.red]}>
          <Text style={[pstyles.signTypo, pstyles.red]}>Supprimer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const pstyles = StyleSheet.create({
  addicon: {
    height: 40,
    width: 40,
  },
  centrer: {
    justifyContent: "center",
    alignItems: "center",
  },
  font: {
    paddingLeft: 15,
    color: "#7d7d7d",
    fontSize: 17,
    fontFamily: "Poppins-Medium",
  },
  titleTypo: {
    fontFamily: "Poppins-Medium",
    fontSize: 23,
    color: "#5a5a5a",
    textAlign: "center",
    marginTop: "4%",
  },
  signTypo: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Poppins-Medium",
  },
  text: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
    marginLeft: 5,
  },
  userprofile: {
    width: "100%",
    height: "30%",
  },
  buttons: {
    height: 59,
    width: "76%",
    borderRadius: 13,
    borderWidth: 1,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "transparent",
  },
  imageIcon: {
    width: 120,
    height: 120,
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
    height: 60,
    borderWidth: 1,
    borderColor: "#b8b8b8",
    width: "80%",
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
    paddingTop: "12%",
    paddingBottom: "5%",
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
  drop: {
    backgroundColor: "white",
    width: "60%",
    marginTop: 10,
    borderColor: "#b8b8b8",
  },
  addbtn: {
    height: 55,
    width: 55,
    marginLeft: "-34%",
    marginTop: 17,
  },
  btns: {
    height: "27%",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});

export default MonProfil;

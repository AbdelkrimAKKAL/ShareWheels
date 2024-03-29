import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { pstyles } from "./MonProfil";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
const Mdp = () => {
  const navigation = useNavigation();

  return (
    <View style={pstyles.main}>
      <Text style={styles.voiture}>Mdp</Text>
      <Text style={styles.number}>ancien</Text>
      <TextInput style={styles.input}
      defaultValue={"eze"}>
      </TextInput>
      <Text style={styles.number}>Matricule</Text>
      <TextInput style={styles.input}
      defaultValue="00">
      </TextInput>
      <Text style={styles.number}>Couleur</Text>
      <TextInput style={styles.input}
      defaultValue="re">
      </TextInput>
      <TouchableOpacity style={[pstyles.buttons, { backgroundColor: "#0075fd" }]}>
        <Text style={[pstyles.signTypo, { color: "#ffffff" }]}>Confirmer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  voiture: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
    color: "#2d2d2d",
    marginBottom: 60,
  },
  number: {
    marginBottom: 8,
    fontSize: 17,
    alignSelf: "baseline",
    fontFamily: "Nunito-Regular",
    marginLeft: 50,
  },

  input: {
    paddingLeft:20,
    color:"#2d2d2d",
    marginBottom: 22,
    width: "75%",
    height: 55,
    borderWidth: 1,
    borderColor: "rgba(124, 124, 124, 0.2)",
    borderRadius: 16,
  },

});

export default Mdp;

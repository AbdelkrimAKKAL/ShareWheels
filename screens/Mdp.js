import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { pstyles } from "./MonProfil";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import TextBox from 'react-native-password-eye'; 
const Mdp = () => {
  const navigation = useNavigation();

  return (
    <View style={[pstyles.main,{paddingTop:"20%"}]}>
      <Text style={styles.number}>Ancien mot de passe</Text>
      <TextBox onChangeText={(text) => console.log('onChangeText: ', text)} 
      containerStyles={styles.input}
      secureTextEntry={true}
      eyeColor="rgba(124, 124, 124, 0.7)"
      placeholder="Old password"/>
      
      <Text style={styles.number}>Nouveau mot de passe</Text>
      <TextBox onChangeText={(text) => console.log('onChangeText: ', text)} 
      containerStyles={styles.input}
      secureTextEntry={true}
      eyeColor="rgba(124, 124, 124, 0.7)"
      placeholder="New password"/>
      <Text style={styles.number}>Confirmation</Text>
      <TextBox onChangeText={(text) => console.log('onChangeText: ', text)} 
      containerStyles={styles.input}
      secureTextEntry={true}
      eyeColor="rgba(124, 124, 124, 0.7)"
      placeholder="Confirm password"/>
      <TouchableOpacity style={[pstyles.buttons, { backgroundColor: "#0075fd" }]}>
        <Text style={[pstyles.signTypo, { color: "#ffffff" }]}>Confirmer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  number: {
    marginBottom: 8,
    fontSize: 17,
    alignSelf: "baseline",
    fontFamily: "Nunito-Regular",
    marginLeft: 50,
  },

  input: {
    paddingRight:10,
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

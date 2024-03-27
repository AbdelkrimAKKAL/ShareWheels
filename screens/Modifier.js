import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { pstyles } from "./MonProfil.js";
import { me } from "./MonProfil.js";

const Modifier = () => {
  const navigation = useNavigation();

  return (
    <View style={pstyles.main}>
      <View >
        <Image
          style={pstyles.imageIcon}
          contentFit="cover"
          source={me.image}
        />
        <TouchableOpacity style={styles.edtbtn}>
          <Image
            style={{ height: 20, width: 20 }}
            contentFit="contain"
            source={require("../assets/edit.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Text style={styles.titres}>Modifier Nom</Text>
        <TextInput style={[pstyles.rectangle]}
          defaultValue={me.name}
          onSubmitEditing={event => {
            me.setname(event.nativeEvent.text)
            console.log('Submitted:', event.nativeEvent.text);
          }}
        />
        <Text style={[styles.titres]}>Modifier date de naissance</Text>
        <TextInput style={[pstyles.rectangle]}
          defaultValue={me.bdate} />
        <Text style={[styles.titres]}>Modifier mail</Text>
        <TextInput
          style={[pstyles.rectangle]}
          defaultValue={me.email}
        />
         <Text style={[styles.titres]}>Modifier numéro de téléphone</Text>
        <View style={[pstyles.rectangle, { alignItems: "center" }]}>
          <Image
            style={[pstyles.alg]}
            contentFit="cover"
            source={require("../assets/flagforflagalgeria-svgrepocom1.png")}
          />
          <Text style={[pstyles.signTypo]}>+213</Text>
          <TextInput 
          style={[pstyles.numero,{width:"60%"}]}
          defaultValue={me.phone}
          keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={[pstyles.buttons, ]}>
          <Text style={[ pstyles.signTypo]}>Modifier Mot de passe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[pstyles.buttons, { backgroundColor: "#0075fd" }]}>
          <Text style={[pstyles.signTypo,{color:"white"}]}>Confirmer</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
me.greet();
const styles = StyleSheet.create({
  edtbtn: {
    height: 25,
    width: 25,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 8,
    bottom: 8,
    backgroundColor: "lightgrey",
    borderRadius: 10
  },
  titres: {
    marginLeft:"11%",
    marginTop: "5%",
    marginBottom:-20,
    alignSelf:"baseline",
    color: "#5a5a5a",
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
});

export default Modifier;
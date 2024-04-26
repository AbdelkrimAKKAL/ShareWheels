import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { pstyles } from "./MonProfil.js";
import { launchImageLibraryAsync } from 'expo-image-picker';
import { requestMediaLibraryPermissionsAsync } from 'expo-image-picker';
import { useProfile } from '../context/ProfileContext.js';

const Modifier = () => {
  const navigation = useNavigation();
  const { profileData } = useProfile();

  const [imgUrl, setImgUrl] = useState(profileData.photo);

  const openGallery = async () => {
    try {
      const { status } = await requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access media library was denied');
        return;
      }
      const result = await launchImageLibraryAsync({
        mediaTypes: 'Images',
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        const selectedUri = result.assets[0].uri.toString(); 
        setImgUrl(selectedUri);
      }
    } catch (error) {
      console.log('Error while opening gallery:', error);
    }
  };

  return (
    <View style={pstyles.main}>
      <View >
        <Image
          style={pstyles.imageIcon}
          resizeMode="cover"
          source={imgUrl}
        />
        <TouchableOpacity style={styles.edtbtn} onPress={openGallery}>
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
        <TextInput style={[pstyles.font,pstyles.rectangle]}
          defaultValue={profileData.name}
        />

        <Text style={[styles.titres]}>Modifier mail</Text>
        <TextInput
          style={[pstyles.font,pstyles.rectangle]}
          defaultValue={profileData.email}
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
          style={[pstyles.font,{width:"60%"}]}
          defaultValue={profileData.phone}
          keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
        onPress={() => navigation.navigate("Mdp")}
         style={[pstyles.buttons ]}>
          <Text style={[ pstyles.signTypo,{textDecorationLine:"underline"}]}>Modifier Mot de passe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[pstyles.buttons, { backgroundColor: "#0075fd" }]}>
          <Text style={[pstyles.signTypo,{color:"white"}]}>Confirmer</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
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
    marginBottom:-12,
    alignSelf:"baseline",
    color: "#5a5a5a",
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
});

export default Modifier;


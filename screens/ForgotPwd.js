import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { pstyles } from "./MonProfil";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { Alert } from "react-native";
import { Border, Color, Padding,FontSize, FontFamily } from "../GlobalStyles";
import { useState } from "react";

const ForgotPwd = () => {
  const navigation = useNavigation();

  const [gmail, setGmail] = useState("");

  const GoToGmailMessage = () => {
    if (gmail.trim() === '') {
      Alert.alert('Alert', 'Input Vide!');
    } else {
      Alert.alert(
        "Consultez votre boîte de réception Gmail",
        "pour trouver un email contenant les instructions pour réinitialiser votre mot de passe.",
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login')
          }
        ]
      );
    }
  };

  return (
    <View style={[pstyles.main, { paddingTop: "20%" }]}>
      <Text style={styles.title}>CHANGE PASSWORD</Text>
      <Text style={styles.Soustitre}>votre gmail:</Text>

      <View style={styles.Input}>
        <TextInput placeholder="Gmail" style = {{width: 277}} value={gmail} onChangeText={(text) => setGmail(text)} />
      </View>

      <Pressable
        style={[styles.buttonfirst, { alignItems: "center" }]}
        onPress={GoToGmailMessage}
      >
        <Text style={[styles.heading, { fontSize: 16, color: "white" }]}>
          Confirmer
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignContent: "space-between"
  },


   title: {  
    fontSize: FontSize.size_5xl,
    height: 35,
    marginTop: 15,
    width: '100%',
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },

  Input: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: Border.br_base,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
    marginBottom: 15


  },
  buttonfirst: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorRoyalblue_100,
    shadowColor: "rgba(236, 95, 95, 0.25)",
    shadowRadius: 14,
    elevation: 14,
    width: 317,
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  Soustitre: {
    marginLeft:"11%",
    marginTop: "10%",
    marginBottom:10,
    alignSelf:"baseline",
    color: "#5a5a5a",
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
});

export default ForgotPwd;

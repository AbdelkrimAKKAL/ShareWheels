import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { ScrollView } from "react-native-gesture-handler";
import TextBox from "react-native-password-eye";
const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signUp]}>
      <Text style={styles.createAccount}>Create Account</Text>
      <ScrollView contentContainerStyle={styles.main}>
        <View style={styles.container}>
          <Image
            style={[styles.icon]}
            contentFit="cover"
            source={require("../assets/user.png")}
          />
          <TextInput
            style={[styles.numberTypo]}
            placeholder="Nom"
          />
        </View>
        <View style={styles.container}>
          <Image
            style={[styles.icon]}
            contentFit="cover"
            source={require("../assets/user.png")}
          />
          <TextInput
            style={[styles.numberTypo]}
            placeholder="Prenom"
          />
        </View>
        <View style={[styles.container]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/stylestroke.png")}
          />
          <TextInput
            style={[styles.number, styles.numberTypo]}
            placeholder="Mail"
          />
        </View>
        <View style={[styles.container]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/flagforflagalgeria-svgrepocom2.png")}
          />
          <Text style={[]}>+213</Text>
          <TextInput
            style={[styles.number2, styles.numberTypo]}
            placeholder="Numero de Telephone"
          />
        </View>
        <View style={[styles.container]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group1.png")}
          />
          {/* <DropDownPicker
            style={[{ zIndex: 9, width: "60%" }]}
            placeholder="Genre"
        
            // open={open}
            // items={items}
            // setOpen={setOpen}
            // setValue={setSelectedValue}
            // setItems={setItems}
            // dropDownContainerStyle={pstyles.drop}
          /> */}
        </View>

        <View style={[styles.container]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/password.png")}
          />
          <TextBox onChangeText={(text) => console.log('onChangeText: ', text)}
            containerStyles={{ width: "90%", marginLeft: 10, }}
            secureTextEntry={true}
            eyeColor="#7c7c7c"
            placeholder="Password"
            placeholderTextColor="#7c7c7c"
          />
        </View>
        <Pressable
          style={[styles.buttonfirst]}
          onPress={() => navigation.navigate("MonProfil")}
        >
          <Text style={[styles.textTypo]}>Sign up</Text>
        </Pressable>
        <Pressable
          style={styles.alreadyHaveAnContainer}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.text1}>
            <Text style={styles.alreadyHaveAn}>Already have an account?  </Text>
            <Text style={styles.signIn}>Sign In</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  numberTypo: {
    marginLeft: 12,
    width: "100%",
    fontFamily: "Nunito-Regular",
    fontSize: 15,
    color: "#7c7c7c",
  },
  container: {
    marginTop: "3%",
    paddingHorizontal: 15,
    height: 57,
    width: "73%",
    borderWidth: 1,
    borderColor: "rgba(124, 124, 124, 0.2)",
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderRadius: 16,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textTypo: {
    color: "white",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },
  createAccount: {
    marginTop: "20%",
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "Nunito-Bold",
    color: "#2d2d2d",
    textAlign: "center",
  },
  icon: {
    width: 21,
    height: 22,
  },

  buttonfirst: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#0075fd",
    shadowColor: "rgba(236, 95, 95, 0.25)",
    shadowRadius: 14,
    elevation: 14,
    width: "75%",
    height: 58,
    marginTop: "5%",
    justifyContent: "center",
  },

  alreadyHaveAn: {
    color: "#7c7c7c",
  },

  signIn: {
    color: "#0075fd",
    textDecorationLine: "underline"
  },
  text1: {
    fontSize: 16,
    fontFamily: "Nunito-Regular",
    textAlign: "center",
  },
  alreadyHaveAnContainer: {
    marginTop: "2%",
    marginBottom: "3%",
  },
  main: {
    marginTop: "3%",
    alignItems: "center",
    Width: "100%",

  },

  signUp: {
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
});

export default SignUp;

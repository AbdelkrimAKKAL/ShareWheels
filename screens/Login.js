import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import TextBox from 'react-native-password-eye';
import { TextInput } from "react-native";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginpage}>
      <Text style={styles.login}>Login</Text>
      <View style={[styles.container]}>
        <Image
          style={styles.iconlylightlock}
          contentFit="cover"
          source={require("../assets/stylestroke.png")}
        />
        <TextInput placeholder="Email"
             placeholderTextColor="#7c7c7c" 
        style={{width:"100%"}} />
      </View>
      <View style={[styles.container]}>
        <Image
          style={styles.iconlylightlock}
          contentFit="cover"
          source={require("../assets/iconlylightlock.png")}
        />
        <TextBox onChangeText={(text) => console.log('onChangeText: ', text)} 
       containerStyles={{width:"88%"}}
      secureTextEntry={true}
      eyeColor="#7c7c7c"
      placeholder="Password"
      placeholderTextColor="#7c7c7c" 
      />
      </View>
      <Pressable  onPress={() => navigation.navigate("ForgotPwd")}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonfirst]}
        onPress={() => navigation.navigate("MonProfil")}
      >
        <Text style={[ styles.textTypo]}>Login</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.text}>
          <Text style={styles.dontYouHave}>Don't you have an account?  </Text>
          <Text style={styles.log}>Sign Up</Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color:"#FFFFFF",
    fontFamily:"Poppins-Medium",
    fontSize: 16,
  },
  login: {
    fontSize: 40,
    color:"#2d2d2d",
    fontFamily: "Nunito-Bold",
    marginBottom:"20%",
  },
  container: {
    marginBottom:"4%",
    paddingVertical: 16,
    paddingHorizontal: 15,
    width: "75%",
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:"#fff",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(80, 85, 136, 0.1)",
    borderColor: "#e5e5e5",
  },
  iconlylightlock: {
    width: 22,
    height: 22,
    marginRight: 15,
  },
  forgotPassword: {
    fontSize:15,
    color: "#7c7c7c",
    textAlign: "center",
    fontFamily: "Nunito-Bold",
    fontWeight: "700",
  },
  buttonfirst: {
    borderRadius: 15,
    backgroundColor:"#0075fd",
    shadowColor: "rgba(236, 95, 95, 0.25)",
    shadowRadius: 14,
    elevation: 14,
    width: "75%",
    height: 58,
    marginTop: 25,
    marginBottom:"2%",
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    alignItems: "center",
  },
  dontYouHave: {
    color:  "#7c7c7c",
  },
  log: {
    color: "#0075fd",
    textDecorationLine:"underline",
  },
  text: {
    fontFamily: "Nunito-Regular",
    fontSize:16,
  },
  loginpage: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#FCFAF6"
  },
});

export default Login;

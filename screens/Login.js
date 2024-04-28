import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import TextBox from "react-native-password-eye";
import { TextInput } from "react-native";
import { Alert } from "react-native";
import { useAuth } from "../context/AuthContext";
import env from '../env'; 


const Login = () => {
  const { login } = useAuth();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://"+env.API_IP_ADDRESS+":3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        }),
      });
      const data = await response.json();

      if (response.ok) {
        // Login successful, navigate to the profile screen
        login(email);
        navigation.popToTop();
      } else {
        // Login failed, show error message
        Alert.alert(
          "Error",
          data.error || "An error occurred while logging in"
        );
      }
    } catch (error) {
      console.error("Error logging in:", error);
      Alert.alert("Error", "An error occurred while logging in");
    }
  };

  return (
    <View style={styles.loginpage}>
      <Text style={styles.login}>Login</Text>
      <View style={[styles.container]}>
        <Image
          style={styles.iconlylightlock}
          contentFit="cover"
          source={require("../assets/stylestroke.png")}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#7c7c7c"
          style={{ width: "100%" }}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={[styles.container]}>
        <Image
          style={styles.iconlylightlock}
          contentFit="cover"
          source={require("../assets/iconlylightlock.png")}
        />
        <TextBox
          containerStyles={{ width: "88%" }}
          secureTextEntry={true}
          eyeColor="#7c7c7c"
          placeholder="Password"
          placeholderTextColor="#7c7c7c"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Pressable onPress={() => navigation.navigate("ForgotPwd")}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </Pressable>
      <TouchableOpacity style={[styles.buttonfirst]} onPress={handleLogin}>
        <Text style={[styles.textTypo]}>Login</Text>
      </TouchableOpacity>
      <Pressable onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.text}>
          <Text style={styles.dontYouHave}>Don't you have an account? </Text>
          <Text style={styles.log}>Sign Up</Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: "#FFFFFF",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },
  login: {
    fontSize: 40,
    color: "#2d2d2d",
    fontFamily: "Nunito-Bold",
    marginBottom: "20%",
  },
  container: {
    marginBottom: "4%",
    paddingVertical: 16,
    paddingHorizontal: 15,
    width: "75%",
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
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
    fontSize: 15,
    color: "#7c7c7c",
    textAlign: "center",
    fontFamily: "Nunito-Bold",
    fontWeight: "700",
  },
  buttonfirst: {
    borderRadius: 15,
    backgroundColor: "#0075fd",
    shadowColor: "rgba(236, 95, 95, 0.25)",
    shadowRadius: 14,
    elevation: 14,
    width: "75%",
    height: 58,
    marginTop: 25,
    marginBottom: "2%",
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    alignItems: "center",
  },
  dontYouHave: {
    color: "#7c7c7c",
  },
  log: {
    color: "#0075fd",
    textDecorationLine: "underline",
  },
  text: {
    fontFamily: "Nunito-Regular",
    fontSize: 16,
  },
  loginpage: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default Login;

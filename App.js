const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Recherche from "./screens/Recherche";
import Details from "./screens/Details";
import Modifier from "./screens/Modifier";
import Voiture from "./screens/Voiture";
import Signaler from "./screens/Signaler";
import Aajouter from "./screens/Aajouter";
import Dates from "./screens/Dates";
import CarpoolPasses from "./screens/CarpoolPasses";
import MonProfil from "./screens/MonProfil";
import AjouterAnnonce from "./screens/AjouterAnnonce";
import CarpoolVenir from "./screens/CarpoolVenir";
import YourRides from "./screens/YourRides";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import ResultatRecherche from "./screens/ResultatRecherche";
import Profile from "./screens/Profile";
import Annonce from "./components/Annonce";
import MesAnnonces from "./components/MesAnnonces";
import Evaluer from "./components/Evaluer";
import FooterProfile from "./components/FooterProfile";
import FooterCarpool from "./components/FooterCarpool";
import FooterPublish from "./components/FooterPublish";
import FooterYourRides from "./components/FooterYourRides";
import FooterSearch from "./components/FooterSearch";
import ButtonsSwitch from "./components/ButtonsSwitch";
import ButtonSecondary from "./components/ButtonSecondary";
import Buttonfirst from "./components/Buttonfirst";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-ExtraBold": require("./assets/fonts/Nunito-ExtraBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Recherche"
              component={Recherche}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Details"
              component={Details}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Modifier"
              component={Modifier}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Voiture"
              component={Voiture}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signaler"
              component={Signaler}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Aajouter"
              component={Aajouter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dates"
              component={Dates}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CarpoolPasses"
              component={CarpoolPasses}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MonProfil"
              component={MonProfil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AjouterAnnonce"
              component={AjouterAnnonce}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CarpoolVenir"
              component={CarpoolVenir}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="YourRides"
              component={YourRides}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResultatRecherche"
              component={ResultatRecherche}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

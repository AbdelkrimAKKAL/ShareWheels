const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import Recherche from "./screens/Recherche";
import Details from "./screens/Details";
import Modifier from "./screens/Modifier";
import Voiture from "./screens/Voiture";
import Signaler from "./screens/Signaler";
import DatailsAjouter from "./screens/DatailsAjouter";
import Dates from "./screens/Dates";
import CarpoolPasses from "./screens/CarpoolPasses";
import MonProfil from "./screens/MonProfil";
import AjouterAnnonce from "./screens/AjouterAnnonce";
import CarpoolVenir from "./screens/CarpoolVenir";
import YourRides from "./screens/YourRides";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import ResultatRecherche from "./screens/ResultatRecherche";
import Annonce from "./components/Annonce";
import MesAnnonces from "./components/MesAnnonces";
import Evaluer from "./components/Evaluer";
import ButtonsSwitch from "./components/ButtonsSwitch";
import Profile from "./screens/Profile";
import ShowCalendar from "./components/calendrier";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Padding } from "./GlobalStyles";

const SearchName = "Search";
const YourRidesName = "Your Rides";
const PublishName = "Publish";
const CarpoolsName = "Carpools";
const ProfileName = "Profile";
const calendrier = "";

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
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen
              name="calendrier"
              component={ShowCalendar}
              options={{ headerShown: false }}
            />
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
              name="DatailsAjouter"
              component={DatailsAjouter}
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
const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName={SearchName}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let rn = route.name;

        if (rn === SearchName) {
          iconName = focused ? (
            <Image contentFit="cover" source={require("./assets/search.png")} />
          ) : (
            <Image
              contentFit="cover"
              source={require("./assets/search1.png")}
            />
          );
        } else if (rn === YourRidesName) {
          iconName = focused ? (
            <Image
              contentFit="cover"
              source={require("./assets/format-list-bulleted1.png")}
            />
          ) : (
            <Image
              contentFit="cover"
              source={require("./assets/format-list-bulleted.png")}
            />
          );
        } else if (rn === PublishName || rn === CarpoolPasses) {
          iconName = focused ? (
            <Image
              contentFit="cover"
              source={require("./assets/add-circle-outline1.png")}
            />
          ) : (
            <Image
              contentFit="cover"
              source={require("./assets/add-circle-outline.png")}
            />
          );
        } else if (rn === CarpoolsName) {
          iconName = focused ? (
            <Image
              contentFit="cover"
              source={require("./assets/sharecircle-svgrepocom2.png")}
            />
          ) : (
            <Image
              contentFit="cover"
              source={require("./assets/sharecircle-svgrepocom5.png")}
            />
          );
        } else if (rn === ProfileName) {
          iconName = focused ? (
            <Image
              contentFit="cover"
              source={require("./assets/profile1.png")}
            />
          ) : (
            <Image
              contentFit="cover"
              source={require("./assets/profile.png")}
            />
          );
        }

        return iconName;
      },

      tabBarStyle: {
        alignContent: "center",
        justifyContent: "center",
        height: 60,
        flexDirection: "row",
      },
      tabBarLabelStyle: {
        fontSize: 11,
        marginBottom: 9,
        marginTop: -8,
      },
    })}
  >
    <Tab.Screen
      name={SearchName}
      component={SearchStackScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name={YourRidesName}
      component={YourRidesStackScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name={PublishName}
      component={PublishStackScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name={CarpoolsName}
      component={CarpoolsStackScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name={ProfileName}
      component={ProfileScreen}
      options={{ headerShown: false }}
    />

    
  </Tab.Navigator>
);



const SearchStackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Recherche" component={Recherche} />
    <Stack.Screen name="ResultatRecherche" component={ResultatRecherche} />
    <Stack.Screen name="Details" component={Details} />
    <Stack.Screen name="calendrier" component={ShowCalendar} />
  </Stack.Navigator>
);

const YourRidesStackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="YourRides" component={YourRides} />
  </Stack.Navigator>
);

const PublishStackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AjouterAnnonce" component={AjouterAnnonce} />
    <Stack.Screen name="Dates" component={Dates} />
    <Stack.Screen name="Voiture" component={Voiture} />

    

  </Stack.Navigator>
);

const CarpoolsStackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="CarpoolVenir" component={CarpoolVenir} />
    <Stack.Screen name="CarpoolPasses" component={CarpoolPasses} />
    <Stack.Screen name="Signaler" component={Signaler} />
  </Stack.Navigator>
);

const ProfileScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MonProfil" component={MonProfil} />
    <Stack.Screen name="Modifier" component={Modifier} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Login" component={Login} />

  </Stack.Navigator>
);

export default App;

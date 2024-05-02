import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,FlatList
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";
import Evaluer from "../components/Evaluer";
import TopBar from "../components/TopBar";
import Annonce from "../components/Annonce";
import { RechercheStyles } from "./Recherche";
import NotAuth from "../components/notAuth";
import { useAuth } from "../context/AuthContext";
import { YourRidesStyles } from "./YourRides";
import DirPhoto from "../assets/Tablet login-bro.png";
import DirePhoto2 from "../assets/Locationph.png";
import { timestampToDateTime } from "./ResultatRecherche";
import axios from "axios";
import env from "../env";
import { useRefresh } from "../context/refresh";
import { ResultatRechercheStyles } from "./ResultatRecherche";
import { ActivityIndicator } from "react-native";

const Carpools = () => {
  const [activeButton, setActiveButton] = useState(0); // "venir" or "passes"
  const [isParticipated, setIsParticipated] = useState(false); //participated or not
  const [isHistory, setIsHistory] = useState(false); //history available or not

  const refresh = useRefresh();
  const [dataVenir, setDataVenir] = useState([]);
  const [dataPasses, setDataPasses] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();
  const { user } = useAuth();

  const fetchDataFromDatabasePasses = async () => {
    try {
      const response = await axios.get(
        `http://${env.API_IP_ADDRESS}:3000/api/getPassedRides`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          params: {
            email: user.user.email,
          },
        }
      );

      setDataPasses(response.data);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDataFromDatabaseVenir = async () => {
    try {
      const response = await axios.get(
        `http://${env.API_IP_ADDRESS}:3000/api/getIncomingRides`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          params: {
            email: user.user.email,
          },
        }
      );

      setDataVenir(response.data);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchDataFromDatabasePasses();
      fetchDataFromDatabaseVenir();
    }
  }, [refresh, user]);

  const renderItemVenir = ({ item }) => {
    const { date, time } = timestampToDateTime(item.timestamp);

    return (
      <Annonce
        trajetId={item.id_trajet}
        name={`${item.nom} ${item.prenom}`}
        rating={item.total_rating}
        nbrRatings={item.num_ratings}
        startLocation={item.depart}
        endLocation={item.arrivee}
        price={item.prix}
        vehicle={item.modele}
        time={time}
        date={date}
        availableSeats={item.nbr_place}
        btnText="Supprimer"
      />
    );
  };

  const renderItemPasses = ({ item }) => {
    const { date, time } = timestampToDateTime(item.timestamp);

    return (
      <Evaluer
        trajetId={item.id_trajet}
        name={`${item.nom} ${item.prenom}`}
        rating={item.total_rating}
        nbrRatings={item.num_ratings}
        startLocation={item.depart}
        endLocation={item.arrivee}
        price={item.prix}
        vehicle={item.modele}
        time={time}
        date={date}
        availableSeats={item.nbr_place}
      />
    );
  };

  if (!user) {
    return (
      <View style={YourRidesStyles.container}>
        <TopBar />
        <Text
          style={[YourRidesStyles.title]}
        >
          Carpools
        </Text>
        <NotAuth title="Besoin de se connecter/s'inscrire" photo={DirPhoto} />
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("WelcomeScreen")}
          >
            <Image
              style={[{ width: 50, height: 50, marginTop: -150 }]}
              contentFit="cover"
              source={require("../assets/next.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }else{

  return (
    <View style={[styles.container, styles.rectangleLayout]}>
      <TopBar />
      <Text style={[styles.carpools, styles.carpoolsTypo]}>Carpools</Text>
      <View style={[styles.buttonContainer, styles.trajetFlexBox]}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 0 ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => setActiveButton(0)}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === 0
                ? styles.buttonTextActive
                : styles.buttonTextInactive,
            ]}
          >
            A venir
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 1 ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => setActiveButton(1)}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === 1
                ? styles.buttonTextActive
                : styles.buttonTextInactive,
            ]}
          >
            Passés
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        {activeButton === 0 ? (
          isLoading ? (
            <ActivityIndicator
              size="large"
              color="#0075fd"
              style={ResultatRechercheStyles.loadingIndicator}

            />
          ) : (
            <FlatList
              data={dataVenir}
              renderItem={renderItemVenir}
              keyExtractor={(item) => item.id_trajet.toString()}
              ListEmptyComponent={
                <View style={[{ marginTop: "40%" }]}>
                  <NotAuth
                    title={"Les prochains trajets publiés\napparaîtront ici"}
                    photo={DirePhoto2}
                  />
                </View>
              }
            />
          )
        ) : isLoading ? (
          <ActivityIndicator
            size="large"
            color="#0075fd"
            style={ResultatRechercheStyles.loadingIndicator}
          />
        ) : (
          <FlatList
            data={dataPasses}
            renderItem={renderItemPasses}
            keyExtractor={(item) => item.id_trajet.toString()}
            ListEmptyComponent={
              <View style={[{ marginTop: "40%" }]}>
                <NotAuth
                  title={"Les prochains trajets publiés\napparaîtront ici"}
                  photo={DirePhoto2}
                />
              </View>
            }
          />
        )}
      </View>
    </View>
  );};
};
const styles = StyleSheet.create({
  needLogin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  authenticateButton: {
    backgroundColor: "blue", // Example background color for the button
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    margin: 15,
  },

  container: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
  },


  button: {
    width: 100,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: Border.br_3xs,
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 0.9,
    marginHorizontal: 5,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextActive: {
    fontWeight: "800",
    textAlign: "center",
    fontSize: FontSize.size_mini,
    color: Color.neutralWhite,
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
  },
  buttonTextInactive: {
    fontWeight: "800",
    textAlign: "center",
    fontSize: FontSize.size_mini,
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
  },
  activeButton: {
    backgroundColor: Color.colorRoyalblue_100,
  },
  inactiveButton: {
    backgroundColor: Color.neutralWhite,
  },

  rectangleLayout: {
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
  carpoolsTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorDarkslategray_100,
  },

  carpools: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    marginTop: 15,
  },

  Carpools: {
    flex: 1,
    height: 834,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },

  trajetFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  main: {
    height: 614,
    alignItems: "center",
  },
});
export default Carpools;

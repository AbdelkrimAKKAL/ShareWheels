import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";
import TopBar from "../components/TopBar";
import { RechercheStyles } from "./Recherche";


const Details = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const route = useRoute();
  const photo = route.params?.photo;
  const details = route.params?.details;
  const couleur = route.params?.couleur;
  const matricule = route.params?.matricule;
  const modele = route.params?.modele;
  const genre = route.params?.genre;
  const rating = route.params?.rating;
  const nbr_ratings = route.params?.nbr_ratings;
  const name = route.params?.name;
  const email = route.params?.email;
  const num_tel = route.params?.num_tel;
  const availableSeats = route.params.availableSeats;

  const depart = route.params?.depart;
  const destination = route.params?.destination;


  useEffect(() => {
    setData(details);
  }, []);

  return (
    <View style={styles.details}>
      <TopBar />
      <View style={styles.main}>
        <View style={[styles.userprofile, styles.inputFlexBox]}>
          <Image
            style={[{ width: 95, height: 95 }]}
            contentFit="cover"
            source={require("../assets/image.png")}
          />
          <View style={styles.NameAndRate}>
            <Text style={[styles.nom, { fontSize: 20, fontWeight: "500" }]}>
              {name}
            </Text>
            <View style={[styles.inputFlexBox, {}]}>
              <Image
                style={[{ width: 12, height: 12 }]}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
              <Text
                style={[
                  styles.nom,
                  {
                    fontWeight: "700",
                    fontSize: FontSize.size_mini,
                    marginLeft: 5,
                  },
                ]}
              >
                {rating + " (" + nbr_ratings + ")"}
              </Text>
            </View>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.detailsframe}>
          <View style={styles.container}>
            <View style={[styles.BorderInput, { height: 60 }]}>
              <Text style={[styles.ProfileInfoText, styles.TextStyle]}>
                {email}
              </Text>
            </View>
            <View
              style={[
                styles.BorderInput,
                {
                  height: 60,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  paddingLeft: 20,
                  alignItems: "center",
                },
              ]}
            >
              <View style={styles.Algeria}>
                <Image
                  style={[{ width: 24, height: 23, overflow: "hidden" }]}
                  contentFit="cover"
                  source={require("../assets/flagforflagalgeria-svgrepocom.png")}
                />
                <Text style={[styles.TextStyle]}>+213</Text>
              </View>
              <Text style={[styles.TextStyle, { marginLeft: 15 }]}>
                {num_tel}
              </Text>
            </View>

            <View style={[styles.BorderInput, { width: 328, height: 60 }]}>
              <Text style={[styles.ProfileInfoText, styles.TextStyle]}>
                {genre}
              </Text>
            </View>
          </View>

          <Text style={[styles.TextAlign, styles.TextStyle]}>
            Date et heure
          </Text>
          <View style={styles.BorderInput}>
            <View style={[RechercheStyles.DateHeure]}>
              <View style={[RechercheStyles.Inputs, { width: 184 }]}>
                <Image
                  style={[RechercheStyles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/mappin2.png")}
                />
                <Text style={[RechercheStyles.inputText, { marginLeft: 10 }]}>
                  Date
                </Text>
              </View>
              <View style={[RechercheStyles.Inputs, { width: 99 }]}>
                <Image
                  style={[RechercheStyles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/clock31.png")}
                />
                <Text style={[RechercheStyles.inputText, { marginLeft: 5 }]}>
                  Heure
                </Text>
              </View>
            </View>

            <View style={[RechercheStyles.DateHeure]}>
              <View style={[RechercheStyles.Inputs, { width: 184 }]}>
                <Image
                  style={[RechercheStyles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/mappin2.png")}
                />
                <Text style={[RechercheStyles.inputText, { marginLeft: 10 }]}>
                  Date
                </Text>
              </View>
              <View style={[RechercheStyles.Inputs, { width: 99 }]}>
                <Image
                  style={[RechercheStyles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/clock31.png")}
                />
                <Text style={[RechercheStyles.inputText, { marginLeft: 5 }]}>
                  Heure
                </Text>
              </View>
            </View>
          </View>

          <Text style={[styles.TextAlign, styles.TextStyle]}>Voiture</Text>
          <View style={styles.BorderInput}>
            <Text style={styles.TitleText}>Model</Text>
            <View
              style={[RechercheStyles.Inputs, { width: 284, marginTop: 10 }]}
            >
              <Text style={[RechercheStyles.inputText]}>{modele}</Text>
            </View>

            <Text style={[styles.TitleText, { marginTop: 10 }]}>matricule</Text>
            <View
              style={[RechercheStyles.Inputs, { width: 284, marginTop: 10 }]}
            >
              <Text style={[RechercheStyles.inputText]}>{matricule}</Text>
            </View>

            <Text style={[styles.TitleText, { marginTop: 10 }]}>couleur</Text>
            <View
              style={[RechercheStyles.Inputs, { width: 284, marginTop: 10 }]}
            >
              <Text style={RechercheStyles.inputText}>{couleur}</Text>
            </View>

            <View style={[styles.nmbrplaces, styles.inputFlexBox]}>
              
              <Text style={[styles.TitleText, { width: 160, marginLeft: 10 }]}>
                Places Disponible
              </Text>
              <View
                style={[
                  RechercheStyles.Inputs,
                  { width: 55, justifyContent: "center" },
                ]}
              >
                <Image
                  style={[RechercheStyles.Icon]}
                  contentFit="cover"
                  source={require("../assets/clock32.png")}
                />
                <Text style={[styles.number11]}>{availableSeats}</Text>
              </View>
            </View>
          </View>
          {details.length === 0 ? ( <Text style={[styles.TextAlign, styles.TextStyle, {marginBottom: 10}]}>
            No More Details Added 
          </Text>) :(
          <View>
          <Text style={[styles.TextAlign, styles.TextStyle]}>
            Plus de details
          </Text>
          <View style={[styles.BorderInput, { marginBottom: 20 }]}>
            {data.map((item, index) => (
              <View
                key={index} // Assigning unique key prop
                style={[RechercheStyles.Inputs, { width: 284, marginBottom: 8 }]}
              >
                <Image
                  style={RechercheStyles.Icon}
                  contentFit="cover"
                  source={require("../assets/check.png")}
                />
                <Text style={[RechercheStyles.inputText, { marginLeft: 10 }]}>
                  {item}
                </Text>
              </View>
            ))}
          </View></View>)}

          <TouchableOpacity
            style={[styles.buttonsecondary, { marginBottom: 10 }]}
            onPress={() => navigation.navigate("AfficherMap", {depart: depart, destination: destination})}
          >
            <Text
              style={[
                RechercheStyles.buttonText,
                { color: Color.colorRoyalblue_100 },
              ]}
            >
              Afficher Map
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[RechercheStyles.buttonfirst]}>
            <Text style={[RechercheStyles.buttonText, { color: "white"}]}>
              Participer
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 190,
    justifyContent: "space-between",
    marginTop: 5,
  },
  inputFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  TextStyle: {
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    color: Color.textColorContentTertiary,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },

  frameFlexBox: {
    width: 290,
    flexDirection: "row",
    alignItems: "center",
  },

  TitleText: {
    width: 289,
    color: Color.colorBlack,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "left",
  },

  nom: {
    color: Color.textColorContentTertiary,
    fontFamily: FontFamily.subheadLgSHLgMedium,
  },

  NameAndRate: {
    width: 231,
    height: 93,
    justifyContent: "center",
    alignItems: "center",
  },
  userprofile: {
    paddingBottom: "4%",
    marginBottom: "1.5%",
    marginTop: Padding.p_xl,
    justifyContent: "center",
    borderEndColor: "#000000",
    borderBottomWidth: 0.5,
    width: "100%",
  },
  ProfileInfoText: {
    left: "5.52%",
    textAlign: "left",
    position: "absolute",
  },

  Algeria: {
    width: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  TextAlign: {
    display: "flex",
    width: 316,
    marginTop: 20,
    marginBottom: 5,
    textAlign: "left",
    alignItems: "center",
  },

  BorderInput: {
    padding: Padding.p_mini,
    borderColor: Color.colorGray_200,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
  },

  number11: {
    fontSize: FontSize.headingH2_size,
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
  },

  nmbrplaces: {
    width: 281,
    marginTop: 10,
    justifyContent: "center",
  },

  buttonsecondary: {
    borderRadius: Border.br_3xs,
    borderColor: Color.colorRoyalblue_100,
    width: 318,
    height: 59,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
  },

  detailsframe: {
    flexGrow: 1,
    alignItems: "center",
    width: "100%",
    paddingBottom: 20 //gonna fix this
  },
  main: {
    flex: 1,
    paddingHorizontal: Padding.p_base,
    marginTop: "2%",
    alignItems: "center",
    backgroundColor: Color.neutralWhite,
    alignItems: "center",
    justifyContent: "center",
  },

  details: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.neutralWhite,
  },
});

export default Details;

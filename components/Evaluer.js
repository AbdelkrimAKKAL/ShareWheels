import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";
import { useState } from "react"
import env from "../env";
import {useAuth} from '../context/AuthContext'
import { useRefresh } from '../context/refresh';

const Evaluer = (Props) => {
  const {refreshPage}  = useRefresh();
  const user = useAuth();
  const navigation = useNavigation();
  const [stars, setStars] = useState(1);
  const [isSent, setIsSent] = useState(false)
  

  const add = () => {
    if (stars < 5) {
      setStars(stars + 1);
    }
  };

  const sub = () => {
    if (stars > 1) {
      setStars(stars - 1);
    }
  };

  const setRating = (stars) => {
    Alert.alert(`${stars} star sent`);
    setIsSent(true);
  }

  // handlDelete in Backend
  const handleDelete = async () => {
    try {
      const trajetId = Props.trajetId; // Replace 'your_trajet_id' with the actual trajet ID
      const response = await fetch(`http://${env.API_IP_ADDRESS}:3000/api/deleteTrajet/${trajetId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
      });

      if (response.ok) {
        // Trajet deleted successfully
        Alert.alert('Success', 'Trajet deleted successfully');
      } else {
        // Error deleting trajet
        Alert.alert('Error', 'Failed to delete trajet');
      }
    } catch (error) {
      // Internal server error or network error
      console.error('Error deleting trajet:', error);
      Alert.alert('Error', 'Internal server error');
    }
    refreshPage();
};

  return (
    <View style={[styles.evaluer, styles.dateFlexBox]}>
      <View style={styles.infos}>
        <Image
          style={styles.profilepictureIcon}
          contentFit="cover"
          source={require("../assets/profilepicture1.png")}
        />
        <View style={[styles.infosprofil, styles.trajetPosition]}>
          <Text style={[styles.amineMeddouri, styles.textTypo]}>
          {Props.rating + " (" + Props.nbrRatings + ")"}
          </Text>
          <View style={[styles.vectorParent, styles.rateFlexBox]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector4.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>{Props.rating}</Text>
          </View>
        </View>
        <View style={[styles.trajet, styles.rateFlexBox]}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group2.png")}
          />
          <View style={styles.bejaiaParent}>
            <Text style={[styles.bejaia, styles.algerTypo]}>{Props.startLocation}</Text>
            <Text style={[styles.alger, styles.algerTypo]}>{Props.endLocation}</Text>
          </View>
        </View>
      </View>

      <View>
        <Pressable
          onPress={handleDelete}
        >
          <Image
            style={styles.deleteAnnonce}
            contentFit="cover"
            source={require("../assets/delete.png")}
          />
        </Pressable>
      </View>


      <View style={[styles.infostrajet, styles.rateFlexBox]}>
        <View style={[styles.prix, styles.dateFlexBox]}>
          <Text style={styles.titre}>Prix</Text>
          <Text style={styles.infoTypo1}>
            <Text style={styles.infoTypo}>{Props.price} DA</Text>
            <Text style={styles.text1}>{` `}</Text>
          </Text>
        </View>
        <View style={[styles.vehicule, styles.dateFlexBox]}>
          <Text style={styles.titre}>Véhicule</Text>
          <Text style={[styles.info1, styles.infoTypo]}>{Props.vehicle}</Text>
        </View>
        <View style={[styles.prix, styles.dateFlexBox]}>
          <Text style={styles.titre}>Heure</Text>
          <Text style={[styles.info2, styles.infoTypo1]}>{Props.time}</Text>
        </View>
        <View style={[styles.date, styles.dateFlexBox]}>
          <Text style={styles.titre}>Date</Text>
          <Text style={[styles.info3, styles.infoTypo]}>{Props.date}</Text>
        </View>
        <View style={[styles.date1, styles.dateFlexBox]}>
          <Text style={styles.titre}>Places</Text>
          <Text style={[styles.info3, styles.infoTypo]}>{Props.availableSeats}</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <View style={[styles.rate, styles.rateFlexBox]}>
          {!isSent && (
            <Pressable onPress={sub}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/moins3.png")}
              />
            </Pressable>
          )}

          <Text style={styles.rating}>{stars}</Text>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />

          {!isSent && (
            <Pressable onPress={add}>
              <Image
                style={[styles.plusIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/plus3.png")}
              />
            </Pressable>
          )}

        </View>

        {!isSent && (
          <Pressable
            style={[styles.participer, styles.participerLayout]}
            onPress={() => setRating(stars)}
            disabled={isSent}
          >
            <Text style={[styles.supprimer, styles.signalerTypo]}>{isSent ? (<Text>{stars}</Text>) : 'Evaluer'}</Text>
          </Pressable>
        )}

        <Pressable
          style={[styles.participer1, styles.participerLayout]}
          onPress={() => navigation.navigate("Signaler")}
        >
          <Text style={[styles.signaler, styles.signalerTypo]}>Signaler</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deleteAnnonce:{
    position: 'absolute',
    top: -60,
    left: 140,
    height:20,
    width:20,
  },
  rating: {
    fontSize: FontSize.headingH2_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorBlack,
    width: 12,
    marginLeft: 10,
    marginTop: -5,
    textAlign: "center",
  },
  dateFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  trajetPosition: {
    position: "absolute",
    justifyContent: "center",
    top: 0,
    height: 46,
    borderRadius: Border.br_mini,
  },
  textTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorDarkslategray_100,
  },
  rateFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  algerTypo: {
    color: Color.colorSilver_200,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  infoTypo: {
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkslategray_100,
  },
  infoTypo1: {
    width: 54,
    textAlign: "center",
    fontFamily: FontFamily.nunitoRegular,
  },
  iconLayout: {
    height: 21,
    width: 21,
  },
  participerLayout: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_8xl,
    width: 89,
    backgroundColor: Color.colorGainsboro_100,
    height: 35,
    flexDirection: "row",
    justifyContent: "center",
    top: 0,
    position: "absolute",
    alignItems: "center",
    borderRadius: Border.br_mini,
  },
  signalerTypo: {
    height: 19,
    width: 73,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  profilepictureIcon: {
    top: 3,
    borderRadius: Border.br_9980xl,
    width: 41,
    height: 41,
    left: 0,
    position: "absolute",
  },
  amineMeddouri: {
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_xs,
    width: 116,
  },
  vectorIcon: {
    width: 8,
    height: 8,
  },
  text: {
    fontSize: FontSize.size_3xs,
    width: 31,
    height: 11,
    marginLeft: 2,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
  },
  vectorParent: {
    width: 62,
    marginTop: 6,
  },
  infosprofil: {
    left: 51,
    justifyContent: "center",
    width: 116,
    top: 0,
  },
  groupIcon: {
    width: 10,
    height: 30,
  },
  bejaia: {
    width: 130,
    top: 0,
  },
  alger: {
    top: 20,
    width: 119,
  },
  bejaiaParent: {
    marginLeft: 4,
    height: 32,
    width: 130,
  },
  trajet: {
    left: 174,
    width: 144,
    justifyContent: "center",
    top: 0,
    position: "absolute",
    height: 46,
    borderRadius: Border.br_mini,
  },
  infos: {
    height: 46,
    width: 318,
  },
  titre: {
    fontWeight: "800",
    fontFamily: FontFamily.nunitoExtraBold,
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_xs,
  },
  text1: {
    color: Color.colorTomato,
    fontSize: FontSize.size_xs,
  },
  prix: {
    width: 47,
    height: 32,
  },
  info1: {
    width: 108,
    textAlign: "center",
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_2xs,
  },
  vehicule: {
    width: 65,
    height: 32,
  },
  info2: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_xs,
  },
  info3: {
    width: 64,
    textAlign: "center",
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_2xs,
  },
  date: {
    width: 58,
    height: 32,
  },
  date1: {
    width: 37,
    height: 32,
  },
  infostrajet: {
    width: 318,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: Border.br_mini,
  },
  text2: {
    fontSize: FontSize.headingH2_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorBlack,
    width: 12,
    marginLeft: 10,
    marginBottom: -5,
    textAlign: "left",
  },
  vectorIcon1: {
    width: 15,
    height: 15,
    marginLeft: 10,
  },
  plusIcon: {
    marginLeft: 10,
  },
  rate: {
    width: 99,
    zIndex: 0,
    justifyContent: "center",
  },
  supprimer: {
    color: Color.colorRoyalblue_100,
  },
  participer: {
    left: 230,
    zIndex: 1,
  },
  signaler: {
    color: Color.colorTomato,
  },
  participer1: {
    left: 131,
    zIndex: 2,
  },
  buttons: {
    alignContent: "center",
    width: 310,
    padding: Padding.p_3xs,
    height: 35,
    flexDirection: "row",
    alignItems: "center",
  },
  evaluer: {
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderWidth: 0.9,
    marginBottom: 10,
    backgroundColor: Color.neutralWhite,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 187,
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_sm,
    borderRadius: Border.br_mini,
    alignItems: "center",
  },
});

export default Evaluer;

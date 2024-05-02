import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";
import env from "../env";
import {useAuth} from '../context/AuthContext'
import { useRefresh } from '../context/refresh';
 
const Annonce = (Props) => {
  const {refreshPage}  = useRefresh();
  const user = useAuth();
  const navigation = useNavigation();

  const renderButtons = () => {
    if (Props.btnText === 'Participer') {
      return(
      <View style={AnnonceStyles.buttons}>
        <TouchableOpacity
          style={[AnnonceStyles.details, AnnonceStyles.detailsFlexBox]}
          onPress={() => navigation.navigate("Details")}
        >
          <Text
            style={[
              AnnonceStyles.ButtonText,
              { color: Color.colorRoyalblue_100, width: 60 },
            ]}
          >
            Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[AnnonceStyles.participer, AnnonceStyles.detailsFlexBox]} onPress={ParticiperFunc}>
          <Text
            style={[AnnonceStyles.ButtonText, { color: Color.neutralWhite, width: 65 }]}>
            Participer
          </Text>
        </TouchableOpacity>
      </View>);
  }
  else{
    return(
    <View style={AnnonceStyles.buttons}>
        <TouchableOpacity
          style={[AnnonceStyles.details, AnnonceStyles.detailsFlexBox, {width: 97,}]}
          onPress={() => navigation.navigate("ParticipantsScreen")}
        >
          <Text
            style={[
              AnnonceStyles.ButtonText,
              { color: Color.colorRoyalblue_100, width: 77 },
            ]}
          >
            Participants
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[AnnonceStyles.participer, AnnonceStyles.detailsFlexBox, {backgroundColor: Color.colorTomato,left: 209,}]} onPress={AnnulerSup}>
          <Text
            style={[AnnonceStyles.ButtonText, { color: Color.neutralWhite, width: 67 }]}>
            {Props.btnText}
          </Text>
        </TouchableOpacity>
      </View>);
  }};

  const AnnulerSup = ()=> {
    if (Props.btnText === 'Supprimer'){
      SupprimerFunc();
    }else if (Props.btnText === 'Annuler'){
      SupprimerFunc();
    }
  }

  //Backedn----------------------------------------------------------------------------------------
  const ParticiperFunc = () => {
    Alert.alert('Participer');
  };

 const SupprimerFunc = async () => {
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

//Backedn--------------------------------------------------------------------------------------------
  
return (
    <View style={[AnnonceStyles.annonce]}>
      <View style={[{height: 46,width: 318,}]}>
        <Image
          style={AnnonceStyles.profilepictureIcon}
          contentFit="cover"
          source={require("../assets/profilepicture1.png")}
        />
        <View style={[AnnonceStyles.infosprofil]}>
          <Text style={[AnnonceStyles.titre,{textAlign: "left",}]}>
            {Props.name}
          </Text>
          <View style={[AnnonceStyles.trajetFlexBox, {marginTop: 6,}]}>
            <Image
              style={[{width: 8, height: 8,marginRight: 5}]}
              contentFit="cover"
              source={require("../assets/vector4.png")}
            />
            <Text style={[AnnonceStyles.titre, {textAlign: "left",fontSize: FontSize.size_xs+0.5, width: 55 }]}>{Props.rating + " (" + Props.nbrRatings + ")"}</Text>
          </View>
        </View>
        <View style={[AnnonceStyles.trajet, AnnonceStyles.trajetFlexBox]}>
          <Image
            style={[{width: 12, height: 36,}]}
            contentFit="cover"
            source={require("../assets/group2.png")}
          />
          <View style={AnnonceStyles.LocationsBox}>
            <Text style={[AnnonceStyles.LocationTextStyle]}>
              {Props.startLocation}
            </Text>
            <Text style={[AnnonceStyles.LocationTextStyle, {top: 23,}]}>
              {Props.endLocation}
            </Text>
          </View>
        </View>
      </View>

      <View style={[AnnonceStyles.trajetFlexBox, {justifyContent: "space-between", height: 32,}]}>
        <View style={[AnnonceStyles.infoBox]}>
          <Text style={[AnnonceStyles.titre]}>Prix</Text>
          <Text style={AnnonceStyles.infoTypo}>{Props.price} DA</Text>
        </View>

        <View style={[AnnonceStyles.infoBox]}>
          <Text style={[AnnonceStyles.titre]}>Véhicule</Text>
          <Text style={[AnnonceStyles.infoTypo]}>{Props.vehicle}</Text>
        </View>

        <View style={[AnnonceStyles.infoBox]}>
          <Text style={[AnnonceStyles.titre]}>Heure</Text>
          <Text style={[AnnonceStyles.infoTypo, { fontSize: FontSize.size_xs }]}>
            {Props.time}
          </Text>
        </View>

        <View style={[AnnonceStyles.infoBox]}>
          <Text style={[AnnonceStyles.titre]}>Date</Text>
          <Text style={[AnnonceStyles.infoTypo]}>{Props.date}</Text>
        </View>

        <View style={[AnnonceStyles.infoBox]}>
          <Text style={[AnnonceStyles.titre]}>Places</Text>
          <Text style={[AnnonceStyles.infoTypo]}>{Props.availableSeats}</Text>
        </View>
      </View>

      <View>
        {renderButtons()}
      </View>

      
    </View>
  );
};

export const AnnonceStyles = StyleSheet.create({
  infoBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    height: 35,
  },

  trajetFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  LocationTextStyle: {
    color: Color.colorSilver_200,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "center",
    position: "absolute",
  },

  infoTypo: {
    fontSize: FontSize.size_2xs + 1,
    color: Color.colorDarkslategray_100,
  },

  detailsFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_8xl,
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
    borderRadius: Border.br_mini,
  },
  ButtonText: {
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
    position: "absolute",
  },

  infosprofil: {
    left: 51,
    width: 116,
    justifyContent: "center",
    height: 46,
  },

  LocationsBox: {
    marginLeft: 4,
    height: 35,
    width: 130,
  },
  trajet: {
    left: 174,
    width: 144,
    justifyContent: "center",
    position: "absolute",
    height: 46,
  },
  titre: {
    fontWeight: "800",
    fontFamily: FontFamily.nunitoExtraBold,
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_xs + 1,
  },

  details: {
    left: 106,
    backgroundColor: Color.colorGainsboro_100,
    width: 90,
  },

  participer: {
    left: 203,
    backgroundColor: Color.colorRoyalblue_100,
    width: 107,
  },

  buttons: {
    width: 310,
    justifyContent: "flex-end",
    marginTop: 12,
    height: 35,
  },

  annonce: {
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderWidth: 0.9,
    backgroundColor: Color.neutralWhite,
    shadowColor: "rgba(0, 0, 0, 0.15)",
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
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
    width: 345
  },
});
export default Annonce;

import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";
import { AnnonceStyles } from "./Annonce";

const Participants = (Props) => {
  const navigation = useNavigation();

  const suppUser = () => {
    Alert.alert("User deleted from the ride");
  };

  return (
    <View style={[styles.annonce]}>
      <View
        style={[
          styles.horizStyle,
          {
            paddingBottom: 6,
            borderBottomWidth: 0.3,
            borderBottomColor: "rgba(0, 117, 253, 0.4)",
          },
        ]}
      >
        <Image
          style={[{ width: 35, height: 35, borderRadius: Border.br_9980xl }]}
          contentFit="cover"
          source={require("../assets/profilepicture1.png")}
        />
        <Text
          style={[
            AnnonceStyles.titre,
            styles.TextStyle,
            { fontSize: FontSize.size_xs + 4 },
          ]}
        >
          {Props.name}
        </Text>
      </View>

      <View style={[styles.horizStyle, { marginTop: 8 }]}>
        <Image
          style={[{ width: 18, height: 18 }]}
          contentFit="cover"
          source={require("../assets/stylestroke.png")}
        />
        <Text
          style={[styles.TextStyle, { color: Color.colorDarkslategray_100 }]}
        >
          {Props.email}
        </Text>
      </View>

      <View style={[styles.horizStyle, { marginTop: 5 }]}>
        <Image
          style={[{ width: 18, height: 19 }]}
          contentFit="cover"
          source={require("../assets/telephone.png")}
        />
        <Text
          style={[styles.TextStyle, { color: Color.colorDarkslategray_100 }]}
        >
          {Props.phone}
        </Text>
      </View>

      <View style={[styles.horizStyle, { marginTop: 5, marginBottom: 5 }]}>
        <Image
          style={[{ width: 20, height: 23 }]}
          contentFit="cover"
          source={require("../assets/group1.png")}
        />
        <Text
          style={[styles.TextStyle, { color: Color.colorDarkslategray_100 }]}
        >
          {Props.gender}
        </Text>
      </View>

      <View style={styles.Button}>
        <TouchableOpacity
          style={[
            styles.detailsFlexBox,
            {
              backgroundColor: Color.colorTomato,
              left: 205,
              width: 107,
              marginTop: -40,
            },
          ]}
          onPress={suppUser}
        >
          <Text
            style={[
              AnnonceStyles.ButtonText,
              { color: Color.neutralWhite, width: 67 },
            ]}
          >
            Supprimer
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const styles = StyleSheet.create({
  annonce: {
    borderColor: "rgba(0, 117, 253, 0.4)",
    borderWidth: 1,
    backgroundColor: Color.neutralWhite,
    height: 150,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: Border.br_mini,
    alignItems: "center",
    marginBottom: 13,
    justifyContent: "space-between",
    alignItems: "center",
    width: 345,
  },

  horizStyle: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  TextStyle: {
    width: "100%",
    textAlign: "left",
    marginLeft: 15,
    fontWeight: "500",
  },
  Button: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  detailsFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_8xl,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_mini,
  },
});
export default Participants;

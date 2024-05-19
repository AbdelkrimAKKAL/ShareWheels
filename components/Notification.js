import React, { useState, useEffect } from "react";
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
import env from "../env";
import { useAuth } from "../context/AuthContext";
import { useRefresh } from "../context/refresh";


const Notification = (Props) => {
    const { refreshPage, refresh } = useRefresh();
    const { user } = useAuth();
    const navigation = useNavigation();
    const base64Image = `../assets/vector3.png`;


    return (
        <View style={styles.notificationContainer}>
            <Image source={{ uri: base64Image }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title2}>{Props.titre}</Text>
                <Text style={styles.sender}>{Props.sender_name} {Props.sender_prenom}</Text>
                <Text style={styles.body}>{Props.body}</Text>

                <Text>Time: {Props.time}</Text>
            </View>
        </View>
    );
};

export const styles = StyleSheet.create({
    notificationContainer: {
        flexDirection: "row",
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
      },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor:'black',
        marginRight:10,
        marginTop:15
    },
    title2: {
        fontSize: 16,
        fontWeight: "bold"
    },
    body: {
        fontSize: 14,
    },
    sender: {
        fontSize: 15,

        color: "blue"
    },
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
        fontSize: FontSize.size_4xs + 1,
        fontFamily: "Poppins-Medium",
        textAlign: "center",
        position: "absolute",
    },

    infoTypo: {
        fontSize: FontSize.size_2xs + 2.5,
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
        height: 37,
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
        fontFamily: "Poppins-Medium",
        textAlign: "center",
        color: Color.colorDarkslategray_100,
        fontSize: FontSize.size_xs + 3,
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
        shadowColor: "#585858",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 6,
        height: 50,
        paddingHorizontal: Padding.p_2xs,
        paddingVertical: Padding.p_sm,
        borderRadius: Border.br_mini,
        marginBottom: 10,
        justifyContent: "space-between",
        alignItems: "center",
        width: 345,
    },
});
export default Notification;

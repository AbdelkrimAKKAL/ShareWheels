import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Certified = props => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('CertifierCompte');
    };

    if (props.bool) {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require("../assets/certified.png")}
                />
                <Text style={styles.title}>Certified Account</Text>
            </View>
        );
    } else {
        return (
            <TouchableOpacity onPress={handlePress} style={styles.touchable}>
                <View style={styles.container}>
                    <Image
                        style={styles.icon}
                        contentFit="cover"
                        source={require("../assets/add.svg")}
                    />
                    <Text style={styles.title}>Certifie account</Text>
                </View>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignSelf: "flex-start",
        marginLeft: 45,
    },
    title: {
        fontSize: 18,
        color: "#0075FD",
    },
    icon: {
        height: 25,
        width: 25,
        marginRight: 10,
    },
    touchable: {
        alignSelf: "flex-start",
    }
});

export default Certified;

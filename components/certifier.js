import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';



const Certified = props => {
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
            <TouchableOpacity style={{   alignSelf: "flex-start",}}>
             <View style={styles.container}>
                
            <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/add.svg")}

            />
            <Text style={styles.title}>Certifie account</Text>
           
        </View>
         </TouchableOpacity>)

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
    }
});

export default Certified;
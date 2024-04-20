import React from 'react';
import { View, Image, Text } from 'react-native';
import { RechercheStyles } from '../screens/Recherche';

const NotAuth = ({ title, photo }) => {
  return (
    <View style={styles.photoMain}>
      <Image
        style={styles.photo}
        resizeMode="cover"
        source={photo}
      />
      <Text style={[RechercheStyles.sharewheels, {fontSize: 20, fontWeight: "600",}]} >{title}</Text>
    </View>
  );
};

const styles = {
    photoMain:{
        flex: 1,
        justifyContent: 'center',
        alignItems :'center',
        backgroundColor: '#fff'
      },
      photo: {
        width: 290,
        height: 290,
      }
}
export default NotAuth;

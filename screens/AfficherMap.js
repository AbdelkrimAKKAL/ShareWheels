import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const AfficherMap = () => {
  const [locationPermission, setLocationPermission] = useState(null);
  const [departCoords, setDepartCoords] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    getLocationPermission();
  }, []);

  const getLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Required",
        "This app needs location permission to function properly.",
        [{ text: "OK", onPress: () => {} }]
      );
      return;
    }
    setLocationPermission(status);
    fetchCoordinates();
  };

  const fetchCoordinates = async () => {
    try {
      const depart = await Location.geocodeAsync("Bejaia");
      const destination = await Location.geocodeAsync("Alger");

      setDepartCoords({ latitude: depart[0].latitude, longitude: depart[0].longitude });
      setDestinationCoords({ latitude: destination[0].latitude, longitude: destination[0].longitude });

      // Calculating distance between two coordinates (in meters)
      const dist = getDistance(depart[0], destination[0]);
      setDistance(dist);
    } catch (error) {
      console.error("Error getting coordinates: ", error);
    }
  };

  const getDistance = (coord1, coord2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(coord2.latitude - coord1.latitude); // deg2rad below
    const dLon = deg2rad(coord2.longitude - coord1.longitude);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(coord1.latitude)) * Math.cos(deg2rad(coord2.latitude)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c * 1000; // Distance in meters
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  return (
    <View style={styles.container}>
      {departCoords && destinationCoords && (
        <MapView style={styles.map}
          initialRegion={{
            latitude: (departCoords.latitude + destinationCoords.latitude) / 2,
            longitude: (departCoords.longitude + destinationCoords.longitude) / 2,
            latitudeDelta: Math.abs(departCoords.latitude - destinationCoords.latitude) * 2,
            longitudeDelta: Math.abs(departCoords.longitude - destinationCoords.longitude) * 2,
          }}
        >
          {departCoords && <Marker coordinate={departCoords} title={"Depart"} />}
          {destinationCoords && <Marker coordinate={destinationCoords} title={"Destination"} />}
        </MapView>
      )}

      {distance !== null && (
        <View style={styles.distanceContainer}>
          <Text style={styles.distanceText}>{`Distance: ${distance.toFixed(2)} meters`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  distanceContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    borderColor: "#0075fd",
    borderWidth: 0.5,
  },
  distanceText: {
    fontSize: 16,
    color: "#0075fd",
  },
});

export default AfficherMap;

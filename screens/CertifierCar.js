import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import env from "../env";
import { useAuth } from "../context/AuthContext";
import { useNavigation, useRoute } from "@react-navigation/native";

const CertifierCar = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [imageUri, setImageUri] = useState(null);
  const cameraRef = useRef(null);
  const { user } = useAuth();
  const navigation = useNavigation();

  const route = useRoute();
  const carDes = route.params?.carDes;

  useEffect(() => {
    if (permission && !permission.granted && permission.canAskAgain) {
      requestPermission();
    }
  }, [permission]);

  const handleScanIDCard = async () => {
    if (!permission || !permission.granted) {
      Alert.alert('Permission Required', 'Please enable camera permissions to scan ID card.');
      return;
    }

    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setImageUri(photo.uri);
    }
  };

  const handleSendImage = () => {
    if (!imageUri) {
      Alert.alert('Error', 'No image captured.');
      return;
    }

    console.log('Image uploaded successfully');
    Alert.alert('Card saved', 'Image uploaded successfully');
    navigation.navigate('Voiture', { imageUri: imageUri, carDes: carDes });
  };

  const handleRetakeImage = () => {
    setImageUri(null);
  };

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <>
        {imageUri ? (
          <>
            <View style={styles.imageContainer}>
              <Image source={{ uri: imageUri }} style={styles.image} />
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={[styles.button]} onPress={handleSendImage}>
                <Image source={require('../assets/SendButton.png')} style={styles.cameraIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.retakeButton]} onPress={handleRetakeImage}>
                <Image source={require('../assets/RetakeButton.png')} style={styles.cameraIcon} />
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <CameraView style={styles.camera} facing={'back'} ref={cameraRef}>
            </CameraView>
            <TouchableOpacity style={styles.scanButton} onPress={handleScanIDCard}>
              <Image source={require('../assets/CameraButton.png')} style={styles.cameraIcon} />
            </TouchableOpacity>
          </>
        )}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraIcon: {
    width: 60,
    height: 60,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '80%',
  },
  scanButton: {
    marginTop: 25,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    minWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButton: {
    backgroundColor: 'green',
  },
});

export default CertifierCar;

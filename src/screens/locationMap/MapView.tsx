import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import AuthHeader from '../../components/molecule/headers/AuthHeader';
import MapView, {Marker} from 'react-native-maps';
import Button from '../../components/molecule/Button';
import Images from '../../assets/images/Images';
import {useNavigation} from '@react-navigation/native';

const MapScreen = () => {
  const navigation = useNavigation();
  const markersArray = [
    {
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4325,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    },
    {
      coordinate: {
        latitude: 37.78827,
        longitude: -122.4325,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    },
    {
      coordinate: {
        latitude: 37.78829,
        longitude: -122.4325,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    },
  ];
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthHeader
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <Text style={styles.primaryText}>
          Bellos Location has been shared with you!
        </Text>
        <Text style={styles.secondaryTextStyle}>
          Bello was found 1 Minute ago
        </Text>
        <Text style={styles.locationTextStyle}>at this GPS Location:</Text>
        <Text style={styles.locationSubText}>51°15’19°N 6°41’5”E</Text>
        <MapView
          style={[styles.mapView]}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {markersArray.map((markerCordinate, index) => (
            <Marker key={index} coordinate={markerCordinate.coordinate} />
          ))}
        </MapView>
        <Button
          text="Open in Maps"
          imageOnRight={Images.NotifyPage.locationMap}
          rightIconStyle={styles.mapBtnStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;

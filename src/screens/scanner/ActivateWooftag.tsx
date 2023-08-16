import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import AuthHeader from '../../components/molecule/headers/AuthHeader';
import BottomView from '../../components/atom/BottomView';
import Button from '../../components/molecule/Button';
import {useNavigation} from '@react-navigation/native';
import Images from '../../assets/images/Images';
import RouteNames from '../../navigation/RouteNames';

const ActivateWooftagScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthHeader
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.activateText}>Activate a Wooftag</Text>
          <Text style={styles.subActivationText}>
            Scan the QR Code on your Wooftag or use the NFC function.
          </Text>
        </View>

        <View style={styles.outerContainer}>
          <View style={styles.subSContainer}>
            <Image
              source={Images.ScannerPage.round_Scanner}
              style={styles.roundImage}
            />
            <View style={styles.innerImageContainer}>
              <Image
                source={Images.ScannerPage.inner_Scan}
                resizeMode="cover"
                style={styles.innerImage}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headingText}>QR Code</Text>
              <Text style={styles.subText}>Start Scanning</Text>
            </View>
          </View>
          <View style={styles.subSContainer}>
            <Image
              source={Images.ScannerPage.round_Scanner}
              style={styles.roundImage}
            />
            <View style={styles.innerImageContainer}>
              <Image
                source={Images.ScannerPage.inner_NFC}
                resizeMode="cover"
                style={styles.innerImage}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headingText}>NFC</Text>
              <Text style={styles.subText}>Start Scanning</Text>
            </View>
          </View>
        </View>
      </View>
      <BottomView>
        <Button
          text="Buy a Wooftag Here"
          onPress={() => navigation.navigate(RouteNames.scanNfcPage.name)}
        />
      </BottomView>
    </SafeAreaView>
  );
};

export default ActivateWooftagScreen;

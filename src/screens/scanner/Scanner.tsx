import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import AuthHeader from '../../components/molecule/headers/AuthHeader';
import BottomView from '../../components/atom/BottomView';
import Button from '../../components/molecule/Button';
import {useNavigation} from '@react-navigation/native';
import RouteNames from '../../navigation/RouteNames';
import WoofTagCard from '../../components/molecule/WoofTagCard';
import Images from '../../assets/images/Images';

const ScannerScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthHeader
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.primaryView}>
          <Text style={styles.petNameText}>Petname’s Wooftag’s</Text>
          <Text style={styles.petNameSubText}>( 2 )</Text>
        </View>
        <View style={styles.secondaryView}>
          <WoofTagCard
            name={'Beach'}
            wooftagName={'Chain main'}
            onPress={() => navigation.navigate(RouteNames.WoofTag.name)}
          />
          <WoofTagCard
            name={'Beach'}
            wooftagName={'Chain main'}
            leftImageSource={Images.woofTagIcon2}
            onPress={() => navigation.navigate(RouteNames.WoofTag.name)}
          />
        </View>
      </View>
      <BottomView>
        <Button
          text="Activate a Wooftag"
          onPress={() =>
            navigation.navigate(RouteNames.activateWooftagPage.name)
          }
        />
      </BottomView>
      <Text style={styles.buyPetText}>Or buy one here</Text>
    </SafeAreaView>
  );
};

export default ScannerScreen;

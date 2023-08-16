import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthHeader from '../../../components/molecule/headers/AuthHeader';
import {ScrollView} from 'react-native-gesture-handler';
import SubHeader from '../../../components/molecule/headers/SubHeader';
import Images from '../../../assets/images/Images';
import BottomView from '../../../components/atom/BottomView';
import Button from '../../../components/molecule/Button';
import RouteNames from '../../../navigation/RouteNames';
import TextField from '../../../components/molecule/TextField';
import DropdownPicker from '../../../components/molecule/DropdownPicker';
import HalfButton from '../../../components/molecule/HalfButton';
import ToggleButton from '../../../components/atom/ToggleButton';
import PhoneInputField from '../../../components/atom/PhoneInputField';

const VetRegisteration = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthHeader
        onPressBack={() => navigation.goBack()}
        title="Vet & Registration"
      />
      <ScrollView>
        <SubHeader
          centerImage={Images.plus_paw_icon}
          centerImageStyle={styles.dogImageStyle}
          subTitle="Petname’s Vet & Registration Infos"
        />
        <View style={styles.container}>
          <TextField label="Vet Name" placeholder="Dr. Vet One" />
          <TextField
            label="Street & Housenumber"
            placeholder="Berlin Street 56"
          />
          <TextField label="Postcode" placeholder="12345" />
          <TextField label="City" placeholder="12345" />
          <DropdownPicker label="Country" placeholder="Germany" />
          <PhoneInputField />
          <View style={styles.textfieldView}>
            <TextField
              label="Microchip ID ( #15 max )"
              placeholder="276 123 456 789 123"
            />
            <View style={styles.marginLeft}>
              <ToggleButton />
            </View>
          </View>
          <View style={styles.textfieldView}>
            <TextField
              label="Tasso e.v. ID ( #7-8 max )"
              placeholder="123 456 78"
            />
            <View style={styles.marginLeft}>
              <ToggleButton />
            </View>
          </View>
          <Text style={styles.behaviorTextStyle}>Registered at Findefix</Text>
          <View style={styles.buttonContainer}>
            <HalfButton text="Yes" background />
            <HalfButton text="No" />
          </View>
          <View style={styles.separatorViewStyle} />
        </View>
      </ScrollView>
      <BottomView>
        <Button
          text="Save Infos"
          onPress={() => navigation.navigate(RouteNames.petProfilePage.name)}
        />
      </BottomView>
    </SafeAreaView>
  );
};

export default VetRegisteration;

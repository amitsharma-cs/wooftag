import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import AuthHeader from '../../../components/molecule/headers/AuthHeader';
import {useNavigation} from '@react-navigation/native';
import SubHeader from '../../../components/molecule/headers/SubHeader';
import Images from '../../../assets/images/Images';
import BottomView from '../../../components/atom/BottomView';
import Button from '../../../components/molecule/Button';
import RouteNames from '../../../navigation/RouteNames';
import HalfButton from '../../../components/molecule/HalfButton';
import DescriptionField from '../../../components/molecule/DescriptionField';
import TextField from '../../../components/molecule/TextField';

const HealthInfoScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthHeader
        onPressBack={() => navigation.goBack()}
        title={"Bruno's Health Informations"}
        rightIcon={Images.delete_icon}
        onPressRight={() => {}}
      />
      <ScrollView>
        <SubHeader
          centerImage={Images.heartBeat_icon}
          centerImageStyle={styles.dogImageStyle}
          subTitle="Bruno's Health Informations"
        />
        <View style={styles.container}>
          <TextField
            label="Allergies"
            placeholder="Flea Melda and Medication Sambro 10V"
          />
          <TextField
            label="Medication required"
            placeholder="Yes, Daily Hearth Medication"
          />
          <Text style={styles.behaviorTextStyle}>Neutered / Spayed ?</Text>
          <View style={styles.buttonContainer}>
            <HalfButton text="Yes" background />
            <HalfButton text="No" />
          </View>
          <View style={styles.separatorViewStyle} />
          <DescriptionField
            label="Additional informations"
            placeholder="e.g. Bello has a wstrong hunting drive"
          />
        </View>
      </ScrollView>
      <BottomView>
        <Button
          text="Save Health Infos"
          onPress={() => navigation.navigate(RouteNames.petProfilePage.name)}
        />
      </BottomView>
    </SafeAreaView>
  );
};

export default HealthInfoScreen;

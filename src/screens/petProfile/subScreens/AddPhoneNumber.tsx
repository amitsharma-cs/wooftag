import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import AuthHeader from '../../../components/molecule/headers/AuthHeader';
import SubHeader from '../../../components/molecule/headers/SubHeader';
import Images from '../../../assets/images/Images';
import {styles} from './Styles';
import {useNavigation} from '@react-navigation/native';
import BottomView from '../../../components/atom/BottomView';
import Button from '../../../components/molecule/Button';
import RouteNames from '../../../navigation/RouteNames';
import TextField from '../../../components/molecule/TextField';
import PhoneInputField from '../../../components/atom/PhoneInputField';

const AddPhoneNumber = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthHeader
        onPressBack={() => navigation.goBack()}
        title="Address"
        rightIcon={Images.delete_icon}
        onPressRight={() => {}}
      />
      <ScrollView>
        <SubHeader
          cameraIcon
          centerImage={Images.phone_icon}
          centerImageStyle={styles.dogImageStyle}
          subTitle="Owner Name"
        />
        <View style={styles.container}>
          <TextField label="Owner Name" placeholder="Your Name" />
          <TextField label="Phone" placeholder="(+49) 123 456 789" />
          <PhoneInputField />
        </View>
      </ScrollView>
      <BottomView>
        <Button
          text="Save Address"
          onPress={() => navigation.navigate(RouteNames.petProfilePage.name)}
        />
      </BottomView>
    </SafeAreaView>
  );
};

export default AddPhoneNumber;

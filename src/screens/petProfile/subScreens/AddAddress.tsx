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

const AddAddress = () => {
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
          centerImage={Images.location_icon}
          centerImageStyle={styles.dogImageStyle}
          subTitle="Address Name"
        />
        <View style={styles.container}>
          <TextField label="Address Name" placeholder="Bellos Home" />
          <TextField
            label="Street and House Number"
            placeholder="Europe street 10"
          />
          <TextField label="Postcode" placeholder="12345" />
          <TextField label="City" placeholder="Berlin" />
          <TextField label="Country" placeholder="Germany" />
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

export default AddAddress;

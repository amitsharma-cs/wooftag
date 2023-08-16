import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import AuthHeader from '../../../components/molecule/headers/AuthHeader';
import {useNavigation} from '@react-navigation/native';
import SubHeader from '../../../components/molecule/headers/SubHeader';
import Images from '../../../assets/images/Images';
import BottomView from '../../../components/atom/BottomView';
import Button from '../../../components/molecule/Button';
import AddButton from '../../../components/atom/AddButton';
import RouteNames from '../../../navigation/RouteNames';
import AddressDetailCard from '../../../components/molecule/AddressDetailCard';

const AddressScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthHeader onPressBack={() => navigation.goBack()} title="Address" />
      <ScrollView>
        <SubHeader
          centerImage={Images.dog2}
          centerImageStyle={styles.dogImageStyle}
          title="Bruno's"
          subTitle="Address Book"
        />
        <View style={styles.container}>
          <AddressDetailCard
            addressName="Billy house"
            city="Berlin"
            country="Germany"
            postalCode="124565"
            street="street 54"
          />
          <AddressDetailCard
            addressName="Billy house"
            city="Berlin"
            country="Germany"
            postalCode="124575"
            street="street 54"
          />
          <AddButton
            text="Add a Address"
            subText="to Bruno's Profile"
            onPress={() => navigation.navigate('addAddress' as never)}
          />
        </View>
      </ScrollView>
      <BottomView>
        <Button
          text="Save & Close"
          onPress={() => navigation.navigate(RouteNames.petProfilePage.name)}
        />
      </BottomView>
    </SafeAreaView>
  );
};

export default AddressScreen;

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
import PhoneDetailCard from '../../../components/molecule/PhoneDetailCard';

const PhoneNumberScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthHeader onPressBack={() => navigation.goBack()} title="Phone" />
      <ScrollView>
        <SubHeader
          centerImage={Images.dog2}
          centerImageStyle={styles.dogImageStyle}
          title="Bruno's"
          subTitle="Phone Number"
        />
        <View style={styles.container}>
          <View>
            <PhoneDetailCard
              name="Mom"
              nameInitial="M"
              phoneNumber="+49 177 698 4875"
            />
            <PhoneDetailCard
              name="Dad"
              nameInitial="D"
              phoneNumber="+49 177 698 4875"
            />
          </View>
          <AddButton
            text="Add a Phone Number"
            subText="to Bruno's Profile"
            onPress={() => navigation.navigate('addPhoneNumber' as never)}
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

export default PhoneNumberScreen;

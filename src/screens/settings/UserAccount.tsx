import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import AuthHeader from '../../components/molecule/headers/AuthHeader';
import TextField from '../../components/molecule/TextField';
import Button from '../../components/molecule/Button';
import Images from '../../assets/images/Images';
import {useNavigation} from '@react-navigation/native';
import DeleteButton from '../../components/atom/DeleteButton';
import BottomView from '../../components/atom/BottomView';

const UserAccount = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthHeader
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.topTextView}>
          <Text style={styles.accountText}>Your Wooftag Account</Text>
          <Text style={styles.subText}>
            Edit & Manage your Basic Account Settings which contains all Pet
            profiles and Wooftags.
          </Text>
        </View>
        <View style={styles.inputView}>
          <TextField label="Name" placeholder="John Doe" />
          <TextField label="Email" placeholder="swapmi@gmail.com" />
        </View>
        <DeleteButton
          text="Delete Account"
          errorBackgroundImage={Images.OtpPage.error_image_background}
          imageOnLeft={Images.SettingPage.iconTrash}
          leftIconStyle={styles.leftIconStyle}
          additionalText={'Delete your Account and all Data'}
        />
      </View>
      <BottomView>
        <Button text="Save Changes" onPress={() => navigation.goBack()} />
      </BottomView>
    </SafeAreaView>
  );
};

export default UserAccount;

import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Styles';
import Images from '../../assets/images/Images';
import SettingsButton from '../../components/molecule/buttons/SettingsButton';
import AuthHeader from '../../components/molecule/headers/AuthHeader';
import {useNavigation} from '@react-navigation/native';
import RouteNames from '../../navigation/RouteNames';
import SignOutModal from '../../modals/SignOutModal';

const Settings = () => {
  const navigation = useNavigation();
  const [signOutModal, setSignOutModal] = useState(false);

  const handleSignOutClick = () => {
    setSignOutModal(true);
  };
  return (
    <SafeAreaView style={styles.mainConatiner}>
      <AuthHeader onPressRight={() => {}} />
      <ScrollView style={styles.container}>
        <View style={styles.textViewStyle}>
          <Text style={styles.primaryTextStyle}>Account & App Settings</Text>
          <Text style={styles.secondaryTextStyle}>Edit & Manage</Text>
        </View>
        <View style={styles.buttonsViewStyle}>
          <SettingsButton
            label="My Account"
            subLabel="Name & Email"
            source={Images.user}
            onPress={() => navigation.navigate(RouteNames.userAccountPage.name)}
          />
          <SettingsButton
            label="DSAR"
            subLabel="Data Subject Access Requests"
            source={Images.document}
            onPress={() =>
              navigation.navigate(RouteNames.dataSubjectRequestPage.name)
            }
          />
          <SettingsButton
            label="Language"
            subLabel="Change App Language"
            source={Images.circle}
          />
        </View>
        <View style={styles.textViewStyle}>
          <Text style={styles.primaryTextStyle}>About Wooftag</Text>
          <Text style={styles.secondaryTextStyle}>
            Legal & Business Informations
          </Text>
        </View>
        <View style={styles.buttonsViewStyle}>
          <SettingsButton
            label="Contact"
            subLabel="Get in touch with us"
            source={Images.light_mail}
          />
          <SettingsButton
            label="Terms & Conditions"
            subLabel="Read our privacy policy"
          />
          <SettingsButton
            label="Privacy Policy"
            subLabel="Read our privacy policy"
          />
          <SettingsButton label="Imprint" subLabel="Legal Informations" />
        </View>
        <View style={styles.bottomViewStyle}>
          <SettingsButton
            label="Logout"
            subLabel="Log out from your account"
            source={Images.logout}
            onPress={handleSignOutClick}
          />
        </View>
        <SignOutModal
          visible={signOutModal}
          onConfirmPress={() => setSignOutModal(false)}
          onCancelPress={() => setSignOutModal(false)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Styles';
import AuthHeader from '../../components/molecule/headers/AuthHeader';
import Button from '../../components/molecule/Button';
import Images from '../../assets/images/Images';
import {useNavigation} from '@react-navigation/native';
import DeleteButton from '../../components/atom/DeleteButton';
import BottomView from '../../components/atom/BottomView';
import SettingsButton from '../../components/molecule/buttons/SettingsButton';
import DataRequestButton from '../../components/atom/DataRequestButton';
import DeleteAccountModal from '../../modals/DeleteAccountModal';

const DataSubjectRequest = () => {
  const navigation = useNavigation();
  const [showDataRequestButtons, setShowDataRequestButtons] = useState(false);
  const [deleteAccountModal, setDeleteAccountModal] = useState(false);

  const handleRequestReasonClick = () => {
    setShowDataRequestButtons(prevState => !prevState);
  };

  const handleDeleteAccountClick = () => {
    setDeleteAccountModal(true);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthHeader
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.topTextView}>
          <Text style={styles.accountText}>Data Subject Access Requests</Text>
          <Text style={styles.subText}>
            Submit this form to make a DSAR. To better understand your rights,
            you can review our Privacy Policy.
          </Text>
        </View>
        <View style={styles.inputView}>
          <SettingsButton
            label="John Doe"
            subLabel="email@gmail.com"
            source={Images.user}
          />
          <SettingsButton
            label="Request Reason"
            subLabel="DSAR- Access request"
            imageOnRight={Images.SettingPage.iconArrow}
            onPress={handleRequestReasonClick}
            source={Images.document}
          />
          {showDataRequestButtons && (
            <>
              <DataRequestButton
                label="DSAR- Access request"
                rightIconSource={Images.SettingPage.tickArrow}
              />
              <DataRequestButton
                label="DSAR - Withdrawal of consent"
                // rightIconSource={Images.SettingPage.tickArrow}
              />
            </>
          )}
        </View>
        <DeleteButton
          text="Delete Account"
          errorBackgroundImage={Images.OtpPage.error_image_background}
          imageOnLeft={Images.SettingPage.iconTrash}
          leftIconStyle={styles.leftIconStyle}
          additionalText={'Delete your Account and all Data'}
          onPress={handleDeleteAccountClick}
        />
      </View>
      <BottomView>
        <Button text="Submit Request" onPress={() => navigation.goBack()} />
      </BottomView>
      <DeleteAccountModal
        visible={deleteAccountModal}
        onConfirmPress={() => setDeleteAccountModal(true)}
        onCancelPress={() => setDeleteAccountModal(true)}
      />
    </SafeAreaView>
  );
};

export default DataSubjectRequest;

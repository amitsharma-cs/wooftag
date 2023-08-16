import {SafeAreaView, View, Text} from 'react-native';
import React from 'react';
import {styles} from './Style';
import TextField from '../../components/molecule/TextField';
import Button from '../../components/molecule/Button';
import {useNavigation} from '@react-navigation/native';
import {translate} from '../../translations/translate';
import Header from '../../components/molecule/headers/Header';

const ResetPassword = ({}: any) => {
  const navigation = useNavigation();
  function goBack() {
    navigation.goBack();
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header onBackPress={goBack} onPressGlob={() => {}} />
        <View style={styles.textOuterView}>
          <Text style={styles.forgotpasswordText}>
            {translate('resetPassword')}
          </Text>
          <Text style={styles.forgotTextHeading}>
            {translate('resetPassHeading')}
          </Text>
        </View>
        <View style={styles.containerView}>
          <TextField
            label="New Password"
            placeholder="must be 8 characters"
            passwordField
          />
        </View>
        <View style={styles.subcontainerView}>
          <TextField
            label="Confirm new Password"
            placeholder="repeat password"
            passwordField
          />
        </View>
        <Button text="Reset password" />
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.bottomTextStyle}>
          Already have an account?
          <Text style={styles.loginButtonStyle}> Log in</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;

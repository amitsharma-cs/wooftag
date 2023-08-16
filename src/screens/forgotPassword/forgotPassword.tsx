import {SafeAreaView, View, Text} from 'react-native';
import React from 'react';
import {styles} from './Style';
import {useNavigation} from '@react-navigation/native';
import {translate} from '../../translations/translate';
import RouteNames from '../../navigation/RouteNames';
import Images from '../../assets/images/Images';
import Button from '../../components/molecule/Button';
import TextField from '../../components/molecule/TextField';
import Header from '../../components/molecule/headers/Header';

const ForgotPassword = ({}: any) => {
  const navigation = useNavigation();
  function goBack() {
    navigation.goBack();
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header onBackPress={goBack} onPressGlob={() => {}} />
      <View style={styles.textOuterView}>
        <Text style={styles.forgotpasswordText}>
          {translate('forgotPasswordText')}
        </Text>
        <Text style={styles.forgotTextHeading}>
          {translate('forgotTextHeading')}
        </Text>
      </View>
      <View style={styles.containerView}>
        <TextField
          label="Email address"
          placeholder="Enter your email address"
        />
      </View>
      <Button
        text="Send code"
        imageOnRight={Images.forgotPassword.mail_icon}
        rightIconStyle={styles.rightIconStyle}
        onPress={() => navigation.navigate(RouteNames.emailVerifyPage.name)}
      />
    </SafeAreaView>
  );
};

export default ForgotPassword;

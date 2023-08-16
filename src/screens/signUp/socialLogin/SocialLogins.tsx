import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import {useNavigation} from '@react-navigation/native';
import RouteNames from '../../../navigation/RouteNames';
import SocialButton from '../../../components/molecule/SocialButton';
import Images from '../../../assets/images/Images';
import Header from '../../../components/molecule/headers/Header';

const SocialLogins = () => {
  const navigation = useNavigation();
  function goBack() {
    navigation.goBack();
  }
  function googleSignUp() {}
  function facebookSignUp() {}
  function appleSignUp() {}
  function emailSignUp() {
    navigation.navigate(RouteNames.createAccountPage.name);
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header onBackPress={goBack} onPressGlob={() => {}} />
        <View style={styles.container}>
          <Text style={styles.textStyle}>Create account</Text>
          <Text style={styles.desTextStyle}>How do you want</Text>
          <Text style={styles.desTextStyle}>to create your account?</Text>
          <View style={styles.socialsViewStyle}>
            <SocialButton
              source={Images.authPage.google}
              title="Continue with Google"
              onPress={googleSignUp}
            />
            <SocialButton
              source={Images.authPage.facebook1}
              title="Continue with Facebook"
              onPress={facebookSignUp}
            />
            <SocialButton
              source={Images.authPage.apple}
              title="Continue with Apple"
              onPress={appleSignUp}
            />
            <SocialButton
              source={Images.authPage.mail}
              title="Continue with Email"
              onPress={emailSignUp}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <Text style={styles.bottomTextStyle}>
          Already have an account?
          <Text
            onPress={() => navigation.navigate(RouteNames.loginPage.name)}
            style={styles.loginButtonStyle}>
            {' '}
            Log in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SocialLogins;

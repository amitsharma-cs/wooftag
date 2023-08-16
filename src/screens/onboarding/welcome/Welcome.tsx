import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import Images from '../../../assets/images/Images';
import Button from '../../../components/molecule/Button';
import {translate} from '../../../translations/translate';
import {useNavigation} from '@react-navigation/native';
import RouteNames from '../../../navigation/RouteNames';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <ImageBackground
          source={Images.splashPage.welcome_background}
          style={styles.bgImageStyle}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textConatiner}>
        <Text style={styles.woofText}>
          Woof<Text style={{fontWeight: '300'}}>tag.</Text>
        </Text>
        <Text style={styles.petsInstructText}>
          {translate('petsWelcomeText')}
        </Text>
      </View>
      <Button
        text="Log In"
        imageOnRight={Images.splashPage.image_paw}
        onPress={() => navigation.navigate(RouteNames.loginPage.name)}
      />
      <View style={styles.buttonsSecondConatiner}>
        <TouchableOpacity
          style={styles.createFreeButtonStyle}
          onPress={() => navigation.navigate(RouteNames.singUpPage.name)}>
          <View style={styles.centeredTextContainer}>
            <Text style={styles.freeBtnText}>
              {translate('createAccountText')}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

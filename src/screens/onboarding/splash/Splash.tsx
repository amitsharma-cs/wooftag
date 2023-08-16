import {View, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './Styles';
import Images from '../../../assets/images/Images';
import {useNavigation} from '@react-navigation/native';
import RouteNames from '../../../navigation/RouteNames';

const Splash = ({}: any) => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(RouteNames.welcomePage.name);
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.splashPage.splash_background}
        style={styles.logoStyles}
      />
    </View>
  );
};

export default Splash;

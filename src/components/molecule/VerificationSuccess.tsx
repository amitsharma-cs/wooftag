import React from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';
import Images from '../../assets/images/Images';
import Button from './Button';
import {translate} from '../../translations/translate';
const VerificationSuccess = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={Images.splashPage.woof_bgImage}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>{translate('passwordChanged')}</Text>
        <Text style={styles.successText}>
          {translate('passwordChangedSuccessfull')}
        </Text>
      </View>
      <Button text="Back to login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    paddingTop: 50,
  },
  image: {
    height: 200,
    width: 150,
  },
  textContainer: {
    alignSelf: 'center',
    marginTop: 30,
  },
  headingText: {
    paddingTop: 10,
    lineHeight: 24,
    fontWeight: '700',
    fontSize: 32,
    color: 'black',
    textAlign: 'center',
  },
  successText: {
    marginTop: 15,
    lineHeight: 24,
    fontWeight: '400',
    fontSize: 17,
    color: 'black',
  },
  successSecondText: {
    lineHeight: 24,
    fontWeight: '400',
    fontSize: 17,
    color: 'black',
  },
});

export default VerificationSuccess;

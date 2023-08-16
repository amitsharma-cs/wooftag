import React from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';
import Images from '../../assets/images/Images';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../assets/sizes/Sizes';

interface ButtonProps {
  text: string;
  imageOnRight?: ImageSourcePropType;
  errorBackgroundImage?: boolean;
  onPress?: () => void;
  rightIconStyle?: ImageStyle;
}

const Button: React.FC<ButtonProps> = ({
  text,
  imageOnRight,
  errorBackgroundImage,
  onPress,
  rightIconStyle,
}) => {
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.signUpButtonStyle} onPress={onPress}>
        <ImageBackground
          resizeMode="contain"
          style={styles.loginBtnImage}
          source={
            errorBackgroundImage
              ? Images.OtpPage.error_image_background
              : Images.splashPage.image_background
          }>
          <View style={styles.centeredTextContainer}>
            <Text style={styles.loginBtnText}>{text}</Text>
            {imageOnRight && (
              <Image
                resizeMode="contain"
                style={[styles.imageOnRight, rightIconStyle]}
                source={imageOnRight}
              />
            )}
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    marginHorizontal: wp(5),
    marginTop: hp(3),
  },
  signUpButtonStyle: {
    backgroundColor: '#fff',
    height: hp(8),
    borderRadius: 15,
    borderColor: '#bfbfbf',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  loginBtnImage: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: hp(8),
    width: wp(90),
  },
  centeredTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  loginBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  imageOnRight: {
    height: hp(10),
    width: wp(10),
    position: 'absolute',
    right: 15,
  },
});

export default Button;

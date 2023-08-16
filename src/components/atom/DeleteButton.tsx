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
  ViewStyle,
} from 'react-native';
import Images from '../../assets/images/Images';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../assets/sizes/Sizes';

interface ButtonProps {
  text: string;
  imageOnLeft?: ImageSourcePropType;
  errorBackgroundImage?: boolean;
  onPress?: () => void;
  leftIconStyle?: ImageStyle;
  additionalText?: string;
  textViewStyle?: ViewStyle;
}

const DeleteButton: React.FC<ButtonProps> = ({
  text,
  imageOnLeft,
  errorBackgroundImage,
  onPress,
  leftIconStyle,
  additionalText,
  textViewStyle,
}) => {
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.signUpButtonStyle} onPress={onPress}>
        <ImageBackground
          resizeMode="contain"
          style={styles.deleteBtnImage}
          source={
            errorBackgroundImage
              ? Images.SettingPage.deleteBtnBg
              : Images.splashPage.image_background
          }>
          <View style={styles.centeredTextContainer}>
            {imageOnLeft && (
              <Image
                resizeMode="contain"
                style={[styles.imageOnLeft, leftIconStyle]}
                source={imageOnLeft}
              />
            )}
            <View style={[styles.textContainer, textViewStyle]}>
              <Text style={styles.deleteBtnText}>{text}</Text>
              {additionalText && (
                <Text style={styles.additionalText}>{additionalText}</Text>
              )}
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    // marginHorizontal: wp(5),
    marginTop: hp(3),
  },
  signUpButtonStyle: {
    height: hp(10),
    borderRadius: 15,
    borderColor: '#bfbfbf',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    alignSelf: 'center',
    width: wp(90),
  },
  deleteBtnImage: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: hp(10),
    width: wp(90),
  },
  centeredTextContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: hp(10),
    marginTop: 10,
    marginBottom: 10,
  },
  deleteBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  imageOnLeft: {
    height: hp(3),
    width: hp(3),
    position: 'absolute',
    left: wp(5),
  },
  additionalText: {
    fontSize: 13,
    color: '#fff',
    marginTop: 2,
  },
});

export default DeleteButton;

import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  TextStyle,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../assets/sizes/Sizes';
type BackgroundProps = {
  backgroundIcon: ImageSourcePropType;
  backgroundIconStyle?: ImageStyle;
  heading?: string;
  subHeading?: string;
  headingStyle?: TextStyle;
  subHeadingStyle?: TextStyle;
};

const CustomBackgroundImage: React.FC<BackgroundProps> = props => {
  return (
    <ImageBackground
      source={props.backgroundIcon}
      style={[styles.backImageStyle, props.backgroundIconStyle]}>
      <Text style={props.headingStyle}>{props.heading}</Text>
      <Text>{props.subHeading}</Text>
    </ImageBackground>
  );
};
export default CustomBackgroundImage;
const styles = StyleSheet.create({
  backImageStyle: {
    height: hp(12),
    width: wp(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

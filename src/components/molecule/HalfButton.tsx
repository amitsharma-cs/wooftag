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
  onPress?: () => void;
  background?: boolean;
}

const HalfButton: React.FC<ButtonProps> = ({text, onPress, background}) => {
  return (
    <View style={styles.buttonsContainer}>
      {background ? (
        <TouchableOpacity onPress={onPress} style={styles.bgImageStyle}>
          <ImageBackground
            resizeMode="contain"
            style={styles.bgImageStyle}
            source={Images.half_image_background}>
            <Text style={styles.btnText}>{text}</Text>
          </ImageBackground>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.rightBtnStyle} onPress={onPress}>
          <Text style={styles.rightBtnText}>{text}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HalfButton;

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
  },
  bgImageStyle: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    height: hp(7),
    width: wp(42),
    // backgroundColor: '#000',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  rightBtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  rightBtnStyle: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#bfbfbf',
    // backgroundColor: '#000',
    padding: 17,
    height: hp(7),
    width: wp(42),
  },
});

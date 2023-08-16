import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Images from '../../assets/images/Images';
import {heightPercentageToDP as hp} from '../../assets/sizes/Sizes';

type Props = {
  source?: ImageSourcePropType;
  viewStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  ellipse?: boolean;
  ellipseStyle?: ImageStyle;
};
const ProfileImage: React.FC<Props> = ({
  source,
  viewStyle,
  imageStyle,
  ellipse,
  ellipseStyle,
}) => {
  return (
    <View style={[styles.profileImageView, viewStyle]}>
      <ImageBackground
        source={source ? source : Images.image_logo}
        style={[styles.profileImageStyle, imageStyle]}>
        {ellipse ? (
          <Image
            source={Images.ellipse}
            style={[styles.elipseIconStyle, ellipseStyle]}
          />
        ) : null}
      </ImageBackground>
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  profileImageView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  elipseIconStyle: {
    position: 'absolute',
    // alignSelf: 'flex-end',
    bottom: hp(1.8),
    right: hp(1.8),
    // left: wp(63),
    height: hp(2.5),
    width: hp(2.5),
  },
  profileImageStyle: {
    height: hp(20),
    width: hp(20),
  },
});

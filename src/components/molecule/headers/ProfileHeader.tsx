import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Images from '../../../assets/images/Images';
import ProfileImage from '../ProfileImage';
import {heightPercentageToDP as hp} from '../../../assets/sizes/Sizes';

type Props = {
  onPressBack?: () => void;
  title?: string;
  onPressRight?: () => void;
};
const ProfileHeader: React.FC<Props> = ({onPressBack, onPressRight}) => {
  return (
    <ImageBackground
      source={Images.header_background_image}
      style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.iconViewStyle}>
          {onPressBack ? (
            <TouchableOpacity
              style={styles.leftIconViewStyle}
              onPress={onPressBack}>
              <Image
                source={Images.authPage.left_icon}
                style={styles.iconStyle}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <Image
          source={Images.splashPage.header_logo}
          style={styles.headerIconStyle}
        />
        <View style={styles.iconViewStyle}>{onPressRight ? null : null}</View>
      </View>
      {/* //profile picture */}
      <ProfileImage />
    </ImageBackground>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  mainContainer: {
    height: hp(33),
  },
  container: {
    paddingVertical: hp(1.8),
    paddingHorizontal: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: hp(2.2),
    fontWeight: '700',
    color: '#000832',
  },
  iconViewStyle: {
    height: hp(4),
    width: hp(4),
  },
  iconStyle: {
    marginHorizontal: 5,
  },
  leftIconViewStyle: {
    height: hp(4),
    width: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  headerIconStyle: {
    // height: hp(5),
    // width: wp(30),
  },
});

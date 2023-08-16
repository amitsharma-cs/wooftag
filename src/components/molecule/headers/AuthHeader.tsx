import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Images from '../../../assets/images/Images';
import {heightPercentageToDP as hp} from '../../../assets/sizes/Sizes';
import Colors from '../../../assets/colors/Colors';

type Props = {
  title?: string;
  onPressBack?: () => void;
  onPressRight?: () => void;
  rightIcon?: ImageSourcePropType;
  rightIconStyle?: ImageStyle;
};

const AuthHeader: React.FC<Props> = ({
  title,
  onPressBack,
  onPressRight,
  rightIcon,
  rightIconStyle,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconViewStyle}>
        {onPressBack ? (
          <TouchableOpacity onPress={onPressBack}>
            <Image source={Images.back_icon} style={styles.iconStyle} />
          </TouchableOpacity>
        ) : null}
      </View>
      {title ? (
        <Text style={styles.titleStyle}>{title}</Text>
      ) : (
        <View style={styles.centerViewStyle}>
          <Image
            source={Images.splashPage.welcome_background}
            style={styles.logoStyle}
          />
          <Text style={styles.boldTextStyle}>Woof</Text>
          <Text style={styles.textStyle}>tag.</Text>
        </View>
      )}
      <View style={styles.iconViewStyle}>
        {onPressRight ? (
          <TouchableOpacity onPress={onPressRight}>
            <Image
              source={rightIcon ? rightIcon : Images.qr_code_icon}
              style={[styles.iconStyle, rightIconStyle]}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E8ECF3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000832',
  },
  iconViewStyle: {
    height: 35,
    width: 35,
  },
  iconStyle: {
    marginHorizontal: 5,
  },
  centerViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoStyle: {
    height: hp(4),
    width: hp(3.1),
    marginHorizontal: 5,
  },
  boldTextStyle: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    color: Colors.lightGrey,
  },
  textStyle: {
    fontSize: hp(2.5),
    fontWeight: '300',
    color: Colors.lightGrey,
  },
});

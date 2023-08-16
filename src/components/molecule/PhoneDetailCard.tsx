import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../assets/colors/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../assets/sizes/Sizes';
import ToggleButton from '../atom/ToggleButton';
import Images from '../../assets/images/Images';
import {translate} from '../../translations/translate';

type Props = {
  name: string;
  nameInitial: string;
  phoneNumber: string;
  avatar?: ImageSourcePropType;
};
const PhoneDetailCard: React.FC<Props> = ({
  name,
  nameInitial,
  phoneNumber,
  avatar,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftImageView}>
        {avatar ? (
          <Image source={avatar} />
        ) : (
          <Text style={styles.initialTextStyle}>{nameInitial}</Text>
        )}
      </View>
      <View>
        <Text style={styles.textStyle}>
          {name}'s {translate('phone')}
        </Text>
        <Text style={styles.secondaryTextStyle}>{phoneNumber}</Text>
      </View>
      <ToggleButton />
      <TouchableOpacity>
        <Image source={Images.edit_button_icon} />
      </TouchableOpacity>
    </View>
  );
};

export default PhoneDetailCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey_bg,
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    marginBottom: hp(2),
    borderRadius: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftImageView: {
    height: hp(6),
    width: hp(6),
    borderRadius: hp(3),
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: Colors.white,
  },
  initialTextStyle: {
    fontSize: hp(3),
    fontWeight: '700',
    color: Colors.white,
  },
  textStyle: {
    fontSize: hp(1.8),
    fontWeight: '700',
    lineHeight: hp(2.2),
  },
  secondaryTextStyle: {
    fontSize: hp(1.4),
    fontWeight: '300',
    lineHeight: hp(2.2),
  },
});

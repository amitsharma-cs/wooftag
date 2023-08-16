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
import ToggleButton from '../atom/ToggleButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../assets/sizes/Sizes';
import Images from '../../assets/images/Images';

type Props = {
  addressName: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
};
const AddressDetailCard: React.FC<Props> = ({
  addressName,
  city,
  country,
  postalCode,
  street,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftImageView}>
        <Image source={Images.location_icon} />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.textStyle}>{addressName}</Text>
        <Text style={styles.secondaryTextStyle}>{street}</Text>
        <Text style={styles.secondaryTextStyle}>
          {postalCode} {city}
        </Text>
        <Text style={styles.secondaryTextStyle}>{country}</Text>
      </View>
      <View style={styles.rightViewStyle}>
        <TouchableOpacity style={styles.paddingBottom}>
          <Image source={Images.edit_button_icon} />
        </TouchableOpacity>
        <ToggleButton />
      </View>
    </View>
  );
};

export default AddressDetailCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey_bg,
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    marginBottom: hp(2),
    borderRadius: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftImageView: {
    marginRight: hp(3),
  },
  initialTextStyle: {
    fontSize: hp(3),
    fontWeight: '700',
    color: Colors.white,
  },
  textStyle: {
    fontSize: hp(2.4),
    fontWeight: '700',
    lineHeight: hp(2.2),
  },
  secondaryTextStyle: {
    fontSize: hp(1.8),
    fontWeight: '300',
    lineHeight: hp(2.8),
  },
  rightViewStyle: {
    alignItems: 'center',
  },
  paddingBottom: {
    marginBottom: hp(3),
  },
});

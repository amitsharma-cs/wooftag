import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Images from '../../assets/images/Images';
import Colors from '../../assets/colors/Colors';
import {widthPercentageToDP as wp} from '../../assets/sizes/Sizes';
import ToggleButton from '../atom/ToggleButton';
import {translate} from '../../translations/translate';

type Props = {
  lost?: boolean;
};
const LostProfileModalHeader: React.FC<Props> = ({lost}) => {
  return (
    <View style={styles.modalTopViewStyle}>
      <TouchableOpacity
        style={lost ? styles.lostViewStyle : styles.notLostViewStyle}>
        <Image
          source={lost ? Images.lost_dog_icon : Images.dog_icon}
          style={lost ? {} : styles.lostIconStyle}
        />
        <Text style={styles.lostTextStyle}>{translate('lost')}</Text>
      </TouchableOpacity>
      <View style={styles.subView}>
        <Image source={Images.round_info} />
        <View style={styles.textViewStyle}>
          <Text style={styles.primaryTextStyle}>{translate('profileOn')}</Text>
          <Text style={styles.secondaryTextStyle}>{translate('on_off')}</Text>
        </View>
        <ToggleButton />
      </View>
    </View>
  );
};

export default LostProfileModalHeader;

const styles = StyleSheet.create({
  modalTopViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  lostViewStyle: {
    borderRadius: 12,
    paddingVertical: 9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EE5D50',
    paddingHorizontal: 25,
    width: wp(20),
  },
  notLostViewStyle: {
    borderRadius: 12,
    paddingVertical: 9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#54A7DC',
    paddingHorizontal: 25,
    width: wp(20),
  },
  lostTextStyle: {
    fontSize: 9,
    fontWeight: '700',
    lineHeight: 10,
    color: Colors.white,
  },
  lostIconStyle: {
    marginBottom: 7,
  },
  subView: {flexDirection: 'row', marginHorizontal: 15, alignItems: 'center'},
  textViewStyle: {marginLeft: 8, marginRight: 30},
  primaryTextStyle: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 21,
  },
  secondaryTextStyle: {
    fontSize: 10,
    fontWeight: '300',
    lineHeight: 21,
  },
});

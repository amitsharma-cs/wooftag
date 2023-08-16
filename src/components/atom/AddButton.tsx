import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from '../../assets/sizes/Sizes';
import Images from '../../assets/images/Images';
import Colors from '../../assets/colors/Colors';

type Props = {
  text?: string;
  subText?: string;
  onPress?: () => void;
};
const AddButton = ({text, subText, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textViewStyle}>
        <Text style={styles.primaryText}>{text}</Text>
        <Text style={styles.secondaryText}>{subText}</Text>
      </View>
      <View style={styles.separatorView} />
      <Image
        source={Images.ScannerPage.plus_icon}
        style={styles.rightIconStyle}
      />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey_bg,
    paddingVertical: hp(3),
    flexDirection: 'row',
    borderRadius: hp(1),
    shadowOpacity: 0.3,
    shadowColor: Colors.black,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    alignItems: 'center',
  },
  textViewStyle: {flex: 1},
  primaryText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: hp(2),
    lineHeight: hp(2.4),
  },
  secondaryText: {
    textAlign: 'center',
    fontWeight: '300',
    fontSize: hp(1.6),
    lineHeight: hp(2.4),
  },
  rightIconStyle: {
    marginHorizontal: hp(2.5),
  },
  separatorView: {
    width: 1,
    backgroundColor: Colors.lightGrey,
    height: hp(4),
  },
});

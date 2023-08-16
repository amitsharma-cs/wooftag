import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TextView from './TextView';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../assets/sizes/Sizes';
type containerProps = {
  title?: string;
  option?: string;
};
const OptionContainer = (props: containerProps) => {
  return (
    <View style={styles.container}>
      <TextView textStyle={styles.titleStyle}>{props.title}</TextView>
      <TextView textStyle={styles.optionStyle}>{props.option}</TextView>
    </View>
  );
};
export default OptionContainer;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: wp(2),
    paddingVertical: hp(0.2),
  },
  titleStyle: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000832',
    paddingVertical: hp(0.2),
  },
  optionStyle: {
    fontSize: 16,
    paddingLeft: wp(0.5),
    color: '#000832',
    paddingVertical: hp(0.2),
  },
});

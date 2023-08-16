import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../assets/sizes/Sizes';

type BoxViewProps = {
  children?: React.ReactNode;
  isChangeBackground?: boolean;
};

const BoxView: React.FC<BoxViewProps> = props => {
  return <View style={styles.backImageStyle}>{props.children}</View>;
};

export default BoxView;

const styles = StyleSheet.create({
  backImageStyle: {
    padding: wp(1.5),
    borderRadius: wp(2),
    paddingVertical: hp(1.5),
    paddingBottom: hp(2.5),
    backgroundColor: '#F2F5FC', // Box view background color/
    elevation: 5,
  },
});

import {
  View,
  Image,
  StyleSheet,
  ImageBackgroundProps,
  ImageStyle,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../assets/sizes/Sizes';
import ToggleButton from '../atom/ToggleButton';

type infoCardProps = {
  rightIcon?: ImageBackgroundProps;
  rightIconStyle?: ImageStyle;
  children?: React.ReactNode;
  leftIcon?: ImageBackgroundProps;
  leftIconStyle?: ImageStyle;
  isToggle?: boolean;
};

const InformationCard = (props: infoCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.rightSideView}>
        {props.rightIcon && (
          <Image
            source={props.rightIcon}
            resizeMode="contain"
            style={[styles.iconStyle, props.rightIconStyle]}
          />
        )}
        <View style={{marginLeft: 15}}>{props.children}</View>
      </View>
      {props.isToggle ? (
        <View style={styles.leftSideView}>
          {/* Your Toggle Button */}
          <ToggleButton />
        </View>
      ) : (
        <View style={styles.leftSideView}>
          {props.leftIcon && (
            <Image
              source={props.leftIcon}
              resizeMode="contain"
              style={[styles.iconStyle, props.leftIconStyle]}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default InformationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  rightSideView: {
    flexDirection: 'row',
    width: '80%',
  },
  leftSideView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
    justifyContent: 'center',
  },
  iconStyle: {
    height: hp(5.8),
    width: wp(12),
  },
});

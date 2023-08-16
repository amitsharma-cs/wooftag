import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ModalSlider from '../components/atom/ModalSlider';
import NormalButton from '../components/molecule/NormalButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../assets/sizes/Sizes';
import DeleteButton from '../components/atom/DeleteButton';
import Images from '../assets/images/Images';
import {translate} from '../translations/translate';

type Props = {
  visible?: boolean;
  onConfirmPress?: () => void;
  onCancelPress?: () => void;
};
const SignOutModal: React.FC<Props> = ({
  visible,
  onCancelPress,
  onConfirmPress,
}) => {
  return (
    <ModalSlider visible={visible} closeModal={onCancelPress}>
      <View style={styles.container}>
        <Text style={styles.primaryTextStyle}>
          {translate('confirmSignOut')}
        </Text>
        <Text style={[styles.secondaryTextStyle, styles.paddingStyle]}>
          {translate('sureSignOut')}
        </Text>
      </View>
      <DeleteButton
        text={`${translate('yes')}, ${translate('signOut')}`}
        onPress={onConfirmPress}
        leftIconStyle={styles.logoutBtnStyle}
        imageOnLeft={Images.logout_white}
        errorBackgroundImage
      />
      <NormalButton
        title={`${translate('no')}, ${translate('cancel')}`}
        onPress={onCancelPress}
      />
    </ModalSlider>
  );
};

export default SignOutModal;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(3),
  },
  primaryTextStyle: {
    textAlign: 'center',
    fontSize: hp(3),
    lineHeight: hp(3),
    fontWeight: '700',
  },
  secondaryTextStyle: {
    textAlign: 'center',
    fontSize: hp(2),
    lineHeight: hp(2.4),
    fontWeight: '300',
    paddingHorizontal: hp(2),
  },
  paddingStyle: {
    padding: hp(2.4),
  },
  logoutBtnStyle: {
    height: hp(7),
    width: wp(7),
  },
});

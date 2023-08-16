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
const DeleteAccountModal: React.FC<Props> = ({
  visible,
  onCancelPress,
  onConfirmPress,
}) => {
  return (
    <ModalSlider visible={visible} closeModal={onCancelPress}>
      <View style={styles.container}>
        <Text style={styles.primaryTextStyle}>
          {translate('deleteMainAccount')}
        </Text>
        <Text style={[styles.secondaryTextStyle, styles.paddingStyle]}>
          {translate('afterDeleteAction')}
        </Text>
      </View>
      <DeleteButton
        text={`${translate('yes')}, ${translate('deleteAccount')}`}
        onPress={onConfirmPress}
        leftIconStyle={styles.logoutBtnStyle}
        imageOnLeft={Images.trash_white}
        errorBackgroundImage
      />
      <NormalButton
        title={`${translate('no')}, ${translate('cancel')}`}
        onPress={onCancelPress}
      />
    </ModalSlider>
  );
};

export default DeleteAccountModal;

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
    lineHeight: hp(3),
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

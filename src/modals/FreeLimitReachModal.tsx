import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ModalSlider from '../components/atom/ModalSlider';
import Images from '../assets/images/Images';
import Button from '../components/molecule/Button';
import NormalButton from '../components/molecule/NormalButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../assets/sizes/Sizes';
import {translate} from '../translations/translate';

type Props = {
  visible?: boolean;
  closeModal?: () => void;
  onCancelPress?: () => void;
  onConfirmPress?: () => void;
};
const FreeLimitReachModal: React.FC<Props> = ({
  visible,
  closeModal,
  onCancelPress,
  onConfirmPress,
}) => {
  return (
    <ModalSlider visible={visible} closeModal={closeModal}>
      <View style={[styles.dynamicImageView, styles.verticalMargin]}>
        <Text style={styles.dynamicText}>IMG</Text>
      </View>
      <Text style={styles.modalHeadingTextStyle}>
        {translate('freeLimitReached')}
      </Text>
      <Text style={styles.descriptionTextStyle}>
        {translate('maxFreePetsReached')}
      </Text>
      <Text style={styles.descriptionTextStyle}>
        {translate('upgradeToPro')}
      </Text>
      <Button
        text={`${translate('yes')}, ${translate('showMePro')}`}
        imageOnRight={Images.white_image_paw}
        onPress={onConfirmPress}
      />
      <NormalButton
        onPress={onCancelPress}
        title={`${translate('no')}, ${translate('cancel')}`}
      />
    </ModalSlider>
  );
};

export default FreeLimitReachModal;

const styles = StyleSheet.create({
  dynamicImageView: {
    borderRadius: hp(1.8),
    backgroundColor: '#DADFEA80',
    paddingHorizontal: wp(2),
    paddingVertical: hp(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(3),
  },
  dynamicText: {
    fontSize: hp(4),
    lineHeight: hp(5),
    textAlign: 'center',
    paddingVertical: hp(6),
    color: '#000832',
  },
  verticalMargin: {
    marginVertical: hp(3),
  },
  descriptionTextStyle: {
    fontSize: hp(2),
    lineHeight: hp(2.5),
    color: '#000832',
    paddingVertical: hp(1),
  },
  modalHeadingTextStyle: {
    fontSize: hp(2.2),
    lineHeight: hp(2.2),
    fontWeight: '700',
    color: '#000832',
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ModalSlider from '../components/atom/ModalSlider';
import Button from '../components/molecule/Button';
import NormalButton from '../components/molecule/NormalButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../assets/sizes/Sizes';
import Colors from '../assets/colors/Colors';
import {translate} from '../translations/translate';

type Props = {
  visible?: boolean;
  closeModal?: () => void;
  onCancelPress?: () => void;
  onConfirmPress?: () => void;
};
const NoOriginalModal: React.FC<Props> = ({
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
        {translate('noOriginalWooftag')}
      </Text>
      <Text style={styles.descriptionTextStyle}>
        {translate('notOriginalWooftag')}
      </Text>
      <Button text={translate('buyWooftagsHere')} onPress={onConfirmPress} />
      <NormalButton
        onPress={onCancelPress}
        title={`${translate('no')}, ${translate('cancel')}`}
      />
    </ModalSlider>
  );
};

export default NoOriginalModal;

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
    color: Colors.black,
  },
  verticalMargin: {
    marginVertical: hp(3),
  },
  descriptionTextStyle: {
    fontSize: hp(1.8),
    textAlign: 'center',
    lineHeight: hp(2),
    color: Colors.black,
    paddingVertical: hp(1),
  },
  subDescriptionTextStyle: {
    fontSize: hp(1.8),
    textAlign: 'center',
    color: Colors.black,
  },
  modalHeadingTextStyle: {
    fontSize: hp(3),
    lineHeight: hp(4),
    textAlign: 'center',
    fontWeight: '700',
    color: Colors.black,
  },
});

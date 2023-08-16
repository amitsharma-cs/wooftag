import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ModalSlider from '../components/atom/ModalSlider';
import Button from '../components/molecule/Button';
import NormalButton from '../components/molecule/NormalButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../assets/sizes/Sizes';
import Colors from '../assets/colors/Colors';
import Images from '../assets/images/Images';
import {translate} from '../translations/translate';

type Props = {
  visible?: boolean;
  closeModal?: () => void;
  onCancelPress?: () => void;
  onConfirmPress?: () => void;
};
const AssignTagModal: React.FC<Props> = ({
  visible,
  closeModal,
  onCancelPress,
  onConfirmPress,
}) => {
  return (
    <ModalSlider visible={visible} closeModal={closeModal}>
      <ImageBackground
        source={Images.background_frame}
        style={[styles.dynamicImageView, styles.verticalMargin]}>
        <Image source={Images.dog2} />
        <Text style={styles.petNameStyle}>Bruno</Text>
      </ImageBackground>
      <Text style={styles.modalHeadingTextStyle}>{translate('assignTag')}</Text>
      <Text style={styles.descriptionTextStyle}>{translate('reassign')}</Text>

      <Button
        text={`${translate('yes')}, ${translate('assign')}`}
        onPress={onConfirmPress}
      />
      <NormalButton
        onPress={onCancelPress}
        title={`${translate('no')}, ${translate('cancel')}`}
      />
    </ModalSlider>
  );
};

export default AssignTagModal;

const styles = StyleSheet.create({
  dynamicImageView: {
    borderRadius: hp(1.8),
    backgroundColor: '#DADFEA',
    paddingHorizontal: wp(2),
    paddingVertical: hp(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(3),
    borderEndEndRadius: hp(1),
    height: hp(23),
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
    lineHeight: hp(3),
    color: Colors.black,
    fontWeight: '300',
    paddingVertical: hp(1),
    paddingHorizontal: wp(10),
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
  petNameStyle: {
    fontSize: hp(1.8),
    lineHeight: hp(3),
    textAlign: 'center',
    fontWeight: '700',
    color: Colors.lightGrey,
    marginTop: hp(1),
  },
});

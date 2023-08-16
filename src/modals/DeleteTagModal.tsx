import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ModalSlider from '../components/atom/ModalSlider';
import NormalButton from '../components/molecule/NormalButton';
import {heightPercentageToDP as hp} from '../assets/sizes/Sizes';
import Colors from '../assets/colors/Colors';
import DeleteButton from '../components/atom/DeleteButton';
import Images from '../assets/images/Images';
import {translate} from '../translations/translate';

type Props = {
  visible?: boolean;
  onConfirmPress?: () => void;
  onCancelPress?: () => void;
  petName?: string;
};
const DeleteTagModal: React.FC<Props> = ({
  visible,
  onCancelPress,
  onConfirmPress,
}) => {
  return (
    <ModalSlider visible={visible} closeModal={onCancelPress}>
      <View style={styles.container}>
        <Text style={styles.primaryTextStyle}>
          {translate('deleteWooftag')}
        </Text>
        <Text style={[styles.secondaryTextStyle, styles.paddingStyle]}>
          {translate('confirmDeleteWooftagDevice')}

          <Text style={styles.boldTextStyle}> PROFILENAME </Text>
          {translate('profile')}
        </Text>
        <Text style={styles.secondaryTextStyle}>
          {translate('activateLater')}
        </Text>
      </View>
      <DeleteButton
        text={`${translate('yes')}, ${translate('deleteNow')}`}
        imageOnLeft={Images.trash_white}
        errorBackgroundImage
        textViewStyle={styles.buttonTextStyle}
      />
      <NormalButton
        title={`${translate('no')}, ${translate('cancel')}`}
        onPress={onCancelPress}
      />
    </ModalSlider>
  );
};

export default DeleteTagModal;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(3),
  },
  primaryTextStyle: {
    textAlign: 'center',
    fontSize: hp(3),
    lineHeight: hp(3),
    fontWeight: '700',
    color: Colors.lightGrey,
  },
  secondaryTextStyle: {
    textAlign: 'center',
    fontSize: hp(2),
    lineHeight: hp(2.4),
    fontWeight: '300',
    color: Colors.lightGrey,
    paddingHorizontal: hp(2),
  },
  paddingStyle: {
    padding: hp(2.4),
  },
  boldTextStyle: {
    fontWeight: '700',
  },
  buttonTextStyle: {flex: 1, alignItems: 'center', marginLeft: 0},
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ModalSlider from '../components/atom/ModalSlider';
import Button from '../components/molecule/Button';
import NormalButton from '../components/molecule/NormalButton';
import {heightPercentageToDP as hp} from '../assets/sizes/Sizes';
import {translate} from '../translations/translate';

type Props = {
  visible?: boolean;
  onConfirmPress?: () => void;
  onCancelPress?: () => void;
};
const DeleteAllModal: React.FC<Props> = ({
  visible,
  onCancelPress,
  onConfirmPress,
}) => {
  return (
    <ModalSlider visible={visible} closeModal={onCancelPress}>
      <View style={styles.container}>
        <Text style={styles.primaryTextStyle}>
          {translate('deleteAllNotifications')}
        </Text>
        <Text style={[styles.secondaryTextStyle, styles.paddingStyle]}>
          {translate('deleteAllNotificationsConfirmation')}
        </Text>
        <Text style={styles.secondaryTextStyle}>
          {translate('cannotBeUndone')}
        </Text>
      </View>
      <Button
        text={`${translate('yes')}, ${translate('deleteAll')}`}
        onPress={onConfirmPress}
        errorBackgroundImage
      />
      <NormalButton
        title={`${translate('no')}, ${translate('cancel')}`}
        onPress={onCancelPress}
      />
    </ModalSlider>
  );
};

export default DeleteAllModal;

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
});
